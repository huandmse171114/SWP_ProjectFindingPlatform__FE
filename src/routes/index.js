import Home from '../pages/Home';
import Login from '../pages/Login';
import Member from '../pages/Member';
import Project from '../pages/Project';
import About from '../pages/About';
import ContentOnlyLayout from '../components/Layout/ContentOnlyLayout';
import ProjectDetail from '../pages/ProjectDetail';
import  Dashboard  from '../pages/Dashboard';
import MemberProfile from '../pages/MemberProfile';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: ContentOnlyLayout },
    {path: '/projects', component: Project},
    {path: '/members', component: Member},
    {path: '/about', component: About},
    {path: '/projectdetail/:id',component: ProjectDetail},
    {path: '/memberprofile',component: MemberProfile},
     
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
