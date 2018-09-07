<template>
  <div class="index">
      <div class="index_nav clearfix">
        <div class="lf logos"><img src="../../static/images/logo.png"></div>
        <div class="nav_cont lf">
            <ul class="clearfix">
                <li class="active"><a href="#">首页</a></li>
                <li><a href="#">最新资讯</a></li>
                <li><a href="#">景区介绍</a></li>
                <li><a href="#">魅力泸沽湖</a></li>
                <li><a href="#">旅游攻略</a></li>
                <li><a href="#">景区电商</a></li>
            </ul>
        </div>
        <div class="rf search">
            <input type="text" value="搜索">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.index_nav{width: 1220px; margin: 0 auto;height: 92px;}
.index_nav .logos{width: 75px;height: 72px;margin-top: 10px}
.index_nav .logos img{width: 100%}
.index_nav .nav_cont{background: url(../../static/images/nav.png);width:944px;height: 92px; margin-left: 10px}
.index_nav .nav_cont ul{ margin-left: 10px}
.index_nav .nav_cont ul li{float: left;font-size: 16px;height: 79px; line-height: 92px; padding: 0 10px;margin-left: 60px}
.index_nav .nav_cont ul li a{ color: #fff;}
.index_nav .nav_cont ul li.active{border-bottom: solid 3px #5750ff}
.index_nav .nav_cont ul li.active a{color: #5750ff}
.index_nav .search{width: 155px;height: 33px; margin-top: 30px}
.index_nav .search input{width: 153px;height: 31px;}
</style>
