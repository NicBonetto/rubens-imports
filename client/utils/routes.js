import React from 'react'
import HomePage from '../components/home/homepage.jsx'
import About from '../components/about/about.jsx'

const Routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/about-us',
        exact: true,
        component: About
    }
]

export default Routes