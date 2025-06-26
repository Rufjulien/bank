class CampaignManager {
  constructor(client) {
    this.client = client;
  }

  async sendMessage(number, message) {
    await this.client.sendMessage(number + '@c.us', message);
  }
}

module.exports = CampaignManager;
