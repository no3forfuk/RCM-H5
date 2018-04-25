<template>
    <div>
        <ul class="root">
            <li v-for="(item,index) in rank_2" :key="index">
                <div class="left fl"><span class="number">1</span><i
                        class="iconfont icon-ai215 upicon"></i>
                </div>
                <div class="center fl">
                    <h3>#{{item.rank_name}}</h3>
                    <p class="c-bottom text-grey text-size-12">
                        {{item.rank_desc}}
                    </p>
                </div>
                <ul class="right fl  text-size-12">
                    <li v-for="(list,index) in item.data" :key="index">
                        <span class="before-num text-center">{{index+1}}</span>
                        <a href="javascript:;" class="text-black">@{{list.rank_name}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import {test} from '../../api/api'

    export default {
        data() {
            return {
                rank_2: []
            }
        },
        methods: {
            getdata() {
                return new Promise((resolve, reject) => {
                    test()
                        .then(res => {

                            this.rank_2 = res.data.data
                            console.log(this.rank_2);
                        })
                        .catch(err => {
                            reject(false);
                        });
                });
            }
        },
        created() {
            this.getdata();
        }
    }

</script>

<style scoped>
    .right li a {
        margin-left: 20px;
    }

    .right li {
        margin-top: 8px;
        border-bottom: dotted 1px #F0882C;
        position: relative;
        overflow: visible;
    }

    .before-num {
        display: block;
        width: 12px;
        height: 12px;
        background-color: #F0882C;
        color: #fff;
        border-radius: 2px;
        position: absolute;
        top: 1px;
        left: 0px;
    }

    .right {
        height: 70px;
        overflow: auto;
        width: 100px;
    }

    .right::-webkit-scrollbar {
        width: 0;
        height: 0
    }

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
        overflow: hidden;
    }

    .root > li {
        border-bottom: solid 0.1px #cccccc;
        margin-top: 5px;
    }

    .center {
        width: 220px;
        padding: 0 10px;
    }

    li {
        overflow: hidden;
    }
</style>