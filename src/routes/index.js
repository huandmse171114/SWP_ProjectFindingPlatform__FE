import Home from '../pages/Home';
import Login from '../pages/Login';
import Member from '../pages/Member';
import Project from '../pages/Project';
import About from '../pages/About';
import ContentOnlyLayout from '../components/Layout/ContentOnlyLayout';
import  Dashboard  from '../pages/Dashboard';
import Project_Detail from '../pages/Project_Detail';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: ContentOnlyLayout },
    {path: '/projects', component: Project},
    {path: '/members', component: Member},
    {path: '/about', component: About},
    {path: '/projectdetail',component: Project_Detail}

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
