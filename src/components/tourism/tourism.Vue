<template>
  <div class="tourism">

    <v-header></v-header>

   <div class="tourism_c">
     <img src="../../../static/images/t_banner1.png" alt="">
     <div class="charm_t">
       <div class="charm_title">
         <span>旅游攻略</span>
         <p class="address">当前位置：首页><span>旅游攻略</span></p>
       </div>
     </div>

     <div class="tour_list">
       <ul class="clearfix">
         <li >
           <div class="tour_img">
             <img class="tourlist" src="../../../static/images/tourlist1.png" alt="">
             <div class="top_mode">
               <p>泸沽湖属国家级重点风景名胜区，国家AAAA级旅游景区，位于四川省西南部、青藏高原东南缘，湖面海拔2690米，水域面积58.8平方公里，平均水深45米，最大水深93米，能见度...
               <a href="#">【查看详情】</a></p>
             </div>
           </div>
           <div class="tour_link tour_bg1">
             <a href="#">
               <img class="tour_icon" src="../../../static/images/t_shop.png" alt="">
               <p class="tour_title">购在泸沽湖</p>
               <p class="tour_eng">Bought in Lugu lake</p>
             </a>
           </div>
         </li>
         <li >
           <div class="tour_link tour_bg2">
             <a href="#">
               <img class="tour_icon" src="../../../static/images/t_hotel.png" alt="">
               <p class="tour_title">住在泸沽湖</p>
               <p class="tour_eng">Living in Lugu lake</p>
             </a>
           </div>
           <div class="tour_img">
             <img class="tourlist" src="../../../static/images/tourlist2.png" alt="">
           </div>
         </li>
         <li >
           <div class="tour_img">
             <img class="tourlist" src="../../../static/images/tourlist3.png" alt="">
           </div>
           <div class="tour_link tour_bg3">
             <a href="#">
               <img class="tour_icon" src="../../../static/images/t_walk.png" alt="">
               <p class="tour_title">行在泸沽湖</p>
               <p class="tour_eng">Walking in Lugu lake</p>
             </a>
           </div>

         </li>
         <li >
           <div class="tour_link tour_bg4">
             <a href="#">
               <img class="tour_icon" src="../../../static/images/t_eat.png" alt="">
               <p class="tour_title">吃在泸沽湖</p>
               <p class="tour_eng">Eating in Lugu lake</p>
             </a>
           </div>
           <div class="tour_img">
             <img class="tourlist" src="../../../static/images/tourlist4.png" alt="">
           </div>
         </li>

       </ul>
     </div>

     <div class="line_list">
       <div class="line_title">
         <span>线路游览 /Line tour</span>
       </div>
       <ul class="clearfix">
         <li>
           <img class="linelist" src="../../../static/images/linelist1.png" alt="">
           <div class="linemode">
             成都周边游纯玩泸沽湖四日游
           </div>
         </li>
         <li>
           <img class="linelist" src="../../../static/images/linelist1.png" alt="">
           <div class="linemode">
             成都周边游纯玩泸沽湖四日游
           </div>
         </li>
         <li>
           <img class="linelist" src="../../../static/images/linelist1.png" alt="">
           <div class="linemode">
             成都周边游纯玩泸沽湖四日游
           </div>
         </li>
         <li>
           <img class="linelist" src="../../../static/images/linelist1.png" alt="">
           <div class="linemode">
             成都周边游纯玩泸沽湖四日游
           </div>
         </li>
       </ul>
     </div>


     <div class="travel_list">
       <div class="line_title">
         <span>旅游日志 /Travel log</span>
       </div>
       <ul class="clearfix">
         <li>
           <img class="travellist" src="../../../static/images/travellist1.png" alt="">
           <div class="travelmode">
             <p class="travel_t">云南必游｜写给泸沽湖的一纸情书：爱你如初，情深一往</p>
             <p class="travel_des">听说，来云南旅行会有两种不同的心态：一是去不甚了解的秘境探秘奇遇，如滇东南；二是去已熟...</p>
           </div>
         </li>
         <li>
           <img class="travellist" src="../../../static/images/travellist1.png" alt="">
           <div class="travelmode">
             <p class="travel_t">云南必游｜写给泸沽湖的一纸情书：爱你如初，情深一往</p>
             <p class="travel_des">听说，来云南旅行会有两种不同的心态：一是去不甚了解的秘境探秘奇遇，如滇东南；二是去已熟...</p>
           </div>
         </li>
         <li>
           <img class="travellist" src="../../../static/images/travellist1.png" alt="">
           <div class="travelmode">
             <p class="travel_t">云南必游｜写给泸沽湖的一纸情书：爱你如初，情深一往</p>
             <p class="travel_des">听说，来云南旅行会有两种不同的心态：一是去不甚了解的秘境探秘奇遇，如滇东南；二是去已熟...</p>
           </div>
         </li>
         <li>
           <img class="travellist" src="../../../static/images/travellist1.png" alt="">
           <div class="travelmode">
             <p class="travel_t">云南必游｜写给泸沽湖的一纸情书：爱你如初，情深一往</p>
             <p class="travel_des">听说，来云南旅行会有两种不同的心态：一是去不甚了解的秘境探秘奇遇，如滇东南；二是去已熟...</p>
           </div>
         </li>
       </ul>
     </div>

   </div>

    <v-footer></v-footer>

  </div>
</template>

<script>
  import header from '@/components/common/header'
  import footer from '@/components/common/footer'
  export default {
    name: 'tourism',
    data () {
      return {}
    },
    components: {
      'v-header': header,
      'v-footer': footer
    }
  }

</script>

<style scoped>
  .tourism_c {
    width: 100%;
    position: relative;
    z-index: 1;
    background: linear-gradient(#045ebc, #7ebfe9);
    width: 100%;
    padding-bottom: 104px;
  }

  .charmcontent img {
    width: 100%;
    height: 588px;
    display: block;
  }

  .charm_t {
    width: 1156px;
    height: 84px;
    background: rgba(255, 255, 255, 0.6);
    filter: blur();
    margin: 0 auto;
    margin-top: -237px;
    padding: 0 28px;
  }

  .charm_title {
    border-bottom: 1px solid #fff;
    height: 44px;
    padding-top: 10px;
    width: 100%;
  }

  .charm_title > span {
    float: left;
    color: #444444;
    font-size: 14px;
    line-height: 44px;
    border-bottom: 2px solid #1182e3;
    padding: 0 10px;
  }

  .address {
    color: #666666;
    font-size: 14px;
    float: right;
    line-height: 44px;
    padding-right: 10px;
  }

 .address > span {
    color: #1182e3;
    font-size: 14px;
  }
.tour_list{
  width: 1212px;
  height: 100%;
  margin: 0 auto;
  margin-top: 41px;
}
.tour_list ul li{
  width: 303px;
  float: left;
}

  .tour_list ul li .tour_img{
    width: 303px;
    height: 649px;
    position: relative;
    overflow: hidden;
  }
  .tour_img .tourlist{
    width: 100%;
    height: 100%;
  }
  .top_mode{
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 263px;
    height: 120px;
    background: rgba(56,151,229,0.68);
    text-align: left;
    padding: 25px 20px;
    overflow: hidden;
  }
  .top_mode>p{
    font-size: 14px;
    text-indent: 2em;
    color: #fff;
    line-height: 24px;
  }
  .top_mode p a{
    font-size: 14px;
    color: #ffd200;
  }
  .tour_link{
    width: 303px;
    height: 261px;
    filter: blur();
  }
  .tour_bg1{background-color: #7563ff;}
  .tour_bg2{ background-color: #5dc241; }
  .tour_bg3{ background-color: #46b4de; }
  .tour_bg4{ background-color: #e9c13d; }
  .tour_link a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .tour_link .tour_icon{
    width: 50px;
    height: 50px;
    margin: 60px  auto 10px;
  }
  .tour_link p.tour_title{
    font-size: 18px;
    color: #fff;
  }
  .tour_link p.tour_eng{
    font-size: 14px;
    color: #fff;
    line-height: 30px;
  }

.line_list{
  width: 1210px;
  margin: 46px auto;
}
 .line_title{border-bottom: 1px solid #fff;text-align: left;margin-bottom: 35px;line-height: 40px;}
  .line_title  span{font-size:16px;color: #222222;border-bottom: 2px solid #1182e3;padding:0 10px 10px;}
  .line_list ul li{float: left; position: relative;margin-right: 36px;}
  .line_list ul li:last-child{margin-right: 0}
  .line_list ul li .linelist{width: 275px;height: 275px;display: block;}
  .line_list ul li .linemode{position: absolute;font-size: 16px;color: #fff;
    width: 100%;left: 0;bottom: 0;
    height: 49px;line-height: 49px;
    background-color: rgba(0,0,0,0.54);}

  .travel_list{width: 1210px;margin: 0px auto 46px;}
  .travel_list ul li{float: left;width: 275px;height: 100%;margin-right: 36px;}
  .travel_list ul li:last-child{margin-right: 0;}
  .travellist{width: 275px;height: 172px;display: block;}
  .travelmode{width: 261px; height: 131px;background-color: rgba(17,130,227,0.62);color: #fff;text-align: left;padding: 12px 7px;}
  .travel_t{font-size: 16px;padding:0 10px 10px;border-bottom: 1px solid #fff;}
  .travel_des{font-size: 14px;padding: 10px 10px 0;line-height: 22px;}

</style>
