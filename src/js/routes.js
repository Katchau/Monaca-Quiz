import HomePage from '@/pages/Landing.vue';
import LogIn from "@/pages/user/LogIn";
import Register from "@/pages/user/Register"
import MoneyTree from "@/pages/game/MoneyTree";
import MoneyComponent from "@/pages/game/MoneyComponent";

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
  },
  {
    path: '/game/table',
    component: MoneyTree,
    options: {
      props: {
        currentState: 1
      }
    }
  },
  {
    component: MoneyComponent,
    options: {
      props: {
        number: 1,
        prize: 100,
        currentState: 1
      }
    }
  }
];
