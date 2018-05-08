<template>
    <router-link :to="{}">
        <!--<div class="left">-->
        <!--<p class="iconfont icon-xiaoxi"></p>-->
        <!--<span>333</span>-->
        <!--</div>-->
        <div class="right">
            <p v-text="postinfo.post_content"></p>
            <div class="user-info">
                <img src="http://ouo49fh7e.bkt.clouddn.com/Fg6LAgtw0FURgmH-Qsae3Q_CtZ_P" alt="">
                <span class="name">稀奇三人</span>
                <!--<span class="time fr">三小时前</span>-->
            </div>
        </div>
    </router-link>

</template>

<script>

    export default {
        data() {
            return {}
        },
        created() {
        },
        props: ['postinfo']
    }

</script>

<style scoped lang="less">
    a {
        width: 100%;
        border-bottom: 1px solid #d3d3d3;
        padding: 10px;
        position: relative;
        box-sizing: border-box;
        .left {
            position: absolute;
            top: 10px;
            left: 16px;
            p {
                font-size: 20px;
                color: #222;
            }
            span {
                color: #aaa;
            }
        }
        .right {
            width: 100%;
            /*padding-left: 50px;*/
            padding-left: 20px;
            p {
                color: #222;
            }
            .user-info {
                position: relative;
                img {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                }
                width: 100%;
                margin-top: 10px;
                padding-bottom: 5px;
                padding-top: 5px;
                .name {
                    font-size: 12px;
                    position: absolute;
                    top: 8px;
                    left: 24px;
                    color: #333;
                }
                .time {
                    font-size: 12px;
                    position: absolute;
                    top: 8px;
                    right: 10px;
                    color: #aaa;
                }
            }
        }
    }
</style>