import HomePage from '@/pages/Landing.vue';
import LogIn from "@/pages/user/LogIn";
import Register from "@/pages/user/Register"
import MoneyTree from "@/pages/game/MoneyTree";
import MoneyComponent from "@/pages/game/MoneyComponent";
import Question from "@/pages/game/Question";

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
    path: '/game/question',
    component: Question,
    options: {
      props: {
        question: 'Question?',
        answers: [
          {
            text: 'Answer 1',
            correct: true
          },
          {
            text: 'Answer 2',
            correct: false
          },            {
            text: 'Answer 3',
            correct: false
          },            {
            text: 'Answer 4',
            correct: false
          }
        ]
      }
    }
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
