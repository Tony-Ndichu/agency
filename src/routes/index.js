import LandingPage from '../views/Landingpage';
import Services from '../views/Services';

const indexRoutes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
];

export default indexRoutes;
