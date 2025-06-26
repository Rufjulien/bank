class MessageExtractor {
  constructor(client) {
    this.client = client;
  }

  async extractMessages(chatId) {
    const chat = await this.client.getChatById(chatId);
    return chat.fetchMessages({ limit: 50 });
  }
}

module.exports = MessageExtractor;
