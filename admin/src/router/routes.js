import BasicLayoutLogin from "../components/BasicLayoutLogin";
import Login from "../views/Login";
import BasicLayout from "../components/BasicLayout";
import Stack from "../views/IndexStack";
import StackCreate from "../views/IndexStackCreate";
import StackEdit from "../views/IndexStackEdit";
import Question from "../views/IndexQuestion";
import QuestionCreate from "../views/IndexQuestionCreate";
import QuestionEdit from "../views/IndexQuestionEdit";
import Course from "../views/IndexCourse";
import CourseCreate from "../views/IndexCourseCreate";
import CourseEdit from "../views/IndexCourseEdit";
import ZhiYe from "../views/IndexZhiYe";
import ZhiYeCreate from "../views/IndexZhiYeCreate";
import ZhiYeEdit from "../views/IndexZhiYeEdit"

export default [
  {
    path: "/login",
    component: BasicLayoutLogin,
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
          title: "EDU登录"
        }
      }
    ]
  },
  {
    path: "/",
    component: BasicLayout,
    meta: {
      title: "EDU Pro"
    },
    children: [
      {
        path: "/stack",
        name: "Stack",
        component: Stack,
        meta: {
          title: "技能"
        }
      },
      {
        path: "/stack/create",
        name: "StackCreate",
        component: StackCreate,
        meta: {
          title: "技能新建"
        }
      },
      {
        path: "/stack/edit/:id",
        name: "StackEdit",
        component: StackEdit,
        meta: {
          title: "技能编辑"
        }
      },
      {
        path: "/question",
        name: "Question",
        component: Question,
        meta: {
          title: "题库"
        }
      },
      {
        path: "/question/create",
        name: "QuestionCreate",
        component: QuestionCreate,
        meta: {
          title: "题库新建"
        }
      },
      {
        path: "/question/edit/:id",
        name: "QuestionEdit",
        component: QuestionEdit,
        meta: {
          title: "题库编辑"
        }
      },
      {
        path:"/course",
        name:"Course",
        component:Course,
        meta:{
          title:"课程"
        }
      },
      {
        path:"/course/create",
        name:"CourseCreate",
        component:CourseCreate,
        meta:{
          title:"课程添加"
        }
      },
      {
        path:"/course/edit/:id",
        name:"CourseEdit",
        component:CourseEdit,
        meta:{
          title:"课程编辑"
        }
      },
      {
        path:"/zhiye",
        name:"ZhiYe",
        component:ZhiYe,
        meta:{
          title:"职业"
        }
      },
      {
        path:"/zhiye/create",
        name:"ZhiYeCreate",
        component:ZhiYeCreate,
        meta:{
          title:"创建职业"
        }
      },
      {
        path:"zhiye/edit/:id",
        name:"ZhiYeEdit",
        component:ZhiYeEdit,
        meta:{
          title:"编辑职业"
        }
      }
    ]
  }
];