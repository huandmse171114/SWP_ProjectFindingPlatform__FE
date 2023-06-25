import Home from '../pages/Home';
import Login from '../pages/Login';
import Member from '../pages/Member';
import Project from '../pages/Project';
import About from '../pages/About';
import ContentOnlyLayout from '../components/Layout/ContentOnlyLayout';
import ProjectDetail from '../pages/ProjectDetail';
import CreateProject from '../pages/CreateProject';
import  Dashboard  from '../pages/Dashboard';
import MemberProfile from '../pages/MemberProfile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: ContentOnlyLayout },
    {path: '/project', component: Project},
    {path: '/member', component: MemberProfile},
    {path: '/about-us', component: About},
    {path: '/create-project',component: CreateProject},
    {path: '/project-detail/:id',component: ProjectDetail},
    {path: '/profile',component: Member},
    {path: '/dashboard',component: Dashboard},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
