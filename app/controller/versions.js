const Controller = require('egg').Controller;

class VersionController extends Controller {
  async index() {
    const ctx = this.ctx;
  }
}

module.exports = VersionController