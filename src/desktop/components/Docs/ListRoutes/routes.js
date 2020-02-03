import React from 'react';

import FrontEnd from 'desktop/components/Docs/FrontEnd'
import BackEnd from 'desktop/components/Docs/BackEnd'
import GettingStarted from 'desktop/components/Docs/GettingStarted'
import HTML from 'desktop/components/Docs/FrontEnd/HTML'
import CSS from 'desktop/components/Docs/FrontEnd/CSS'

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
        name:'Getting Started',
        path: '/docs/GettingStarted',
        exact: true,
        component: GettingStarted
    },
    {
        name:'Front-End Track',
        path: '/docs/frontEnd',
        exact: true,
        component: FrontEnd,
        content: [{
            name:'HTML',
            path: '/docs/frontEnd/HTML',
            exact: true,
            component: HTML
        },
        {
            name:'CSS',
            path: '/docs/frontEnd/CSS',
            exact: true,
            component: CSS
        },]
    },
    {
        name:'Back-End Track',
        path: '/docs/backEnd',
        exact: true,
        component:BackEnd
    },
];

export default routes;