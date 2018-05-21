<template>
    <div>
        <div class="element-header">
            <ele-header></ele-header>
            <div style="width: 100%; height: 2px;backgroundColor: #d3d3d3;"></div>
            <div class="element-info">
                <div class="posi-left">
                    <i class="iconfont icon-caomei" style="display: inline-block;transform: rotate(55deg)"></i>
                    <span>9988</span>
                </div>
                <div class="fix-right" v-text="ele.element_desc || '暂时没有描述信息哦'" ref="details">
                </div>
                <span class="up-down"><i class="iconfont icon-jiantou" @click="toggleWidth($event)"></i></span>
            </div>
            <ele-neck></ele-neck>
        </div>
        <ul>
            <li v-for="(item,index) in postList" :key="index">
                <ele-text v-if="isText(item.type)" v-bind:postinfo="item"></ele-text>
                <ele-textimage v-if="isTextImage(item.type)"></ele-textimage>
                <ele-image v-if="isImage(item.type)"></ele-image>
            </li>
        </ul>
    </div>

</template>

<script>
    import {getElement} from '../../api/api'

    export default {
        data() {
            return {
                title: '',
                flag: '@',
                ele: {},
                postList: []
            }
        },
        created() {
            this.getElementInfo(this.$route.query.id);
        },
        methods: {
            getElementInfo(id) {
                return new Promise((resolve, reject) => {
                    getElement(id).then(res => {
                        this.ele = res.data.data;
                        this.postList = this.ele.data.data;
                    }).catch(err => {
                    })
                })
            },
            toggleWidth(e) {
                let dom = this.$refs.details;
                let str = window.getComputedStyle(dom).height;
                let num = parseInt(str);
                if (num == 60) {
                    this.$refs.details.style.height = 'auto';
                    e.target.style.transform = 'rotate(-90deg)';
                    str = window.getComputedStyle(dom).height;
                    num = parseInt(str);
                    if (num < 60) {
                        this.$refs.details.style.height = '60px';
                        e.target.style.transform = 'rotate(90deg)';
                    } else {
                        this.$refs.details.style.height = 'auto';
                        e.target.style.transform = 'rotate(-90deg)';
                    }
                } else {
                    this.$refs.details.style.height = '60px';
                    e.target.style.transform = 'rotate(90deg)';
                }
            },
            isText(type) {
                return type == 1 ? true : false
            },
            isTextImage(type) {
                return type == 2 ? true : false
            },
            isImage(type) {
                return type == 3 ? true : false
            }
        },
        computed: {}
    }

</script>

<style scoped lang="less">
    .element-header {
        width: 100%;
        box-sizing: border-box;
        padding-top: 90px;
        box-shadow: 1px 5px 16px -10px #8b8b8b;
    }

    .element-info {
        width: 100%;
        position: relative;
        padding-bottom: 10px;
        .posi-left {
            position: absolute;
            box-shadow: 0px 0px 5px 0px #d3d3d3;
            border-radius: 2px;
            top: 20px;
            left: 20px;
        }
        .fix-right {
            width: 100%;
            padding: 10px;
            padding-left: 90px;
            /*padding-left: 30px;*/
            height: 60px;
            font-size: 14px;
            line-height: 18px;
            overflow: hidden;
            color: #8b8b8b;
        }
        .up-down {
            display: block;
            position: absolute;
            right: 13px;
            bottom: 5px;
            background-color: #fff;
            color: #8B8B8B;
            .icon-jiantou {
                display: block;
                font-size: 20px;
                transform: rotate(90deg);
            }
        }
    }

    ul {
        padding-top: 10px;
    }
</style>