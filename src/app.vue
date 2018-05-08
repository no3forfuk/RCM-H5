<template>
    <div>
        <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <!--<router-view></router-view>-->
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



</style>

