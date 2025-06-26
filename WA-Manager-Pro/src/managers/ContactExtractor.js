class ContactExtractor {
  constructor(client) {
    this.client = client;
  }

  async extractPrivateChats() {
    const chats = await this.client.getChats();
    return chats.filter(c => !c.isGroup);
  }
}

module.exports = ContactExtractor;
