import Index from './page/Index/index.jsx';
import Login from './page/Login/index.jsx';
import Hello from './page/Hello/index.jsx';

// todo: 多级路由
export default [
  {
    path: '/',
    exact: true,
    component: Index,
    key: 'index'
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    key: 'login'
  },
  {
    path: '/hello',
    exact: true,
    component: Hello,
    loadData: Hello.loadData,
    key: 'hello'
  }
];
