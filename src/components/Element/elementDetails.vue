<template>
    <div>
        <y-header v-bind:title="title" v-bind:flag="flag"></y-header>

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

</style>