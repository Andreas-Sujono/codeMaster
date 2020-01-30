import { lazy } from 'react';

const data = [
    {
        path: '/',
        exact: true,
        component: lazy( () => import('desktop/components/Homepage'))
    },
    {
        path: '/frontEnd',
        exact: true,
        component:lazy( () => import('desktop/components/FrontEnd'))
    },
];

export default data;