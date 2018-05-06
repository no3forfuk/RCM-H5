<template>
    <div>
        <y-header v-bind:title="title" v-bind:flag="flag"></y-header>
        <div class="element-header">
            <ele-header></ele-header>
            <div style="width: 100%; height: 2px;backgroundColor: #d3d3d3;"></div>
            <div class="element-info">
                <div class="posi-left">
                    <i class="iconfont icon-caomei" style="display: inline-block;transform: rotate(55deg)"></i>
                    <span>9988</span>
                </div>
                <div class="fix-right">
                    集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社集英社
                </div>
            </div>
            <ele-neck></ele-neck>
        </div>
        <ul>
            <ele-text></ele-text>
        </ul>
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
        }
    }

</script>

<style scoped lang="less">
    .element-header {
        width: 100%;
        box-sizing: border-box;
        padding-top: 90px;
        box-shadow: 1px 5px 16px -10px #8b8b8b;
    }

    .element-info {
        width: 100%;
        position: relative;
        padding-bottom: 10px;
        .posi-left {
            position: absolute;
            box-shadow: 0px 0px 5px 0px #d3d3d3;
            border-radius: 2px;
            top: 20px;
            left: 20px;
        }
        .fix-right {
            width: 100%;
            padding: 10px;
            padding-left: 90px;
            height: 60px;
            font-size: 14px;
            line-height: 18px;
            overflow: hidden;
        }
    }
</style>