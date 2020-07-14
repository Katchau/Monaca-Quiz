import HomePage from '@/pages/Landing.vue';
import LogIn from "@/pages/user/LogIn";
import Register from "@/pages/user/Register"

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login/',
    component: LogIn
  },
  {
    path: '/register/',
    component: Register
  }
];
