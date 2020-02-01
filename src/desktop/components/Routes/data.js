import { lazy } from 'react';

const data = [
    {
        path: '/',
        exact: true,
        component: lazy( () => import('desktop/components/Homepage'))
    },
    {
        path: '/docs',
        component:lazy( () => import('desktop/components/Docs'))
    },
];

export default data;