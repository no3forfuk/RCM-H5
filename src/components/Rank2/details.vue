<template>
    <div class="root">
        <y-header v-bind:title="title" v-bind:flag="flag"></y-header>
        <div style="margin-top: 100px;background-color: #d3d3d3;height: 14px;line-height: 12px;">
            <span style="color: #fff;font-size: 12px;margin-left: 10px;">精彩评论</span>
        </div>
        <ul>
            <li class="comment" v-for="(item,index) in comment" :key="index">
                <div class="left">
                    <span class="iconfont icon-ai-like"></span>
                </div>
                <div class="right">
                    <div class="top">
                        <img :src="userPhoto[index]" alt="">
                        <div class="details">
                            <p class="user-name">昨天热了个草莓</p>
                            <p class="rank-info">
                                <span>#动漫</span> |
                                <span>听到SD的歌还想回去打球怎么破</span>
                            </p>
                        </div>
                        <span class="times">3小时前</span>
                    </div>
                    <div class="bottom">
                        <p>黑暗大陆会出现比以往更厉害的生物吗黑暗大陆会出现比以往更</p>
                    </div>

                </div>
            </li>
        </ul>
        <mt-tabbar fixed class="discuss-input">
            <div style="position: relative;width: 100%;">
                <div class="input-box">
                    <input type="text" ref="content">
                </div>
                <span style="position: absolute;right: 3%;top: 8px;display: block;color: #8b8b8b;">发送</span>
            </div>
        </mt-tabbar>
    </div>
</template>

<script>
    import {getDiscuss} from '@/api/api'

    export default {
        data() {
            return {
                title: '啊啊啊',
                flag: '#',
                comment_type: 2,
                comment: [],
                userPhoto: []
            }
        },
        created() {
            this.getDiscussList();

        },
        methods: {
            getDiscussList() {
                var params = {};
                params.level = 2;
                params.id = this.$route.query.id;
                getDiscuss(params).then(res => {
                    if (res.status == 200 && res.data.status_code == 1) {
                        this.comment = res.data.data.data;
                        for (let i = 0; i < this.comment.length; i++) {
                            if (this.comment[i].user_type == 1) {
                                this.userPhoto[i] = this.comment[i].user.avatar;
                            }
                            if (this.comment[i].user_type == 2) {
                                this.userPhoto[i] = '../../static/images/visitor.jpg';
                            }
                        }
                    }
                }).catch(err => {
                    throw err;
                })
            },
            addFixed() {

            }
        }
    }

</script>

<style scoped lang="less">
    ul {
        width: 100%;
        .comment {
            width: 100%;
            position: relative;
            padding: 8px;
            border-bottom: 1px solid #d3d3d3;
            .left {
                position: absolute;
                top: 13px;
                left: 13px;
                color: #000;
                z-index: 1;
            }
            .right {
                width: 100%;
                background-color: #fff;
                padding-left: 40px;
                position: relative;
                .top {
                    .times {
                        position: absolute;
                        right: 0;
                        top: 0px;
                        font-size: 12px;
                        color: #8b8b8b;
                    }
                    width: 100%;
                    line-height: 100%;
                    background-color: #fff;
                    img {
                        width: 28px;
                        border-radius: 14px;
                        position: absolute;
                        top: 5px;
                    }
                    .details {
                        width: 100%;
                        padding-left: 36px;
                        .rank-info {
                            color: #8b8b8b;
                            font-size: 12px;
                            padding: 2px 0px;
                        }
                        .user-name {
                            font-size: 14px;
                            padding: 2px 0px;
                        }
                    }

                }
                .bottom {
                    padding-top: 5px;
                    padding-bottom: 10px;
                    p {
                        line-height: 20px;
                    }
                }
            }
        }
    }

    .root {
        width: 100%;
        height: 100%;
    }

    .discuss-input {
        background-color: #f8f8f8;
        height: 46.5px;
        padding: 8px 10px;
        width: 100%;
        .input-box {
            width: 85%;
            height: 30px;
            box-sizing: border-box;
            border: 1px solid #d6d6d6;
            border-radius: 4px;
            input {
                display: block;
                width: 100%;
                height: 100%;
                border: 0 none;
                font-size: 16px;
            }
        }
    }

</style>