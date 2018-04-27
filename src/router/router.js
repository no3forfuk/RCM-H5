/*Created By Jsir on 2018/4/23*/
'use strict'

import Home from '../components/Home/home'
import Rank2list from '../components/Rank2List/rank2list'
import Rank1details from '../components/Rank1details/rank1details'
import Element from '../components/Element/elementDetails'

export const routes = [
    {path: '/', name: 'home', component: Home, meta: {keepAlive: true}},
    {path: '/rank2list/:content', name: 'rank2list', component: Rank2list, meta: {keepAlive: true}},
    {path: '/rank1details/', name: 'rank1details', component: Rank1details, meta: {keepAlive: true}},
    {path: '/elementDetails/:ele', name: 'elementDetails', component: Element, meta: {keepAlive: true}},
]
export default {
    routes
}