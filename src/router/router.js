/*Created By Jsir on 2018/4/23*/
'use strict'

import Home from '../components/Home/home'
import Rank2list from '../components/Rank2/rank2lndex'
import Rank1details from '../components/Rank1/rank1Index'
import Element from '../components/Element/elementIndex'

export const routes = [
    {path: '/', name: 'home', component: Home, meta: {keepAlive: true}},
    {
        path: '/rank2list', name: 'rank2list',
        query: {level: 'level', id: 'id'},
        component: Rank2list, meta: {keepAlive: true}
    },
    {path: '/rank1details/', name: 'rank1details', component: Rank1details, meta: {keepAlive: true}},
    {
        path: '/rank2Details', name: 'rank2Details', query: {id: 'id'},
        component: resolve => require(['../components/Rank2/details.vue'], resolve)
        , meta: {keepAlive: true}
    },
    {
        path: '/elementDetails',
        name: 'element',
        query: {id: 'id'},
        component: Element,
        meta: {keepAlive: true},
        children: [
            {
                path: '/elementDetails/details',
                name: 'elementDetails',
                query: {id: 'id'},
                component: resolve => require(['../components/Element/elementDetails.vue'], resolve)
            },
            {
                path: '/elementDetails/post',
                name: 'postDetails',
                query: {id: 'id'},
                component: resolve => require(['../components/Post/index.vue'], resolve)
            }
        ]
    },

]
export default {
    mode: 'history',
    routes
}