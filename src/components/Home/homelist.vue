<template>
    <div>
        <ul class="root">
            <li v-for="(item,index) in rank_2" :key="index">
                <router-link :to="{name:getRouter(item),params:{content:item}}" class="text-black">
                    <div class="left"><span class="number">{{index+1}}</span><i
                            class="iconfont icon-ai215 upicon"></i>
                    </div>
                    <div class="center">
                        <h3>{{item.ranking_name}}</h3>
                        <p class="c-bottom text-grey text-size-12">
                            {{item.ranking_desc}}
                        </p>
                    </div>
                    <ul class="right text-size-12">
                        <li v-for="(list,index) in item.data" :key="index">
                            <span class="before-num text-center">{{index+1}}</span>
                            <router-link :to="{name:'elementDetails',params:{ele:list}}" class="text-black">
                                {{getListValue(item,list).pre + getListValue(item,list).text}}
                            </router-link>
                        </li>
                    </ul>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { getIendx } from "../../api/api";

export default {
  data() {
    return {
      rank_2: [],
      textFlag: "#"
    };
  },
  methods: {
    getListValue(n, m) {
      var pre = "";
      var text = "";
      if (n.ranking_level) {
        pre = "#";
        text = m.ranking_name;
      }
      if (n.ranking_level == 1) {
        pre = "#";
        text = m.ranking_name;
      }
      if (n.ranking_level == 2) {
        pre = "@";
        text = m.element_name;
      }
      return { pre, text };
    },
    getdata() {
      return new Promise((resolve, reject) => {
        getIendx()
          .then(res => {
            this.rank_2 = res.data.data;
          })
          .catch(err => {
            reject(false);
          });
      });
    },
    getRouter(obj) {
      var router = "";
      if (obj.ranking_level && obj.ranking_level == 2) {
        return (router = "rank2list");
      } else if (obj.ranking_level && obj.ranking_level == 1) {
        return (router = "rank1details");
      }
    }
  },
  created() {
    this.getdata();
  }
};
</script>

<style scoped>
.center {
  padding-right: 98px;
  padding-left: 27px;
  padding-bottom: 10px;
}

.root li {
  position: relative;
  width: 100%;
}

.root li > a {
  display: block;
  width: 100%;
  overflow: hidden;
}

.left {
  position: absolute;
  top: 0px;
  left: 0px;
}

.right li a {
  margin-left: 20px;
}

.right li {
  margin-top: 8px;
  border-bottom: dotted 1px #f0882c;
  position: relative;
  overflow: visible;
  white-space: nowrap;
}

.before-num {
  display: block;
  width: 12px;
  height: 12px;
  background-color: #f0882c;
  color: #fff;
  border-radius: 2px;
  position: absolute;
  top: 1px;
  left: 0px;
}

.right {
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: 70px;
  overflow: auto;
  width: 88px;
}

.right::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.c-bottom {
  margin-top: 10px;
  height: 40px;
  overflow: hidden;
  line-height: 13px;
}

.number {
  display: block;
  text-align: center;
}

.upicon {
  display: block;
  -webkit-transform: rotate(-90deg);
}

.root {
  padding: 8px;
  overflow: auto;
}

.root > li {
  border-bottom: solid 0.1px #cccccc;
  margin-top: 5px;
}

li {
  overflow: hidden;
}
</style>