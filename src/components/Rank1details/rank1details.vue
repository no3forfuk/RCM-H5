<template>
    <div class="root">
        <y-header v-bind:title="title" v-bind:flag="flag"></y-header>
        <div class="rank-details">
            <div class="rd-top">
                <ul>
                    <li class="">
                        <router-link :to="{}" class="text-black">
                            <span class="rd-pre">1#</span>
                            <p class="rd-t-content">
                                <span>日本动漫</span>
                                <span style="opacity: 0">日本动漫</span>
                                <i></i>
                            </p>

                        </router-link>
                    </li>
                    <li class="">
                        <router-link :to="{}" class="text-black">
                            <span class="rd-pre">1#</span>
                            <p class="rd-t-content">
                                <span>日本动漫</span>
                                <span style="opacity: 0">日本动漫</span>
                                <i></i>
                            </p>

                        </router-link>
                    </li>
                    <li class="">
                        <router-link :to="{}" class="text-black">
                            <span class="rd-pre">1#</span>
                            <p class="rd-t-content">
                                <span>日本动漫</span>
                                <span style="opacity: 0">日本动漫</span>
                                <i></i>
                            </p>

                        </router-link>
                    </li>
                    <li class="">
                        <router-link :to="{}" class="text-black">
                            <span class="rd-pre">1#</span>
                            <p class="rd-t-content">
                                <span>日本动漫</span>
                                <span style="opacity: 0">日本动漫</span>
                                <i></i>
                            </p>

                        </router-link>
                    </li>
                    <li class="">
                        <router-link :to="{}" class="text-black">
                            <span class="rd-pre">1#</span>
                            <p class="rd-t-content">
                                <span>日本动漫</span>
                                <span style="opacity: 0">日本动漫</span>
                                <i></i>
                            </p>

                        </router-link>
                    </li>
                    <li class="">
                        <router-link :to="{}" class="text-black">
                            <span class="rd-pre">1#</span>
                            <p class="rd-t-content">
                                <span>日本动漫</span>
                                <span style="opacity: 0">日本动漫</span>
                                <i></i>
                            </p>

                        </router-link>
                    </li>
                    <li class="">
                        <router-link :to="{}" class="text-black">
                            <span class="rd-pre">1#</span>
                            <p class="rd-t-content">
                                <span>日本动漫</span>
                                <span style="opacity: 0">日本动漫</span>
                                <i></i>
                            </p>

                        </router-link>
                    </li>
                    <li class="">
                        <router-link :to="{}" class="text-black">
                            <span class="rd-pre">1#</span>
                            <p class="rd-t-content">
                                <span>日本动漫</span>
                                <span style="opacity: 0">日本动漫</span>
                                <i></i>
                            </p>

                        </router-link>
                    </li>
                    <li class="">
                        <router-link :to="{}" class="text-black">
                            <span class="rd-pre">1#</span>
                            <p class="rd-t-content">
                                <span>日本动漫</span>
                                <span style="opacity: 0">日本动漫</span>
                                <i></i>
                            </p>

                        </router-link>
                    </li>
                    <li class="">
                        <router-link :to="{}" class="text-black">
                            <span class="rd-pre">1#</span>
                            <p class="rd-t-content">
                                <span>日本动漫</span>
                                <span style="opacity: 0">日本动漫</span>
                                <i></i>
                            </p>

                        </router-link>
                    </li>
                    <li class="">
                        <router-link :to="{}" class="text-black">
                            <span class="rd-pre">1#</span>
                            <p class="rd-t-content">
                                <span>日本动漫</span>
                                <span style="opacity: 0">日本动漫</span>
                                <i></i>
                            </p>

                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="rd-center">
                <div class="c-left">
                    <div class="utils">
                        <div class="c-level">S+</div>
                        <div class="c-hot fr">8W</div>
                    </div>
                </div>
                <div class="c-right">
                    <p>{{content.ranking_desc}}</p>
                    <span class="up-down"><i class="iconfont icon-jiantou" @click="toggleWidth"></i></span>

                </div>
            </div>
            <div class="rd-bottom">
                <ul>
                    <li class="fl"><i class="iconfont icon-bianji"></i>537</li>
                    <li class="fl"><i class="iconfont icon-tianjia"></i>添加榜单</li>
                    <li class="fl"><i class="iconfont icon-biaoqian"></i>关注</li>
                </ul>
            </div>
        </div>
        <ul class="bottom">
            <li v-for="(list,index) in lists" :key="index">
                <router-link :to="{name:'elementDetails',params:{ele:list}}">
                    <div class="b-top">
                        <span class="text-white sort-number">{{index + 1}}</span><span class="b-title">{{pre+list[rankOrEle]}}</span>
                    </div>
                    <div class="b-bottom">
                        <div class="hot">
                            <div class="b-hot">
                                <span>1999</span>
                            </div>
                        </div>

                        <p class="b-content">{{list.ranking_desc}}</p>
                    </div>
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>
    import {getRank} from '../../api/api'

    export default {
        data() {
            return {
                content: {},
                title: "",
                lists: [],
                rankOrEle: '',
                pre: '',
                flag: '#',
            };
        },
        created() {

            // if (sessionStorage.getItem('rank_id')) {
            //     getRank(sessionStorage.getItem('rank_id')).then(res => {
            //         console.log(res.data);
            //         this.content = res.data.data;
            //        // this.decideRankLevel(this.content);
            //     }).catch(err => {
            //     })
            // } else {
            //     this.content = this.$route.params.content;
            //     this.decideRankLevel(this.content);
            //     sessionStorage.setItem('rank_id', this.content.id);
            // }
            if (!this.$route.params.content) {


            } else {
                this.content = this.$route.params.content;
                this.decideRankLevel(this.content);
                sessionStorage.setItem('rank_id', this.content.id);
            }

        },
        computed: {
            id() {
                return sessionStorage.getItem('rank_id');
            }
        },
        methods: {
            decideRankLevel(obj) {
                if (!obj) return;
                this.title = obj.ranking_name;
                this.lists = obj.data;
                if (obj.ranking_level && obj.ranking_level == 2) {
                    this.rankOrEle = 'element_name';
                    this.pre = '@'
                }
            }
            ,
            toggleWidth() {
                //todo
            }
        }
    };
</script>

<style scoped>
    .rd-bottom ul {
        border-top: solid 1px #D4D4D4;
    }

    .rd-bottom ul li {
        width: 33.3333333333%;
        text-align: center;
        height: 50px;
        line-height: 50px;
    }

    .rd-bottom ul li:nth-child(1) {
        border-right: solid 1px #D4D4D4;
    }

    .rd-bottom ul li:nth-child(2) {
        border-right: solid 1px #D4D4D4;
    }

    /*brief*/
    .rd-center {
        padding: 10px;
        width: 100%;
        position: relative;
    }

    .c-left {
        position: absolute;
        top: 15px;
        left: 18px;
        overflow: visible;
    }

    .c-left .utils {
        position: relative;
        overflow: visible;
    }

    .c-left .c-level {
        font-size: 20px;
        color: #DF955A;
        font-weight: bold;
    }

    .c-left .c-hot {
        margin-top: 2px;
        position: absolute;
        top: 18px;
        right: 0px;
        z-index: 10;
    }

    .c-right {
        padding-left: 44px;
    }

    .c-right p {
        color: #8B8B8B;
        line-height: 18px;
        height: 55px;
        overflow: hidden;
        position: relative;
    }

    .c-right .up-down {
        display: block;
        position: absolute;
        right: 16px;
        bottom: 12px;
        background-color: #fff;
    }

    .up-down .icon-jiantou {
        display: block;
        transform: rotate(90deg);
    }

    /*info*/
    .rd-top {
        padding-top: 10px;
        padding-left: 20px;
        padding-bottom: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        width: 100%;
    }

    .rd-top ul {
        height: 24px;
        width: 100%;
        line-height: 24px;
        white-space: nowrap;
        overflow-x: auto;
    }

    .rd-top ul::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .rd-top li {
        position: relative;
        display: inline-block;
    }

    .rd-pre {
        position: absolute;
        top: 0px;
        left: 0px;

    }

    .rd-top .rd-t-content {
        margin-left: 20px;
        position: relative;
        overflow: visible;
        padding-bottom: 3px;
    }

    .rd-t-content span:nth-child(1) {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1;
    }

    .rd-top .rd-t-content i {
        display: block;
        width: 100%;
        height: 10px;
        background-color: #E8E8E8;
        position: absolute;
        bottom: 3px;
        left: 0px;
    }

    /*list*/
    .root {
        width: 100%;
    }

    .rank-details {
        margin-top: 89px;
        width: 100%;
        background-color: #fff;
        box-shadow: 1px 5px 16px -10px #8b8b8b;
    }

    .bottom {
        width: 100%;
        overflow: hidden;
        padding: 10px;
        box-sizing: border-box;
    }

    .bottom li {
        width: 100%;
        height: 90px;
        border-bottom: #D4D4D4 solid 1px;
        margin-bottom: 10px;
    }

    .sort-number {
        display: block;
        width: 20px;
        height: 20px;
        background-color: #f0882c;
        border-radius: 2px;
        line-height: 20px;
        text-align: center;
        position: absolute;
        top: 1px;
        left: 4px;
    }

    .b-top {
        position: relative;
        width: 100%;
        line-height: 22px;
    }

    .b-title {
        width: 100%;
        padding-left: 30px;
        font-size: 22px;
        color: black;
    }

    .b-bottom {
        margin-top: 10px;
        width: 100%;
        position: relative;
    }

    .b-content {
        width: 100%;
        height: 44px;
        overflow: hidden;
        color: #8b8b8b;
        padding-left: 35px;
        line-height: 22px;
        box-sizing: border-box;
    }

    .b-hot {
        position: relative;
        overflow: visible;

    }

    .b-hot span {
        position: absolute;
        top: 0px;
        right: -30px;
        z-index: 10;
    }

    .hot {
        color: black;
        position: absolute;
        top: 2px;
        left: 0px;
        overflow: visible;
    }
</style>