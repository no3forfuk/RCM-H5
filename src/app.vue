<template>
    <div>
        <!--<keep-alive>-->
        <!--<router-view v-if="$route.meta.keepAlive"></router-view>-->
        <!--</keep-alive>-->
        <router-view></router-view>
    </div>
</template>
<script>


    export default {
        data() {
            return {};
        },
        created() {
        }
    };
</script>
<style>
    @import './style/reset.css';
    @import './style/common.css';
    @import './style/fonts/iconfont.css';
</style>


