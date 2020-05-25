const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async index() {
    const ctx = this.ctx;
    try{
      const projects = await ctx.model.Projects.findAll()
      ctx.body = {code:200,message:projects}
    }catch(e){
      ctx.body = {code:0,message:'服务器出错!'}
    }
  }

  async create() {
    const ctx = this.ctx;
    try{
      let name = ctx.request.body.name;
      let description = ctx.request.body.description;
      let image_url = ctx.request.body.image_url;
      let created_at = new Date()
      if(!name || !description || !image_url){
        ctx.body = {code:0,message:'缺少必要参数!'}
        return
      }
      await ctx.model.Projects.create({name,description,image_url,created_at})
      ctx.body = {code:200,message:'添加成功!'}
    }catch(e){
      ctx.body = {code:0,message:'服务器出错!'}
    }
  }
}

module.exports = ProjectController