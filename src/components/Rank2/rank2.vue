<template>
    <div>
        <y-header v-bind:title="info.ranking_name" v-bind:flag="flag"></y-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import {getSecondRank} from '../../api/api'
    export default {
        data() {
            return {
                info: {},
                flag: '#',
                subInfo: {},
                query: this.$route.query
            }
        },
        created(){
            console.log(this.$route.query);
            this.getRankList(this.$route.query);
        },
        methods:{
            getRankList(query) {
                var params = {};
                params.level = 2;
                params.id = this.$route.query.id;
                return new Promise((resolve, reject) => {
                    getSecondRank(params).then(res => {
                        this.info = res.data.data;
                        this.subInfo = res.data.data.data.data
                    }).catch(err => {
                    })
                })
            }
        }

    }

</script>

<style scoped lang="less">

</style>