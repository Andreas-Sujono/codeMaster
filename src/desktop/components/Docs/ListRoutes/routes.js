import React from 'react';

import FrontEnd from 'desktop/components/Docs/FrontEnd'
import BackEnd from 'desktop/components/Docs/BackEnd'
import GettingStarted from 'desktop/components/Docs/GettingStarted'
import { Redirect } from 'react-router-dom';


const routes = [
    {
        name:'redirect',
        path: '/docs',
        exact: true,
        hidden: true,
        render() {
            return <Redirect to="/docs/GettingStarted" />;
          },
    },
    {
        name:'GettingStarted',
        path: '/docs/GettingStarted',
        strict: true,
        component: GettingStarted
    },
    {
        name:'frontEnd',
        path: '/docs/frontEnd',
        strict: true,
        component: FrontEnd
    },
    {
        name:'backEnd',
        path: '/docs/backEnd',
        strict: true,
        component:BackEnd
    },
];

export default routes;