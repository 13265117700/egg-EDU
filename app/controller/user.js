// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async passwordLogin() {
    const ctx = this.ctx
    let phone = ctx.request.body.phone
    let password = ctx.request.body.password
    if(!phone || !password){
      ctx.body = { code:0,message:'缺少必要参数!' }
      return
    }
    try{
      const users = await ctx.model.User.findAll({where:{phone, password}})
      const user = users[0]
      if(user){
        const token = this.app.jwt.sign({
          name:user.name+`\t`+phone+`\t`+password+`\t`+user.id
        },this.app.config.jwt.secret)
        ctx.body = { code:200,message:'登陆成功!',token}
      }
    }catch(e){
      ctx.body = { code:0,message:'登录失败!' }
    }
  }

  // async show() {
  //   const ctx = this.ctx;
  //   ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  // }

  // async create() {
  //   const ctx = this.ctx;
  //   const { name, age } = ctx.request.body;
  //   const user = await ctx.model.User.create({ name, age });
  //   ctx.status = 201;
  //   ctx.body = user;
  // }

  // async update() {
  //   const ctx = this.ctx;
  //   const id = toInt(ctx.params.id);
  //   const user = await ctx.model.User.findByPk(id);
  //   if (!user) {
  //     ctx.status = 404;
  //     return;
  //   }

  //   const { name, age } = ctx.request.body;
  //   await user.update({ name, age });
  //   ctx.body = user;
  // }

  // async destroy() {
  //   const ctx = this.ctx;
  //   const id = toInt(ctx.params.id);
  //   const user = await ctx.model.User.findByPk(id);
  //   if (!user) {
  //     ctx.status = 404;
  //     return;
  //   }

  //   await user.destroy();
  //   ctx.status = 200;
  // }
}

module.exports = UserController;