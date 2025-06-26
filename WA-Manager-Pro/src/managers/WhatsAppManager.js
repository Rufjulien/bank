const { Client, LocalAuth } = require('whatsapp-web.js');
const { EventEmitter } = require('events');

class WhatsAppManager extends EventEmitter {
  constructor() {
    super();
    this.accounts = {};
    this.counter = 0;
  }

  addAccount() {
    const id = ++this.counter;
    const client = new Client({
      authStrategy: new LocalAuth({ clientId: `account-${id}` })
    });

    client.on('qr', (qr) => {
      this.emit('qr', { id, qr });
    });

    client.on('ready', () => {
      this.emit('ready', { id });
    });

    client.on('disconnected', () => {
      this.emit('disconnected', { id });
    });

    client.initialize();
    this.accounts[id] = client;
    return id;
  }

  disconnectAccount(id) {
    const client = this.accounts[id];
    if (client) {
      client.destroy();
      delete this.accounts[id];
    }
  }
}

module.exports = WhatsAppManager;
