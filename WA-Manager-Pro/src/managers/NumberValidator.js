class NumberValidator {
  constructor(client) {
    this.client = client;
  }

  async isValid(number) {
    return this.client.isRegisteredUser(number + '@c.us');
  }
}

module.exports = NumberValidator;
