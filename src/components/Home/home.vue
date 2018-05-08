<template>
    <div class="root">
        <div class="side-bar" ref="sidebar">
            <span style="font-size: 24px;marginTop: 5px;marginRight: 5px;" class="fr"
                  @click="closeSideBar">&times;</span>
        </div>
        <div class="side-content" ref="content">
            <div class="theme-color-bg text-white header" ref="fixed">
                <i class="iconfont icon-caidan" @click="openSideBar"></i>
                <i class="iconfont icon-sousuo"></i>
                <i class="iconfont icon-caidan1"></i>
                <i class="iconfont icon-iconshitu"></i>
                <h1 class="header-title">{{home.title}}</h1>
            </div>
            <div class="text-black focus body">
                <y-focus></y-focus>
            </div>

            <div id="rcm-date" style="lineHeight:12px;">
                  <span class="text-size-12 text-white"
                        style="marginLeft:8px;">2017.4.16</span>
            </div>
            <div class="footer">
                <y-homelist></y-homelist>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                home: this.text.home
            };
        },
        created() {

        },
        methods: {
            openSideBar() {
                this.$refs.sidebar.style.width = '100%';
                this.$refs.content.style.paddingLeft = '100%';
                this.$refs.fixed.style.left = '100%';

            },
            closeSideBar() {
                this.$refs.sidebar.style.width = '0px';
                this.$refs.content.style.paddingLeft = '0px';
                this.$refs.fixed.style.left = '0px';
            }
        }
    };
</script>

<style scoped>
    .side-bar {
        height: 1000px;
        width: 0px;
        background-color: #ccc;
        position: fixed;
        top: 0;
        left: 0px;
        z-index: 1000;
        transition: all 0.5s;
        opacity: 0.8;
    }

    .side-content {
        width: 100%;
        position: relative;
        transition: all 0.5s;
    }

    #rcm-date {
        background-color: #D3D3D3;
    }

    .root {
        position: relative;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 8px;
        box-shadow: 0px 0px 10px #080808;
        z-index: 100;
        transition: all 0.5s;
    }

    .header .iconfont {
        font-size: 32px;
    }

    .header-title {
        font-size: 38px;
        font-family: "微软雅黑";
        margin-top: 5px;
        font-size: 40px;
        font-weight: 500;
    }

    .body {
        width: 100%;
        margin-top: 100px;
    }


</style>