import Home from '../pages/Home';
import Login from '../pages/Login';
import Member from '../pages/Member';
import Project from '../pages/Project';
import About from '../pages/About';
import ContentOnlyLayout from '../components/Layout/ContentOnlyLayout';
import ProjectDetail from '../pages/ProjectDetail';
import CreateProject from '../pages/CreateProject';
import  Dashboard  from '../pages/Dashboard';
import ProfileProject from '../pages/ProfileProject';
import EditProject from '../pages/EditProject';
import Team from '../pages/Team';
import NoHeaderLayout from '../components/Layout/NoHeaderLayout';
import Profile from '../pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: ContentOnlyLayout },
    {path: '/project', component: Project},
    {path: '/member', component: Member},
    {path: '/about-us', component: About},
    {path: '/create-project',component: CreateProject},
    {path: '/edit-project/:id',component: EditProject},
    {path: '/project-detail/:id',component: ProjectDetail},
    {path: '/profile',component: Profile},
    {path: '/profile/:tab',component: Profile},
    {path: '/profileproject',component: ProfileProject},
    {path: '/team',component: Team},
    {path: '/dashboard',component: Dashboard, layout: NoHeaderLayout},
    {path: '/dashboard/:tab',component: Dashboard, layout: NoHeaderLayout},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
