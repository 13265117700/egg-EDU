'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt} = app;

  router.post('/users', controller.managers.passwordLogin);
  router.get('/qiniu', jwt, controller.qiniu.qinius)

  router.get('/api/admin/stack', jwt, controller.stack.index);//技能列表
  router.post('/api/admin/stack', jwt, controller.stack.create)//技能新增
  router.get('/api/admin/stack/:id', jwt, controller.stack.getStack)//技能详情
  router.put('/api/admin/stack/:id', jwt, controller.stack.editStack)//技能编辑
  router.delete('/api/admin/stack/:id', jwt, controller.stack.deleteStack)//技能删除

  router.get('/api/admin/skill/question', jwt, controller.skillQuestions.index)//题目列表
  router.post('/api/admin/skill/question', jwt, controller.skillQuestions.create)//题目新增
  router.get('/api/admin/skill/question/:id', jwt, controller.skillQuestions.getQuestion)//题目详情
  router.put('/api/admin/skill/question/:id', jwt, controller.skillQuestions.editQuestion)//题目编辑
  router.delete('/api/admin/skill/question/:id', jwt, controller.skillQuestions.deleteQuestion)//题目删除

  router.get('/api/admin/course', jwt, controller.course.index)//课程列表
  router.post('/api/admin/course', jwt, controller.course.courseCreate)//课程创建
  router.get('/api/admin/course/:id', jwt, controller.course.courseShow)//课程详情
  router.put('/api/admin/course/:id', jwt, controller.course.courseEdit)//课程修改
  router.delete('/api/admin/course/:id', jwt, controller.course.courseDetele)//课程删除
  router.post('/api/admin/chapter', jwt, controller.courseChapter.create)//章添加
  router.put('/api/admin/chapter/:id', jwt, controller.courseChapter.update)//章修改
  router.delete('/api/admin/chapter/:id', jwt, controller.courseChapter.delete)//章删除
  router.put('/api/admin/chapter/sort/edit', jwt, controller.courseChapter.sort)//章排序
  router.get('/api/admin/section/:id', jwt, controller.courseSection.index)//节详情
  router.post('/api/admin/section', jwt, controller.courseSection.create)//节创建
  router.put('/api/admin/section/:id', jwt, controller.courseSection.update)//节编辑
  router.delete('/api/admin/section/:id', jwt, controller.courseSection.delete)//节删除

  router.get('/api/admin/zhiye', jwt, controller.zhiye.index)//职业列表
  router.get('/api/admin/zhiye/:id', jwt, controller.zhiye.indexItem)//职业详情
  router.post('/api/admin/zhiye', jwt, controller.zhiye.create)//职业创建
  router.put('/api/admin/zhiye/:id', jwt, controller.zhiye.update)//职业编辑
  router.delete('/api/admin/zhiye/:id', jwt, controller.zhiye.delete)//职业删除
  router.get('/api/admin/zhiye/path/:id', jwt, controller.zhiyePath.index)//路径详情
  router.post('/api/admin/zhiye/path', jwt, controller.zhiyePath.create)//路径创建
  router.put('/api/admin/zhiye/path/:id', jwt, controller.zhiyePath.updated)//路径编辑
  router.delete('/api/admin/zhiye/path/:id', jwt, controller.zhiyePath.delete)//路径删除
  router.post('/api/admin/zhiye/course', jwt, controller.zhiyeCourses.created)//职业路径与课程关联创建
  router.delete('/api/admin/zhiye/course/:id', jwt, controller.zhiyeCourses.delete)//职业路径与课程关联删除
  router.post('/api/admin/zhiye/course/sort/edit', jwt, controller.zhiyeCourses.sort)//职业路径与课程关联排序

  router.get('/api/admin/company', jwt, controller.companies.index)//公司列表
  router.post('/api/admin/company', jwt, controller.companies.create)//公司创建
  router.get('/api/admin/company/:id', jwt, controller.companies.indexItem)//公司详情
  router.put('/api/admin/company/:id', jwt, controller.companies.updated)//公司编辑
  router.delete('/api/admin/company/:id', jwt, controller.companies.delete)//公司删除

  router.get('/api/admin/project', jwt, controller.projects.index)//项目列表
  router.post('/api/admin/project', jwt, controller.projects.create)//项目添加
  router.get('/api/admin/project/:id', jwt, controller.projects.indexItem)//项目详情
  router.put('/api/admin/project/:id', jwt, controller.projects.updated)//项目编辑
  router.delete('/api/admin/project/:id', jwt, controller.projects.delete)//项目删除

  router.get('/api/admin/version/:id', jwt, controller.versions.index)//项目版本详情
  router.post('/api/admin/version', jwt, controller.versions.created)//项目版本新增
  router.put('/api/admin/version/:id', jwt, controller.versions.updated)//项目版本编辑
  router.delete('/api/admin/version/:id', jwt, controller.versions.delete)//项目版本删除
  router.post('/api/admin/project/version/sort', jwt, controller.versions.sort)//项目版本排序
  router.get('/api/admin/story/:id', jwt, controller.stories.index)//项目版本故事详情
  router.post('/api/admin/story', jwt, controller.stories.created)//项目版本故事新增
  router.put('/api/admin/story/:id', jwt, controller.stories.updated)//项目版本故事编辑
  router.delete('/api/admin/story/:id', jwt, controller.stories.delete)//项目版本故事删除
  
  router.post('/api/admin/task', jwt, controller.tasks.created)//项目故事任务新增
  router.put('/api/admin/task/:id', jwt, controller.tasks.updated)//项目故事任务编辑
  router.delete('/api/admin/task/:id', jwt, controller.tasks.delete)//项目故事任务删除
  router.post('/api/admin/project/task/sort', jwt, controller.tasks.sort)//项目故事任务排序

  router.get('/api/admin/role', jwt, controller.roles.index)//角色列表
  router.post('/api/admin/role', jwt, controller.roles.created)//角色新增
  router.get('/api/admin/permission', jwt, controller.roles.permission)//权限
};
