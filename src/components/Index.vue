<template>
<div>
  <div class="index">
      <div class="index_nav clearfix">
        <div class="lf logos"><img src="../../static/images/logo.png"></div>
        <div class="nav_cont lf">
            <ul class="clearfix">
                <li class="active"><a href="#">首页</a></li>
                <li><router-link to="/latestInformation">最新资讯</router-link></li>
                <li><router-link to="/scenic">景区介绍</router-link></li>
                <li><router-link to="/charm">魅力泸沽湖</router-link></li>
                <li><router-link to="/tourism">旅游攻略</router-link></li>
                <li><router-link to="/market">景区电商</router-link></li>
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
            <p class="dates_month"></p>
            <p class="dates_day"></p>
          </div>
          <div class="lf texts">
            <h3>最新资讯</h3>
            <p class="titles">丽江旅游拟投30亿在泸沽湖建摩梭旅游小镇</p>
            <p class="detail_tit">丽江旅游一直希望将泸沽湖作为“第二主战潮。2012年，在泸沽湖投资建设牛开地片... <router-link to="/newszixun"> <span class="moredetail">【详情】</span></router-link></p>
          </div>
        </div>
      </div>
      <div class="weater lf">
        <iframe width="500" scrolling="no" height="18" frameborder="0" allowtransparency="true" src="https://i.tianqi.com/index.php?c=code&id=1&icon=2&py=ninglang&wind=1&num=2&site=14"></iframe>
      </div>
    </div>
    <div class="clearfix newswarp">
        <div class="lf images_tab">
            <h3 class="tits_tip">精美图库</h3>
            <div class="Cooldog_container">
                <div class="Cooldog_content">
                    <ul>
                        <li class="p1" v-for="(item,index) in imgs" :key="index">
                            <a href="javascript:;">
                                <img :src="imgSrc+ item.img_url " alt="">
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
                <router-link to="/latestInformation" class="rf mores">更多>></router-link>
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
                <li class="clearfix" v-for="(item,index) in hotInfos" :key="index">
                    <router-link :to="{path:'/newsdetail',query:{ id:item.id}}" >
                        <span class="lf">{{item.title}}</span>
                        <span class="rf">[{{item.creatTime}}]</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
  </div>
  <div class="thirdwarp">
      <ul class="scenic_spot clearfix">
          <li v-for="(item,index) in shopList" :key="index">
            <router-link :to="{path:'/shopping_s',query:{ id:item.id}}" >
              <div class="img_wrap"><img :src="imgSrc+ item.images"></div>
              <p>{{item.title}}</p>
            </router-link>
          </li>
      </ul>
      <div class="bottoms_tip"></div>
      <div class="hot_scenic">
        <div class="banners clearfix">
            <h3 class="tits_tip tits_tip1 lf">热门景点</h3>
            <router-link to="" class="rf mores">更多>></router-link>
        </div>
        <ul class="list_imgs clearfix">
            <li v-for="(item,index) in scenicList" :key="index">
                <div class="imgs">
                    <img :src="imgSrc+ item.images">
                    <router-link :to="{path:'/scenic_s',query:{ id:item.id}}" class="modetails">查看详情</router-link>
                </div>
                <p>{{item.title}}</p>
            </li>

        </ul>
      </div>
      <div class="hot_scenic mt48">
        <div class="banners clearfix">
           <div class="everywarp lf" v-for="(item,index) in tabs"    :class="{active:index == num}"    @click="num=index,tabChange('select' + (index + 1))">
               <span class="iconcom hotelbg" :class="item.hotelclass"></span>
               <span class="sangle"></span>
               {{item.title}}
            </div>

        </div>
        <keep-alive>
          <component :is="tabView"></component>
        </keep-alive>

      </div>
  </div>
  <div class="fourwarp">
    <h3 class="tits_tip tits_tip1">旅游攻略</h3>
    <div class="clearfix titles">
        <span class="lf">旅游攻略</span>
        <div class="rf writes">
            <span class="iconcom icon_write"></span>
            写游记
        </div>
    </div>
    <ul class="ul_contlist">
        <li class="clearfix" v-for="(item,index) in travelList" :key="index">
            <div class="lf contl_img"><img :src="imgSrc + item.images"></div>
            <div class="lf text_p">
                <p class="titles_1">{{item.title}}</p>
                <p class="titles_2">{{item.content}}</p>
                <div class="bottom_tip clearfix">
                    <div class="lf bips">
                        <span class="iconcom areas"></span>
                        泸沽湖风景区
                    </div>
                    <div class="lf bips bips_1">
                        <span class="area_tip"><img src="../../static/images/index2.jpg"></span>
                        一直在路上
                    </div>
                    <div class="lf bips">
                        <span class="iconcom look"></span>
                        65
                    </div>
                </div>
            </div>
        </li>
    </ul>
  </div>
  <v-footer></v-footer>
</div>
</template>
<script>
import '../../static/js/Cooldog.js'
import footer from "@/components/common/footer";
import select1 from "@/components/component_child/tabTransport";
import select2 from "@/components/component_child/tabTransport";
import select3 from "@/components/component_child/tabTransport";
import select4 from "@/components/component_child/tabTransport";
$(function(){
    $('.list_imgs li').hover(function(){
        $(this).find('.modetails').fadeIn(300);
    },function(){
        $(this).find('.modetails').fadeOut(300);
    })
})
export default {
  name: "Index",
  data() {
    return {
      tabs:[
        {title:'酒店',hotelclass:'hotelbg1'},
        {title:'餐饮',hotelclass:'hotelbg2'},
        {title:'购物',hotelclass:'hotelbg3'},
        {title:'交通',hotelclass:'hotelbg4'}
       ],
      num:0,
      tabView: 'select1',
      hotInfos:[],
      imgs:[],
      shopList:[],
      scenicList:[],
      hotelList:[],
      travelList:[],
    };
  },
  computed: {},
  components: {
    "v-footer": footer,
    select1,
    select2,
    select3,
    select4,
  },
  mounted() {
    this.showTime();
    let windowh = $(window).height();
    $(".index").css({ height: windowh });
    this.gethotInfos();
    this.getImg();
    this.shopLists();
    this.scenicLists();
    this.hotelLists();
    this.travelLists();
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
    },
    showTime(){
      var dates_month = $(".dates_month");
      var dates_day = $(".dates_day");
      var dt = new Date(); // 得到当前时间
      var y = dt.getFullYear(); // 当前年份
      var m = dt.getMonth() + 1; // 当前月份，getMonth 返回值是 0-11 对应 1-12月，因此全部加1
      var d = dt.getDate();
        if(d<10) d='0' + d;
      var str =  y + '-' + m  ;
      var date = d ;
      $(".dates_month").html(str); // 将格式化后的内容装载到容器中
      $(".dates_day").html(date); // 将格式化后的内容装载到容器中
      console.log(str);
      console.log(date);
    },
    getImg(){
      var that=this;
      that.imgSrc =that.config.imgsrc;
      that.axios.get(that.config.info.hotImg,{
        params:{
          size:6
        }
      })
        .then(function (response){
            console.log(response.data.data)
          that.imgs=response.data.data;
        })
    },
    gethotInfos(){
      var that=this;
      that.imgSrc =that.config.imgsrc;
      that.axios.get(that.config.info.getArtical,{
        params : {   //请求参数
          type: 102,
          size:6,
          page:1
        }
      })
        .then(function (response){
          console.log(response.data.data);
          that.hotInfos=response.data.data.article;
        })
    },
    tabChange(tab){
      this.tabView = tab;
    },
    shopLists(){
      var that=this;
      that.imgSrc =that.config.imgsrc;
      that.axios.get(that.config.info.getArtical,{
        params : {   //请求参数
          type: 107,
          size:4,
          page:1
        }
      })
        .then(function (response){
          console.log(response.data.data)
          that.shopList=response.data.data.article;
        })
    },
    scenicLists(){
      var that=this;
      that.imgSrc =that.config.imgsrc;
      that.axios.get(that.config.info.getArtical,{
        params : {   //请求参数
          type: 103,
          size:4,
          page:1
        }
      })
        .then(function (response){
          console.log(response.data.data)
          that.scenicList=response.data.data.article;
        })
    },
    hotelLists(){
      var that=this;
      that.imgSrc =that.config.imgsrc;
      that.axios.get(that.config.tourism.getHotel,{
        params : {   //请求参数
          size:4,
          page:1
        }
      })
        .then(function (response){
          console.log(response.data.data)
          that.hotelList=response.data.data.hotel;
        })
    },
    travelLists(){
      var that=this;
      that.axios.get(that.config.info.getArtical,{
        params : {   //请求参数
          type: 108,
          size:2,
          page:1
        }
      })
        .then(function (response){
          console.log(response.data.data)
          that.travelList=response.data.data.article;
        })
    }
  }
};
</script>

<style scoped>
.look{background-position: -200px -300px;width: 20px;height: 13px;position: absolute;left: -7px;top: 3px}
.areas{background-position: -200px -200px;width: 13px;height: 14px;position: absolute;left: 0;top: 3px}
.bips{margin-right: 30px; position: relative; padding-left: 15px}
.area_tip{width: 21px;height: 20px;position: absolute;left: 0;top: 0px;border-radius: 50%;overflow: hidden;}
.bips_1{padding-left: 25px; color: #ffd200}
.bottom_tip{margin-top: 60px;}
.contl_img{width: 298px;height: 173px;}
.contl_img img{width: 100%;height: 100%;}

.titles_1{font-size: 16px;}
.titles_2{color:#848484;padding-top: 15px;height: 48px;line-height: 24px; display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;}
.text_p{margin-left: 30px;width: 700px;}
.ul_contlist{margin-top: 45px;}
.ul_contlist li{margin-bottom: 36px}
.icon_write{width: 13px;height: 14px; background-position: -200px -100px;position: absolute;left: 16px;top: 8px;}
.writes{background: url(../../static/images/index_19.png);width: 68px;height: 32px; cursor: pointer; line-height: 32px; color: #fff;text-align: right;position: relative;padding-right: 20px;font-size: 12px}
.fourwarp .titles{height: 52px; line-height: 52px;border-bottom: solid 1px #898989;width: 100%;font-size: 16px; padding: 0 15px}
.fourwarp{width: 1220px;margin: 0 auto;}
.hot_scenic .active .sangle{display:block;width:0;height:0; border-width:11px 11px 0;border-style:solid;border-color:#1182e3 transparent transparent;/*黄 透明 透明 */position:absolute;top: 52px;left: 99px;}
.hotelbg{width: 24px;height: 21px;position: absolute;left: 77px;top: 15px}
.everywarp{width: 150px;height: 50px; line-height: 50px;margin-right: 27px; cursor: pointer;margin-left: 34px;color: #1182e3;border:solid 1px #1182e3; font-size: 20px; text-align: right;padding-right: 75px;border-radius: 28px;position: relative;}
.list_imgs .modetails{position: absolute; left: 0; top: 0;bottom: 0;right: 0;z-index: 2;background: rgba(0,0,0,.4);color: #fff;text-align: center;padding-top: 33%;text-decoration: underline;display: none}
.list_imgs li{float: left;width: 284px;margin-right: 11px}
.list_imgs li:last-child{margin-right: 0}
.list_imgs .imgs{width: 284px;height: 205px;box-shadow:2px 2px 10px #888888; overflow: hidden;position: relative;}
.list_imgs .imgs img{width: 100%;height: 100%;}
.list_imgs p{text-align: center;color: #1182e3;font-size: 16px;padding-top: 18px;}
.list_imgs{margin-top: 38px;}
.hot_scenic{width: 1170px; height: 350px;padding:25px 15px;background:rgba(255,255,255,.4); margin: 0 auto; box-shadow: 4px 4px 15px #888888;margin-top: 40px}
.mt48{margin-top: 48px}
.hotelbg1{background-position: 0 -400px;}
.hot_scenic .active .hotelbg1{background-position: 0 -300px;}
.hotelbg2{background-position: -100px 0px;}
.hot_scenic .active .hotelbg2{background-position: -100px -100px;}
.hotelbg3{background-position: -100px -200px;}
.hot_scenic .active .hotelbg3{background-position: -100px -300px;}
.hotelbg4{background-position: -100px -400px;}
.hot_scenic .active .hotelbg4{background-position: -200px 0px;}
.hot_scenic .active{background: #1182e3; color: #fff;height: 52px; line-height: 52px;}
.bottoms_tip{background: url(../../static/images/plant.png);width: 1220px;height: 36px;padding-top: 8px;margin: 0 auto}
.img_wrap{width:278px;height: 278px;border-radius: 50%;border: solid 3px #fff;overflow: hidden; }
.scenic_spot{width: 1220px;margin: 0 auto; padding-top: 180px}
.scenic_spot li{width: 284px;float: left;margin-right:28px;}
.scenic_spot li p{text-align: center;font-size: 16px; color: #fff; font-weight: 600;text-shadow: 5px 5px 5px #98b2c5;  margin-top: 12px}
.scenic_spot li:last-child{margin-right: 0}
.news_list{margin-top: 15px;height: 180px;overflow: hidden;}
.news_list li{height: 30px; line-height: 30px; overflow: hidden;}
.news_list li .lf{width: 340px;overflow: hidden;height: 36px;text-overflow:ellipsis;white-space: nowrap;}
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
.tits_tip1{
    background: url(../../static/images/index_122.png);
    margin: 0
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
  top: 7px;
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
