<template>
    <div class="root">
        <div class="side-bar" ref="sidebar">
            <span style="font-size: 30px;marginTop: 5px;marginRight: 5px;" class="fr text-white"
                  @click="closeSideBar">&times;</span>
            <div class="erweima">
                <img src="../../static/images/erweima.jpg" alt="" style="width: 200px;height: 200px;">
            </div>
            <p class="more">更多优质榜单</p>
            <p class="only">尽在RCM惹草莓</p>

        </div>
        <div class="side-content" ref="content">
            <div class="theme-color-bg text-white header" ref="fixed">
                <i class="iconfont icon-caidan" @click="openSideBar"></i>
                <!--<i class="iconfont icon-sousuo"></i>-->
                <!--<i class="iconfont icon-caidan1"></i>-->
                <!--<i class="iconfont icon-iconshitu"></i>-->
                <h1 class="header-title">{{home.title}}</h1>
            </div>
            <!--<div class="text-black focus body">-->
            <!--<y-focus></y-focus>-->
            <!--</div>-->

            
            <div class="footer">
                <y-homelist v-for="(item,index) in week" :key="index" v-bind:day="item"></y-homelist>
            </div>
        </div>
    </div>
</template>

<script>
import { timeFormat } from "../../utils/utils";

export default {
  data() {
    return {
      home: this.text.home,
      time: timeFormat("."),
      week: [0, 1, 2]
    };
  },
  created() {},
  methods: {
    openSideBar() {
      this.$refs.sidebar.style.width = "100%";
      this.$refs.sidebar.style.opacity = 0.95;
    },
    closeSideBar() {
      this.$refs.sidebar.style.width = "0px";
      this.$refs.sidebar.style.opacity = 0;
    }
  }
};
</script>

<style scoped lang="less">
.erweima {
  position: relative;
  margin: 0 auto;
  margin-top: 140px;
  img {
    margin-top: 80px;
  }
}

.side-bar {
  text-align: center;
  font-size: 0px;
  height: 1000px;
  width: 0px;
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0px;
  z-index: 1000;
  transition: all 0.5s;
  opacity: 0.8;
  .more {
    position: absolute;
    top: 145px;
    left: 0px;
    width: 100%;
    height: 30px;
    color: #fff;
    font-size: 20px;
  }
  .only {
    position: absolute;
    top: 180px;
    left: 0px;
    width: 100%;
    height: 30px;
    color: #fff;
    font-size: 20px;
  }
}

.side-content {
  width: 100%;
  position: relative;
  transition: all 0.5s;
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