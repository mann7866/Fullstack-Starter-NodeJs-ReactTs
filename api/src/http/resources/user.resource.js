class UserResource {
  static single(user) {
    if (!user) return null;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }

  static collection(users = []) {
    return users.map(user => this.single(user));
  }
}

module.exports = UserResource;
