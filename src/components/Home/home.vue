<template>
    <div>
        <el-row class="header">
            <el-col :span="24" class="theme-color-bg header-content text-white">
                <div class="grid-content  bg-purple-dark">
                    <i class="iconfont icon-caidan"></i>
                    <i class="iconfont icon-sousuo"></i>
                    <i class="iconfont icon-caidan1"></i>
                    <i class="iconfont icon-iconshitu"></i>
                    <h1 class="header-title">Today's RCM</h1>
                </div>
            </el-col>
            <el-col class="text-black focus">
                <y-focus></y-focus>
            </el-col>
            <el-col>
                <div id="rcm-date" style="lineHeight:12px;">
                    <span class="text-size-12 text-white"
                          style="marginLeft:8px;">2017.4.16</span></div>
            </el-col>
            <el-col>
                <y-homelist></y-homelist>
            </el-col>
        </el-row>
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

    .header-content {
        padding: 8px;
        width: 100%;
        box-shadow: 0px 0px 10px #080808;
    }

    .header-title {
        font-family: "微软雅黑";
        margin-top: 5px;
        font-size: 24px;
        font-weight: 500;
    }

    .focus {
        width: 100%;
        height: 100px;
    }
</style>