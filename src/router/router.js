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
    {path: '/elementDetails', name: 'elementDetails', query: {id: 'id'}, component: Element, meta: {keepAlive: true}},
]
export default {
    mode: 'history',
    routes
}