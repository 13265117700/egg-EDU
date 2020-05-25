const Controller = require('egg').Controller;

class TasksController extends Controller {
  async index() {
    const ctx = this.ctx;
  }
}

module.exports = TasksController