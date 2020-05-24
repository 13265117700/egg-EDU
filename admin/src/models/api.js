const PREFIX = "http://127.0.0.1:7001";

export default {
  passwordLogin: `${PREFIX}/users`,
  qiniu: `${PREFIX}/qiniu`,
  //技能
  stack: `${PREFIX}/api/admin/stack`,
  stackEdit: (id) => `${PREFIX}/api/admin/stack/${id}`,
  //题库
  question: `${PREFIX}/api/admin/skill/question`,
  questionEdit:(id) => `${PREFIX}/api/admin/skill/question/${id}`,
  //课程
  course:`${PREFIX}/api/admin/course`,
  courseId:(id) => `${PREFIX}/api/admin/course/${id}`,
  courseChapter:`${PREFIX}/api/admin/chapter`,
  courseChapterEdit:(id) => `${PREFIX}/api/admin/chapter/${id}`,
  courseChapterSort:`${PREFIX}/api/admin/chapter/sort/edit`,
  courseSection:`${PREFIX}/api/admin/section`,
  courseSectionEdit:(id) => `${PREFIX}/api/admin/section/${id}`,
  //职业
  zhiye:`${PREFIX}/api/admin/zhiye`,
  zhiyeItem:(id) => `${PREFIX}/api/admin/zhiye/${id}`,
  zhiyePath: `${PREFIX}/api/admin/zhiye/path`,
  zhiyePathItem:(id) => `${PREFIX}/api/admin/zhiye/path/${id}`,
  zhiyeCourse: `${PREFIX}/api/admin/zhiye/course`,
  zhiyeCourseItem:(id) => `${PREFIX}/api/admin/zhiye/course/${id}`,
  zhiyeCourseSort:`${PREFIX}/api/admin/zhiye/course/sort/edit`
};
