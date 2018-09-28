<template>
  <div :class="bheader==1 ? 'header headeropacity':'header'">
    <div class="index_nav clearfix">
      <div class="lf logos"><img src="../../../static/images/logo.png"></div>
      <div class="nav_cont lf">
        <ul class="clearfix">
          <li :class="bactive==1 ? 'active' : '' "><router-link to="/">首页</router-link></li>
          <li :class="bactive==2 ? 'active' : '' "><router-link to="/latestInformation">最新资讯</router-link></li>
          <li :class="bactive==3 ? 'active' : '' "><router-link to="/scenic">景区介绍</router-link></li>
          <li :class="bactive==4 ? 'active' : '' "><router-link to="/charm">魅力泸沽湖</router-link></li>
          <li :class="bactive==5 ? 'active' : '' "><router-link to="/tourism">旅游攻略</router-link></li>
          <li :class="bactive==6 ? 'active' : '' "><router-link to="/market">景区电商</router-link></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'header',
    data () {
      return {}
    },
    props:{
      bactive:{
        type:Number,
        required:true
      },
      bheader:{
        type:Number,
        required:true
      }
    }
  }

</script>

<style scoped>
  .header {
    width: 100%;
    height: 123px;
    background: -webkit-linear-gradient(#9cc9eb, #c3dae9);
    background: -o-linear-gradient(#9cc9eb, #c3dae9);
    background: -moz-linear-gradient(#9cc9eb, #c3dae9);
    background: linear-gradient(#9cc9eb, #c3dae9);
  }
  .headeropacity{background:rgba(255,255,255,.75)}
  .index_nav {
    width: 926px;
    margin: 0 auto;
    height: 123px;
  }

  .index_nav .logos {
    width: 85px;
    height: 80px;
    margin-top: 20px
  }

  .index_nav .logos img {
    width: 100%
  }

  .index_nav .nav_cont {
    width: 756px;
    height: 80px;
    margin-left: 10px;
    margin-top: 20px;
  }

  .index_nav .nav_cont ul {
    margin-left: 10px;
  }

  .index_nav .nav_cont ul li {
    float: left;
    font-size: 16px;
    height: 80px;
    line-height: 80px;
    width: 110px;
  }

  .index_nav .nav_cont ul li a {
    color: #545454;
  }

  .index_nav .nav_cont ul li.active {
    background: url(../../../static/images/navA.png) no-repeat 26px -10px;
  }

  .index_nav .nav_cont ul li.active a {
    color: #5750ff
  }

</style>
