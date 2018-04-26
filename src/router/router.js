/*Created By Jsir on 2018/4/23*/
'use strict'

import Home from '../components/Home/home'
import Rank2list from '../components/Rank2List/ranklist'

export const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/rank2list/:content', name: 'rank2list', component: Rank2list}
]
export default {
    routes
}