<template>
    <div>
        <y-header v-bind:title="title" v-bind:flag="flag"></y-header>
        <div class="neck">
            <div class="details">
                <ul>
                    <li>1#集英社</li>
                    <li>1#集英社</li>
                    <li>1#集英社</li>
                    <li>1#集英社</li>
                    <li>1#集英社</li>
                    <li>1#集英社</li>
                    <li>1#集英社</li>
                    <li>1#集英社</li>
                </ul>
            </div>
            <div class="separ"></div>
            <div class="rcm-hot">
                <div class="num">
                    <i class="iconfont icon-caomei"></i>
                    <span>9988</span>
                </div>
                <p>
                    集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社</p>
            </div>
            <ul class="operate">
                <li class="fl"><i class="iconfont icon-bianji"></i><span>537</span></li>
                <li class="fl"><i class="iconfont icon-tianjia"></i><span>发个帖子</span></li>
                <li class="fl"><i class="iconfont icon-biaoqian"></i><span>关注</span></li>
            </ul>
        </div>
        <div class="content">
            <ul>
                <li class="content-li">
                    <router-link :to="{}" class="text-black">
                        <i class="iconfont icon-xiaoxi xiaoxi"></i>
                        <span style="position: absolute;top:40px;left:6px;">125</span>
                        <div class="info">
                            <div class="info-top">

                            </div>
                            <p class="info-bottom">
                                <i class="usericon"></i>
                                <span class="username">热了个草莓</span>
                            </p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                title: '',
                flag: '@',
                ele: {}
            }
        },
        created() {
            this.title = this.$route.params.ele.element_name;
            console.log(this.$route.params.ele);
        }
    }

</script>

<style scoped>
    .content-li{
        border-bottom: 1px solid #d3d3d3;
    }
    .info-top {
        width: 100%;
        height: 30px;
    }

    .info-bottom {
        width: 100%;
        font-size: 14px;
        height: 30px;
        position: relative;
    }

    .username {
        position: absolute;
        top: 9px;
        left: 24px;
        margin-left: 10px;
    }

    .usericon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: block;
        position: absolute;
        top: 5px;
        left: 0px;
        background-color: #abcdef;
        margin-left: 10px;
    }

    .content {
        width: 100%;
        padding: 8px;
    }

    .content .info {
        padding-left: 40px;
    }

    .content li {
        position: relative;
        width: 100%;
    }

    .content li .xiaoxi {
        position: absolute;
        top: 16px;
        font-size: 24px;
        left: 8px;
    }

    .neck {
        width: 100%;
        box-shadow: 1px 5px 16px -10px #8b8b8b;
    }

    .operate li {
        width: 33.3333333333%;
        text-align: center;
        height: 50px;
        line-height: 50px;
    }

    .operate li:nth-child(1) {
        border-right: 1px solid #d3d3d3;

    }

    .operate li:nth-child(2) {
        border-right: 1px solid #d3d3d3;

    }

    .operate {
        width: 100%;
        border-top: 1px solid #d3d3d3;
    }

    .rcm-hot {
        width: 100%;
        padding: 8px;
        position: relative;
    }

    .rcm-hot .num {
        position: absolute;
        top: 22px;
        left: 22px;
        box-shadow: 0px 0px 2px 0px #8B8B8B;
    }

    .rcm-hot p {
        color: #8B8B8B;
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        padding-left: 93px;
    }

    .separ {
        background-color: #D3D3D3;
        width: 100%;
        height: 5px;
    }

    .details {
        padding-top: 10px;
        padding-left: 20px;
        padding-bottom: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        width: 100%;
        margin-top: 89px;
    }

    .details ul {
        height: 24px;
        width: 100%;
        line-height: 24px;
        white-space: nowrap;
        overflow-x: auto;
    }

    .details ul::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .details li {
        position: relative;
        display: inline-block;
    }
</style>