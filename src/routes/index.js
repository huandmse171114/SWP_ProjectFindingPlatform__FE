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
import MemberHistory from '../pages/MemberHistory';
import MemberBilling from '../pages/MemberBilling';
import MemberPage from '../pages/MemberPage';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: ContentOnlyLayout },
    {path: '/projects', component: Project},
    {path: '/members', component: MemberProfile},
    {path: '/about', component: About},
    {path: '/createproject',component: CreateProject},
    {path: '/projectdetail/:id',component: ProjectDetail},
    {path: '/memberprofile/:id',component: MemberProfile},
    
    {path: '/profile',component: Member},
    {path: '/dashboard',component: Dashboard},
    {path: '/memberhistory',component: MemberHistory},
    {path: '/memberbilling',component: MemberBilling},
    {path: '/memberpage',component: MemberPage},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
