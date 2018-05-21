<template>
    <div class="root">
        <div class="rank-details">
            <rank2-header></rank2-header>
            <div class="rd-center">
                <div class="c-left">
                    <div class="utils">
                        <div class="c-level">S+</div>
                        <div class="c-hot fr">8W</div>
                    </div>
                </div>
                <div class="c-right">
                    <router-link :to="{name:'rank2Details',query:{id:info.id}}">
                        <p ref="details" v-text="info.ranking_desc|| '暂时没有描述信息哦'"></p>
                    </router-link>
                    <span class="up-down"><i class="iconfont icon-jiantou" @click="toggleWidth($event)"></i></span>
                </div>
            </div>
            <rank2-neck></rank2-neck>
        </div>
        <rank2-sublist :listInfo="subInfo"></rank2-sublist>

    </div>
</template>

<script>
    import {getSecondRank} from '../../api/api'

    export default {
        data() {
            return {
                info: {},
                flag: '#',
                subInfo: {},
                query: this.$route.query
            };
        },
        created() {
            this.getRankList(this.$route.query);
        },
        computed: {},
        methods: {
            toggleWidth(e) {
                let dom = this.$refs.details;
                let str = window.getComputedStyle(dom).height;
                let num = parseInt(str);
                if (num == 55) {
                    this.$refs.details.style.height = 'auto';
                    e.target.style.transform = 'rotate(-90deg)';
                    str = window.getComputedStyle(dom).height;
                    num = parseInt(str);
                    if (num < 55) {
                        this.$refs.details.style.height = '55px';
                        e.target.style.transform = 'rotate(90deg)';
                    } else {
                        this.$refs.details.style.height = 'auto';
                        e.target.style.transform = 'rotate(-90deg)';
                    }
                } else {
                    this.$refs.details.style.height = '55px';
                    e.target.style.transform = 'rotate(90deg)';
                }
            },
            getRankList(query) {
                return new Promise((resolve, reject) => {
                    getSecondRank(query).then(res => {
                        this.info = res.data.data;
                        this.subInfo = res.data.data.data.data
                    }).catch(err => {
                    })
                })
            }
        },
        watch: {}
    };
</script>

<style scoped>

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
        /*padding-left: 20px;*/
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
        right: 13px;
        bottom: 10px;
        background-color: #fff;
        color: #8B8B8B;
    }

    .up-down .icon-jiantou {
        display: block;
        font-size: 20px;
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

    /*list*/
    .root {
        width: 100%;
    }

    .rank-details {
        margin-top: 89px;
        width: 100%;
        background-color: #fff;
        box-shadow: 0px 5px 16px -10px #8b8b8b;
    }

</style>