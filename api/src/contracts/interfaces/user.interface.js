class UserInterface {
  all() {
    throw new Error('Method all() must be implemented');
  }

  find(id) {
    throw new Error('Method find() must be implemented');
  }
  findByEmail(email) {
    throw new Error('Method findByEmail() must be implemented');
  }

  create(data) {
    throw new Error('Method create() must be implemented');
  }
  update(data) {
    throw new Error('Method create() must be implemented');
  }
  delete(data) {
    throw new Error('Method create() must be implemented');
  }
}

module.exports = UserInterface;
