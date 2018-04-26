<template>
    <div class="root">
        <div class="theme-color-bg text-white header">
            <i class="iconfont icon-caidan"></i>
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-caidan1"></i>
            <i class="iconfont icon-iconshitu"></i>
            <h1 class="header-title">Today's RCM</h1>
        </div>
        <div class="text-black focus body">
            <y-focus></y-focus>
        </div>

        <div id="rcm-date" style="lineHeight:12px;">
              <span class="text-size-12 text-white"
                    style="marginLeft:8px;">2017.4.16</span>
        </div>
        <div class="footer">
            <y-homelist></y-homelist>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style scoped>
    #rcm-date {
        background-color: #D3D3D3;
    }

    .root {
        position: relative;
        width: 100%;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 8px;
        box-shadow: 0px 0px 10px #080808;
        z-index: 1000;
    }

    .header .iconfont {
        font-size: 32px;
    }

    .header-title {
        font-size: 38px;
        font-family: "微软雅黑";
        margin-top: 5px;
        font-size: 40px;
        font-weight: 500;
    }

    .body {
        width: 100%;
        margin-top: 100px;
    }

    /*.grid-content {*/
    /*position: fixed;*/
    /*top: 0;*/
    /*z-index: 1000;*/
    /*}*/

    /*.iconfont {*/
    /*font-size: 36px;*/
    /*}*/

    /*.header-content {*/

    /*}*/

    /*.header-title {*/

    /*}*/

    /*.focus {*/
    /*width: 100%;*/
    /*height: 100px;*/
    /*margin-top: 100px;*/
    /*}*/
</style>