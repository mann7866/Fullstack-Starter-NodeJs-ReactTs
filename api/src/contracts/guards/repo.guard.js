function guardRepository(repo, rules) {
  return new Proxy(repo, {
    get(target, prop) {
      const original = target[prop];

      if (typeof original !== 'function') {
        return original;
      }

      return function (...args) {
        const required = rules[prop];

        if (required) {
          required.forEach((name, index) => {
            if (args[index] === undefined) {
              throw new Error(
                `[${repo.constructor.name}] ${prop}() requires argument "${name}"`
              );
            }
          });
        }

        return original.apply(target, args);
      };
    },
  });
}

module.exports = guardRepository;
