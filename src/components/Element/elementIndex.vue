<template>
    <div>
        <y-header v-bind:title="ele.element_name" v-bind:flag="flag"></y-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import {getElement} from '../../api/api'

    export default {
        data() {
            return {
                flag: '@',
                title: '',
                ele: {}
            }
        },
        created() {
            this.getElementInfo(this.$route.query.id);
        },
        methods: {
            getElementInfo(id) {
                return new Promise((resolve, reject) => {
                    getElement(id).then(res => {
                        this.ele = res.data.data;
                    }).catch(err => {
                    })
                })
            }
        }
    }

</script>

<style scoped lang="less">


</style>