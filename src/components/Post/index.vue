<template>
    <div>
        <div class="comment">
            <div class="right">
                <div class="top">
                    <img src="../../static/images/1526892074.png" alt="">
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
            <div>
                <img src="../../static/images/post.png" alt=""
                     style="border-radius: 4px;margin-top: 5px;max-width: 350px;">
            </div>
        </div>
        <div style="background-color: #d3d3d3;height: 14px;line-height: 12px;margin-top: 30px;">
            <span style="color: #fff;font-size: 12px;margin-left: 10px;">精彩评论</span>
        </div>
        <div class="comment-bottom">
            <div class="left">
                <div style="position: relative;width: 40px;height: 100%;">
                    <img src="../../static/images/1526892074.png" alt="">
                    <span class="iconfont icon-ai-like"></span>
                    <span class="hot-num">1231</span>
                </div>
            </div>
            <div class="right">
                <div class="top">
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
        </div>
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
    import {getPostDetailsById} from '../../api/api'

    export default {
        data() {
            return {
                flag: '@',
                title: ''
            }
        },
        created() {
            this.getPostDetails()
        },
        methods: {
            getPostDetails() {
                let id = this.$route.query.id;
                getPostDetailsById(id).then(res => {
                    if (res.status == 200 && res.data.status_code == 1) {
                        this.title = res.data.data.post_content;
                    }
                }).catch(err => {
                    throw err;
                });
            }
        }
    }

</script>

<style scoped lang="less">
    .comment {
        width: 100%;
        margin-top: 90px;
        position: relative;
        padding: 12px;
        .right {
            width: 100%;
            background-color: #fff;
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

    .comment-bottom {
        width: 100%;
        position: relative;
        padding: 8px;
        border-bottom: 1px solid #d3d3d3;
        .left {
            height: 100%;
            position: absolute;
            span {
                position: absolute;
                top: 35px;
                left: 6px;
                color: #000;
                z-index: 1;
            }
            img {
                width: 28px;
                border-radius: 14px;
                position: absolute;
                display: block;
                z-index: 1;
            }
            .hot-num {
                position: absolute;
                top: 55px;
                left: 1px;
            }
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

                .details {
                    width: 100%;
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