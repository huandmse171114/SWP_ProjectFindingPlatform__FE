import Home from '../pages/Home';
import Login from '../pages/Login';
import Member from '../pages/Member';
import Project from '../pages/Project';
import ContentOnlyLayout from '../components/Layout/ContentOnlyLayout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: ContentOnlyLayout },
     {path: '/projects', component: Project},
     {path: '/members', component: Member}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
