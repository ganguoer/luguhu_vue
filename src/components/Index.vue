<template>
<div>
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
            <input type="text" value="咨讯/景区/攻略" ref="input1" @focus.prevent="add" @blur.prevent="changeCount()">
            <span class="iconcom search_icon"></span>
        </div>
        <div class="lookmore" @click="lookmores">查看更多<span class="iconcom arrowdowns"></span></div>
    </div>
  </div>
  <div class="secondwrap">
    <div class="clearfix">
      <div class="lf lastes_news">
        <div class="clearfix">
          <div class="lf dates">
            <p class="dates_month">2018-9</p>
            <p class="dates_day">06</p>
          </div>
          <div class="lf texts">
            <h3>最新资讯</h3>
            <p class="titles">丽江旅游拟投30亿在泸沽湖建摩梭旅游小镇</p>
            <p class="detail_tit">丽江旅游一直希望将泸沽湖作为“第二主战潮。2012年，在泸沽湖投资建设牛开地片... <router-link to=""> <span class="moredetail">【详情】</span></router-link></p>
          </div>
        </div>
      </div>
      <div class="weater lf">
        <iframe width="500" scrolling="no" height="18" frameborder="0" allowtransparency="true" src="//i.tianqi.com/index.php?c=code&id=1&icon=1&py=tongzhou&wind=1&num=2&site=14"></iframe>
      </div>
    </div>
    <div class="clearfix newswarp">
        <div class="lf images_tab">
            <h3 class="tits_tip">精美图库</h3>
            <div class="Cooldog_container">
                <div class="Cooldog_content">   
                    <ul>
                        <li class="p1">
                            <a href="javascript:;">
                                <img src="../../static/images/index_23.png" alt="">
                            </a>
                        </li>
                        <li class="p2">
                            <a href="javascript:;">
                                <img src="../../static/images/index_26.png" alt="">
                            </a>
                        </li>
                        <li class="p3">
                            <a href="javascript:;">
                                <img src="../../static/images/index_28.jpg" alt="">
                            </a>
                        </li>
                        <li class="p4">
                            <a href="javascript:;">
                                <img src="../../static/images/index_23.png" alt="">
                            </a>
                        </li>
                        <li class="p5">
                            <a href="javascript:;">
                                <img src="../../static/images/index_26.png" alt="">
                            </a>
                        </li>
                        <li class="p6">
                            <a href="javascript:;">
                                <img src="../../static/images/index_28.jpg" alt="">
                            </a>
                        </li>
                        <li class="p7">
                            <a href="javascript:;">
                                <img src="../../static/images/index_28.jpg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="javascript:;" class="btn_left">
                    <span class="iconcom left_tip"></span>
                </a>
                <a href="javascript:;" class="btn_right">
                    <span class="iconcom right_tip"></span>
                </a>
                <div class="buttons clearfix">
                    <a href="javascript:;" class="color"></a>
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                </div>
            </div>
        </div>
        <div class="rf news_detail">
            <h3 class="tits_tip">热点资讯</h3>
            <div class="titles clearfix">
                <span class="lf dt">景区动态</span>
                <router-link to="" class="rf mores">更多>></router-link>
            </div>
            <div class="clearfix one-news">
                <div class="lf img_cont"><img src="../../static/images/index2.jpg"></div>
                <div class="lf text_cont">
                    <router-link to="">
                        <p class="firstp">丽江旅游拟投30亿在泸沽湖建摩梭旅游小镇</p>
                        <p class="secondp">丽江旅游一直希望将泸沽湖作为“第二主战场”。2012年，在泸沽湖投资建设牛开地片区度假村、里格精品度假村两个项目，总投资额预计14亿元...</p>
                    </router-link>
                </div>
            </div>
            <ul class="news_list">
                <li class="clearfix">
                    <router-link to="">
                        <span class="lf">泸沽湖，云南海拔最高的湖泊，湖中有5个全岛、3个半岛</span>
                        <span class="rf">[2018-07-05]</span>
                    </router-link>
                </li>
                <li class="clearfix">
                    <router-link to="">
                        <span class="lf">泸沽湖，云南海拔最高的湖泊，湖中有5个全岛、3个半岛</span>
                        <span class="rf">[2018-07-05]</span>
                    </router-link>
                </li>
                <li class="clearfix">
                    <router-link to="">
                        <span class="lf">泸沽湖，云南海拔最高的湖泊，湖中有5个全岛、3个半岛</span>
                        <span class="rf">[2018-07-05]</span>
                    </router-link>
                </li>
                <li class="clearfix">
                    <router-link to="">
                        <span class="lf">泸沽湖，云南海拔最高的湖泊，湖中有5个全岛、3个半岛</span>
                        <span class="rf">[2018-07-05]</span>
                    </router-link>
                </li>
                <li class="clearfix">
                    <router-link to="">
                        <span class="lf">泸沽湖，云南海拔最高的湖泊，湖中有5个全岛、3个半岛</span>
                        <span class="rf">[2018-07-05]</span>
                    </router-link>
                </li>
                <li class="clearfix">
                    <router-link to="">
                        <span class="lf">泸沽湖，云南海拔最高的湖泊，湖中有5个全岛、3个半岛</span>
                        <span class="rf">[2018-07-05]</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
  </div>
  <div class="thirdwarp">
      <ul class="scenic_spot clearfix">
          <li>
              <div class="img_wrap"><img src="../../static/images/index2.jpg"></div>
              <p>花楼恋歌</p>
          </li>
          <li>
              <div class="img_wrap"><img src="../../static/images/indexs.jpg"></div>
              <p>大落水商业区</p>
          </li>
          <li>
              <div class="img_wrap"><img src="../../static/images/indexsd.jpg"></div>
              <p>杨二车那木国际艺术博物馆</p>
          </li>
          <li>
              <div class="img_wrap"><img src="../../static/images/indexsda.jpg"></div>
              <p>摩梭民俗博物馆</p>
          </li>
      </ul>
      <div class="bottoms_tip"></div>
      <div class="hot_scenic">

      </div>
  </div>
</div>
</template>
<script>
import '../../static/js/Cooldog.js'
export default {
  name: "Index",
  data() {
    return {};
  },
  computed: {},
  mounted() {
    let windowh = $(window).height();
    $(".index").css({ height: windowh });
  },
  methods: {
    add() {
      this.$refs.input1.value = "";
    },
    changeCount() {
      if (this.$refs.input1.value == "") {
        this.$refs.input1.value = "咨讯/景区/攻略";
      }
    },
    lookmores() {
      var h = $(window).height();
      $(window).scrollTop(h);
    }
  }
};
</script>

<style scoped>
.hot_scenic{width: 1220px; height: 380px;}
.bottoms_tip{background: url(../../static/images/plant.png);width: 1220px;height: 36px;padding-top: 8px;margin: 0 auto}
.img_wrap{width:278px;height: 278px;border-radius: 50%;border: solid 3px #fff;overflow: hidden; }
.scenic_spot{width: 1220px;margin: 0 auto; padding-top: 180px}
.scenic_spot li{width: 284px;float: left;margin-right:28px;}
.scenic_spot li p{text-align: center;font-size: 16px; color: #fff; font-weight: 600;text-shadow: 5px 5px 5px #98b2c5;  margin-top: 12px}
.scenic_spot li:last-child{margin-right: 0}
.news_list{margin-top: 15px;height: 180px;overflow: hidden;}
.news_list li{height: 30px; line-height: 30px; overflow: hidden;}
.news_list li .lf{width: 70%;overflow: hidden;height: 36px;}
.news_detail .text_cont{width: 350px; margin-left: 18px;font-size: 14px;}
.news_detail .firstp{height: 25px; line-height: 25px;overflow:hidden;}
.news_detail .secondp{color: #898989;height: 54px;line-height: 18px;overflow: hidden;}
.news_detail .one-news{margin-top: 20px;}
.news_detail .img_cont{width: 130px;height: 82px;overflow:hidden;}
.mores{background: url(../../static/images/index_15.png);width:66px;height: 26px; line-height: 26px;color: #fff;font-size: 12px; text-align: center; }
.news_detail .titles{border-bottom: solid 1px #dcdcdc;height: 34px; line-height: 34px; color: #1182e3}
.news_detail{width:500px;}
.images_tab{
    width: 608px;
}
.tits_tip{
    font-size: 20px;
    color: #fff;
    background: url(../../static/images/index_11.png);
    width: 159px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    font-weight: 100;
    margin: 34px auto
}
.weater {
  margin: 40px 0 0 70px;
}
.dates {
  background: url(../../static/images/index_03.png);
  width: 101px;
  height: 103px;
  position: relative;
}
.dates_month {
  font-size: 16px;
  position: absolute;
  left: 26px;
  top: 14px;
  color: #fff;
}
.dates_day {
  font-size: 41px;
  color: #000;
  left: 27px;
  top: 40px;
  position: absolute;
}
.lastes_news .texts {
  margin-left: 10px;
  width: 370px;
}
.moredetail {
  color: #5750ff;
}
.lastes_news .texts .titles {
  font-size: 16px;
  margin-top: 5px;
}
.detail_tit {
  font-size: 14px;
  color: #8b8b8b;
  margin-top: 5px;
}
.lastes_news .texts h3 {
  width: 67px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #1182e3;
  text-align: center;
  border: solid 1px #1182e3;
  margin-top: 7px;
}
.lastes_news {
  width: 485px;
}
.secondwrap {
  height: 595px;
  background: #fff;
  width: 1220px;
  margin: 0 auto;
}
.lookmore {
  padding-left: 25px;
  cursor: pointer;
  width: 106px;
  height: 35px;
  line-height: 35px;
  background: #5750ff;
  text-align: left;
  color: #fff;
  position: absolute;
  left: 50%;
  bottom: 120px;
  margin-left: -66px;
  font-size: 16px;
  border-radius: 15px;
}
.arrowdowns {
  background-position: -298px -100px;
  width: 17px;
  height: 15px;
  position: absolute;
  right: 20px;
  top: 10px;
}
.index {
  background: url(../../static/images/bg_01.png) no-repeat;
  width: 100%;
  position: relative;
  background-size: cover;
}
.index_nav {
  width: 1220px;
  margin: 0 auto;
  height: 92px;
}
.index_nav .logos {
  width: 75px;
  height: 72px;
  margin-top: 10px;
}
.index_nav .logos img {
  width: 100%;
}
.index_nav .nav_cont {
  background: url(../../static/images/nav.png);
  width: 944px;
  height: 92px;
  margin-left: 10px;
}
.index_nav .nav_cont ul {
  margin-left: 10px;
}
.index_nav .nav_cont ul li {
  float: left;
  font-size: 16px;
  height: 79px;
  line-height: 92px;
  padding: 0 10px;
  margin-left: 60px;
}
.index_nav .nav_cont ul li a {
  color: #fff;
}
.index_nav .nav_cont ul li.active {
  border-bottom: solid 3px #5750ff;
}
.index_nav .nav_cont ul li.active a {
  color: #5750ff;
}
.index_nav .search {
  width: 155px;
  height: 33px;
  margin-top: 30px;
  position: relative;
}
.index_nav .search input {
  width: 138px;
  height: 31px;
  background: #dee8f8;
  border-radius: 15px;
  padding-left: 15px;
  color: #9f9f9f;
}
.search_icon {
  background-position: 0 0;
  width: 17px;
  height: 17px;
  position: absolute;
  right: 15px;
  top: 12px;
  cursor: pointer;
}
.thirdwarp {
  background: url(../../static/images/bg_03.png) no-repeat;
  width: 100%;
  height: 1586px;
}
.Cooldog_container {
  width: 608px;
  height: 325px;
  position: relative;
  overflow: hidden;
}

.Cooldog_container .Cooldog_content {
  position: absolute;
  width: 501px;
  height: 325px;
  top: 0;
  left: 50%;
  margin-left: -249px;
}

.Cooldog_container .Cooldog_content li {
  position: absolute;
  top: 0;
  left: 0;
  width: 501px;
  height: 325px;
  transition: all 0.3s ease;
}

.Cooldog_container .Cooldog_content li img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  display: inline-block;
}

.Cooldog_container .btn_left,
.Cooldog_container .btn_right {
  display: none;
  width: 126px;
  height: 179px;
  position: absolute;
  top: 21px;
  z-index: 50;
  color: #fff;
  line-height: 179px;
}

.Cooldog_container .btn_left {
  text-align: left;
  left: 0;
}

.Cooldog_container .btn_right {
  text-align: right;
  right: 0;
}
.left_tip{
    position: absolute; 
    left: 15px;
    top: 100px;
    width: 36px;
    height: 36px;
    background-color: rgba(0,0,0,.4);
    background-position: -190px -392px;
    z-index: 60;
    border-radius: 50%;
}
.right_tip{
    position: absolute; 
    right: 15px;
    top: 100px;
    width: 36px;
    height: 36px;
    background-color: rgba(0,0,0,.4);
    background-position: -285px 7px;
    z-index: 60;
    border-radius: 50%;
}
.Cooldog_container i {
  font-size: 50px;
}

.Cooldog_container .btn_close {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  display: none;
  line-height: 20px;
  text-align: center;
  background-color: #bcb9b9;
  color: #fff;
}

.Cooldog_container .btn_close i {
  font-size: 18px;
}

.Cooldog_container .buttons {
  width: 370px;
  height: 5px;
  line-height: 5px;
  position: absolute;
  bottom: 5px;
  left: 50%;
  margin-left: -185px;
  z-index: 80;
}

.Cooldog_container .buttons a {
  float: left;
  width: 40px;
  height: 5px;
  background-color: #898f94;
  margin-right: 15px;
}

.Cooldog_container .buttons a.color {
  background-color: #92ffff;
}

.Cooldog_container .buttons a:last-child {
  margin-right: 0;
}

.p1 {
  transform: translate3d(-577px, 0, 0) scale(0.81);
  opacity: 0.4;
  z-index: 1;
}

.p2 {
  transform: translate3d(-325px, 0, 0) scale(0.81);
  transform-origin: 0 50%;
  opacity: 0.6;
  z-index: 2;
}

.p3 {
  transform: translate3d(-125px, 0, 0) scale(0.81);
  transform-origin: 0 50%;
  opacity: 0.8;
  z-index: 3;
}

.p4 {
  transform: translate3d(0px, 0, 0) scale(1);
  opacity: 1;
  z-index: 4;
}

.p5 {
  transform: translate3d(220px, 0, 0) scale(0.81);
  transform-origin: 0 50%;
  opacity: 0.8;
  z-index: 3;
}

.p6 {
  transform: translate3d(425px, 0, 0) scale(0.81);
  transform-origin: 0 50%;
  opacity: 0.6;
  z-index: 2;
}

.p7 {
  transform: translate3d(625px, 0, 0) scale(0.81);
  transform-origin: 0 50%;
  opacity: 0.4;
  z-index: 1;
}



</style>
