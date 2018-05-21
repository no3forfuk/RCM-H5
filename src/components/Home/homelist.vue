<template>
    <div v-if="isShow">
        <div id="rcm-date" style="lineHeight:12px;" >
            <!--:class="{'vi-list-1':active_class}"-->
                  <span class="text-size-12 text-white"
                        style="marginLeft:8px;" v-text="time"></span>
        </div>
        <ul class="root">
            <li v-for="(item,index) in rank_2" :key="index">
                <router-link :to="{name:getRouter(item),query:{level:item.ranking_level,id:item.id}}"
                             class="text-black">
                    <div class="left"><span class="number">{{index+1}}</span><i
                            class="iconfont icon-ai215 upicon"></i>
                    </div>
                    <div class="center">
                        <h3 v-text="item.ranking_name"></h3>
                        <p class="c-bottom text-grey text-size-12" v-text="item.ranking_desc || '暂时没有描述信息哦'">
                        </p>
                    </div>
                    <ul class="right text-size-12">
                        <li v-for="(list,index) in item.data" :key="index">
                            <span class="before-num" :opacity="index*0.08">{{index+1}}</span>
                            <router-link :to="{name:getSubRouter(list).router,query:getSubRouter(list).query}"
                                         class="text-black">
                                {{getListValue(item,list).pre + getListValue(item,list).text}}
                            </router-link>
                        </li>
                    </ul>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getIendx} from "../../api/api";
    import {timeFormat} from "../../utils/utils";

    export default {
        data() {
            return {
                rank_2: [],
                textFlag: "#",
                time: timeFormat("."),
                paramsDay: this.day,
                active_class: '',
                isShow: ''
            };
        },
        methods: {
            getListValue(n, m) {
                var pre = "";
                var text = "";
                if (n.ranking_level) {
                    pre = "#";
                    text = m.ranking_name;
                }
                if (n.ranking_level == 1) {
                    pre = "#";
                    text = m.ranking_name;
                }
                if (n.ranking_level == 2) {
                    pre = "@";
                    text = m.element_name;
                }
                return {pre, text};
            },
            getdata() {

                return new Promise((resolve, reject) => {
                    var time = timeFormat("-");
                    //   time = 3600 * 1000 * 24
                    this.paramsDay = this.paramsDay * (3600 * 1000 * 24);
                    time = Date.now() - this.paramsDay;
                    const today = timeFormat("-");
                    time = timeFormat("-", time);
                    if (today == time) {
                        this.active_class = true;
                    } else {
                        this.active_class = false;
                    }
                    getIendx(time)
                        .then(res => {

                            this.rank_2 = res.data.data;
                            if (this.rank_2.length == 0) {
                                this.isShow = false;
                            } else {
                                this.isShow = true;
                            }
                            this.time = time;
                        })
                        .catch(err => {
                            reject(false);
                        });
                });
            },
            getRouter(obj) {
                var router = "";
                if (obj.ranking_level && obj.ranking_level == 2) {
                    return (router = "rank2list");
                } else if (obj.ranking_level && obj.ranking_level == 1) {
                    return (router = "rank1details");
                }
            },
            getSubRouter(obj) {
                if (obj.ranking_level && obj.ranking_level == 2) {
                    return {
                        router: "rank2list",
                        query: {
                            level: obj.ranking_level,
                            id: obj.id
                        }
                    };
                } else {
                    return {
                        router: "elementDetails",
                        query: {
                            id: obj.id
                        }
                    };
                }
            }
        },
        created() {
            this.getdata();
        },
        props: ["day"]
    };
</script>

<style scoped lang="less">
    .vi-list-1 {
        margin-top: 93px;
    }

    .root {
        overflow-y: auto;
    }

    .center {
        padding-right: 98px;
        padding-left: 30px;
        padding-bottom: 10px;
        h3 {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 20px;
        }
    }

    .root > li {
        position: relative;
        width: 100%;
    }

    .root > li > a {
        display: block;
        width: 100%;
        overflow: hidden;
    }

    .left {
        position: absolute;
        top: 0px;
        left: 0px;
    }

    .right > li > a {
        margin-left: 20px;
    }

    .right > li {
        margin-top: 8px;
        border-bottom: dotted 1px #f0882c;
        width: 88px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    .before-num {
        display: block;
        width: 12px;
        height: 12px;
        background-color: #f0882c;
        color: #fff;
        border-radius: 2px;
        position: absolute;
        text-indent: 5px;
        padding-top: 1px;
        top: 1px;
        left: 0px;
    }

    .right {
        position: absolute;
        bottom: 0px;
        right: 0px;
        height: 70px;
        overflow-y: auto;
        width: 88px;
    }

    /*.right::-webkit-scrollbar {*/
        /*width: 0;*/
        /*height: 0;*/
    /*}*/

    .c-bottom {
        margin-top: 10px;
        height: 40px;
        overflow: hidden;
        line-height: 13px;
    }

    .number {
        display: block;
        text-align: center;
    }

    .upicon {
        display: block;
        -webkit-transform: rotate(-90deg);
    }

    .root {
        padding: 8px;
        padding-bottom: 0px;
        overflow: auto;
    }

    .root > li {
        border-bottom: solid 0.1px #cccccc;
        margin-top: 10px;
    }

    #rcm-date {
        background-color: #d3d3d3;
    }
</style>