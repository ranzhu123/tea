<template>
  <div>
    <div id="app">
      <el-row>
        <el-col :span="20">头内容</el-col>
        <el-col :span="4">个人中心</el-col>
      </el-row>
      <div class="block">
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row>
        <el-col :span="14">
          <v-news :news="leftNews"></v-news>
        </el-col>
        <el-col :span="10">
          <v-news></v-news>
        </el-col>
      </el-row>
      <router-view></router-view>
      <v-bottom></v-bottom>
    </div>
  </div>

</template>

<script>
  import {Fetch} from '@/common/utils';
  export default {
    name: 'app',
    components: {
      'v-menu': require('@/components/menu.vue'),
      'v-bottom': require('@/components/bottom.vue'),
      'v-news': require('@/components/news.vue')
    },
    data () {
      return {
        isCollapse: false,
        leftNews: [],
        date: this.getDateFromString('2017/08/10 10:03')
      };
    },
    created () {
      Fetch('/getData/list', {
        method: 'get'
      }).then(data => {
        this.leftNews = data;
      });
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath);
      },
      getDateFromString (dateTimeString) {
        // Input like 2014-02-01 01:02:30 will get invalid date in mobile browsers
        let date = new Date(dateTimeString.substring(0, 10));

        let hoursString = dateTimeString.substring(11, 13);
        let minutesString = dateTimeString.substring(14, 16);
        let secondString = dateTimeString.substring(17, 19);

        if (hoursString) {
          date.setHours(hoursString);
        } else {
          date.setHours(0);
        }

        if (minutesString) {
          date.setMinutes(minutesString);
        }

        if (secondString) {
          date.setSeconds(secondString);
        }

        return date;
      }
    }
  };
</script>

<style>
body {
  margin:0;
}
header {
  font-size: 30px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
