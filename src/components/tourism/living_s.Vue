<template>
  <div class="living_s">
    <v-header v-bind:bactive="bactive" v-bind:bheader="bheader"></v-header>

    <div class="tours_con">
      <img src="../../../static/images/t_banner1.png" alt="">

      <div class="charm_t">
        <div class="charm_title">
          <span><img class="triangle" src="../../../static/images/triangle.png" alt="">住在泸沽湖</span>
          <p class="address">当前位置：首页>旅游攻略><span>住在泸沽湖</span></p>
        </div>

        <div class="content_detail clearfix">
            <div class="conL lf">
              <h6>泸沽湖云上度假酒店 </h6>
              <div class="swiper">
                <swiper :options="swiperOption" ref="mySwiper">
                  <!-- slides -->
                  <swiper-slide><img src="../../../static/images/live1.png" alt=""></swiper-slide>
                  <swiper-slide><img src="../../../static/images/strategy4.png" alt=""></swiper-slide>
                  <swiper-slide><img src="../../../static/images/strategy5.png" alt=""></swiper-slide>
                  <swiper-slide><img src="../../../static/images/strategy6.png" alt=""></swiper-slide>
                  <swiper-slide><img src="../../../static/images/strategy7.png" alt=""></swiper-slide>
                  <swiper-slide><img src="../../../static/images/strategy8.png" alt=""></swiper-slide>
                  <!-- Optional controls -->
                  <div class="swiper-pagination" slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                  <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
                </swiper>


              </div>
              <div class="artile">
                <p class="title">简介：</p>
                 <p class='artile_detail'>泸沽湖云上度假酒店位于美丽的泸沽湖，坐北朝南，依山而建。专业的设计团队打造的5层楼24间海景房，让看风景成为享受。酒店设有：一楼超大园林景观，三楼水景露台，四楼休息区，五楼天台休闲区，800平方的地下停车场。1:1的绿化配比让您的假期更好得到放松。</p>
                <ul>
                  <li class="title">酒店设施：</li>
                  <li>网络	</li>
                  <li>客房WIFI免费房间内高速上网公共区WIFI免费</li>
                  <li>交通设施	</li>
                  <li>免费停车场</li>
                  <li>交通服务</li>
                  <li>接机服务接站服务租车服务叫车服务</li>
                  <li>休闲娱乐</li>
                  <li>室外游泳池健身室SPA按摩室棋牌室茶室</li>
                  <li>前台服务</li>
                  <li>行李寄存24小时前台24小时大堂经理专职门童免费旅游交通图旅游票务叫醒服务邮政服务</li>
                  <li>地址：盐源 泸沽湖达祖村扎日落 ，泸沽湖旁</li>
                </ul>
              </div>
            </div>
          <div class="conR lf">
            <div class="charm_title">
              <span class="tui">推荐</span>
            </div>

            <div class="livLists">
               <div class="live">
                 <img src="../../../static/images/lives1.jpg" alt="">
                 <p>泸沽湖云端原舍精品湖景客栈 </p>
               </div>
               <div class="live">
                 <img src="../../../static/images/lives2.jpg" alt="">
                 <p>泸沽湖女神湾圆融居客栈</p>
               </div>
               <div class="live">
                 <img src="../../../static/images/lives3.jpg" alt="">
                 <p>Q加·泸沽湖意外客栈</p>
               </div>
            </div>

          </div>
        </div>

      </div>


    </div>



    <v-footer></v-footer>
  </div>

</template>

<script>
  import header from '@/components/common/header'
  import footer from '@/components/common/footer'
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    name: 'living_s',
    data () {
      return {
        bactive: 5,
        bheader: 1,
        swiperOption: {
          autoplay: true,
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

        }

      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      'v-header': header,
      'v-footer': footer,
      swiper,
      swiperSlide
    }
  }

</script>

<style scoped>
  .tours_con {
    width: 100%;
    position: relative;
    z-index: 1;
    background: linear-gradient(#045ebc, #7ebfe9);
    width: 100%;
    padding-bottom: 104px;
  }

  .tours_con img {
    width: 100%;
    height: 588px;
    display: block;
  }

  .charm_t {
    width: 1156px;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    filter: blur();
    margin: 0 auto;
    margin-top: -217px;
    padding: 0 28px;
  }

  img.triangle {
    width: 7px;
    height: 12px;
    vertical-align: inherit;
    display: inline;
    margin-right: 14px;
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

  .swiper-container {
    width: 690px;
    height: 445px;
  }
.swiper img{
  height: 445px;
}
  .conL{
    margin-left: -100px;
    width: 810px;
    margin-top: 10px;
  }
  .conL h6{
    font-size: 20px;
    color: #222222;
    text-align: center;
    margin: 36px 0;
    font-weight: 400;
  }
  .artile{
    padding: 30px 60px 70px;
    color: #222;
  }
  .artile ul{
    margin-top:25px;
  }
  .artile ul li{
    line-height: 30px;
    color: #222;
    font-size: 14px;
    text-indent: 2em;
  }
  .artile .title{
      font-size: 16px;
    line-height: 36px;
    text-indent: 0em;
  }
  .artile p.artile_detail{
    font-size: 14px;
    text-indent: 2em;
    line-height: 30px;
  }
  .conR{
    width: 260px;
    margin-left: 40px;
    margin-top: 20px;
  }
  .charm_title span.tui{
    font-size: 20px;
    color: #222;
  }
 .conR .livLists .live{
    position: relative;
   margin-top: 25px;
  }
.conR .livLists .live img{
  width: 260px;
  height: 159px;
}
  .conR .livLists .live p{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 33px;
    line-height: 33px;
    background-color: rgba(0,0,0,0.59);
    font-size: 14px;
    color: #fff;
    text-align: center;
    width: 100%;
  }

</style>
