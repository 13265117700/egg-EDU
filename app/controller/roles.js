const Controller = require('egg').Controller;

class RoleController extends Controller {
  async index() {
    const ctx = this.ctx;
    try{
      const roles = await ctx.model.Roles.findAll()
      ctx.body = {code:200,message:roles}
    }catch(e){
      ctx.body = {code:0,message:'服务器出错!'}
    }
  }

  async permission() {
    const ctx = this.ctx;
    try{
      const PermissionGroups = await ctx.model.PermissionGroups.findAll()
      const Permission = await ctx.model.Permissions.findAll()
      let PermissionGroup = []
      PermissionGroups.forEach(element => {
        element.dataValues.permission = []
        PermissionGroup.push(element.dataValues)
      });

      Permission.forEach(data => {
        let group_id = data.dataValues.group_id;
        PermissionGroup.forEach((datas,index) => {
          if(group_id === datas.id){
            PermissionGroup[index].permission.push(data)
          }
        })
      })
      ctx.body = {code:200,message:PermissionGroup}
    }catch(e){
      ctx.body = {code:0,message:'服务器出错!'}
    }
  }

  async created() {
    const ctx = this.ctx;
    try{
      let name = ctx.request.body.name;
      let description = ctx.request.body.description;
      let created_at = new Date();
      if(!name || !description){
        ctx.body = {code:0,message:'缺少必要参数!'}
        return
      }
      await ctx.model.Roles.create({name,description,created_at})
      ctx.body = {code:200,message:'成功添加角色!'}
    }catch(e){
      ctx.body = {code:0,message:'服务器出错!'}
    }
  }
}

module.exports = RoleController