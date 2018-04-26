<template>
    <div id="header">
        <div class="text-white root theme-color-bg">
            <i class="iconfont icon-jiantou fl" @click="back"></i>
            <i class="iconfont icon-tubiaozhizuomoban" @click="goHome"></i>
            <i class="iconfont icon-fenxiang"></i>
            <p>#{{title}}</p>
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
            goHome(){
                this.$router.replace('/');
            }
        },
        props: ['title']
    }

</script>

<style scoped>
    #header{
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
    }
    .root p {
        font-size: 28px;
        margin-top: 15px;
        margin-left: 8px;
    }

    .root {
        width: 100%;
        padding: 8px;
        box-shadow: 0px 0px 10px #080808;
    }

    .root > i {
        font-size: 30px;
        margin: 5px;
    }

    .root > i:nth-child(1) {
        display: block;
        transform: rotate(180deg);
        box-sizing: border-box;
        margin: 0px 5px;
    }
</style>