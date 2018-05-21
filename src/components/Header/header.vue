<template>
    <div id="header" v-cloak ref="header">
        <div class="text-white root theme-color-bg">
            <i class="iconfont icon-jiantou fl" @click="back"></i>
            <i class="iconfont icon-tubiaozhizuomoban" @click="goHome"></i>
            <!--<i class="iconfont icon-fenxiang"></i>-->
            <p v-text="flag +title"></p>
        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {}
        },
        created() {

        },
        methods: {
            back() {
                this.$router.back();
            },
            goHome() {
                this.$router.replace('/');
            }
        },
        props: ['title', 'flag']
    }

</script>

<style scoped lang="less">

    [v-cloak] {
        display: none;
    }

    #header {
        position: fixed;
        -webkit-transform: translateZ(0);
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
        p {
            white-space: nowrap;
            overflow: hidden;
            vertical-align: middle;
            text-overflow: ellipsis;
            font-size: 22px;
            margin-top: 15px;
            margin-left: 8px;
            line-height: 30px;
        }
    }

    .root {
        width: 100%;
        padding: 8px;
        box-shadow: 0px 0px 10px #080808;
    }

    .root > i {
        font-size: 28px;
    }

    .root > i:nth-child(1) {
        display: block;
        transform: rotate(180deg);
        box-sizing: border-box;
        margin: 0px 5px;
    }
</style>