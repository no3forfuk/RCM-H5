<template>
    <div>
        <y-header v-bind:title="title"></y-header>
        <div class="rank-details"></div>


    </div>
</template>

<script>

    export default {
        data() {
            return {
                content: [],
                title: ''
            }
        },
        created() {
            this.content = this.$route.params.content.data;
            this.title = this.$route.params.content.rank_name;

            console.log(this.$route.params.content)
        }
    }

</script>

<style scoped>
    .rank-details {
        margin-top: 89px;
        width: 100%;
        background-color: #ccc;
        height: 140px;
        box-shadow: 1px 5px 16px -4px #8B8B8B;
    }
</style>