<template>
  <div class="shopping_s">
    <v-header v-bind:bactive="bactive" v-bind:bheader="bheader"></v-header>
    <div class="tours_con">
      <img src="../../../static/images/t_banner1.png" alt="">

      <div class="charm_t">
        <div class="charm_title">
          <span><img class="triangle" src="../../../static/images/triangle.png" alt="">吃在泸沽湖</span>
          <p class="address">当前位置：首页>旅游攻略>吃在泸沽湖><span>苦荞粑粑</span></p>
        </div>

        <div class="tour_artile">
          <h6>苦荞粑粑 </h6>
          <div class="section">
            <p>摩梭人都是热情好客的，当你去他家做客记得尝尝主人自己做的苦荞粑粑。苦荞在彝族心目中是五谷之王，它具有健胃、化滞、清热等功效，做成的苦荞粑粑苦甜爽口，回味无穷，外表其貌不扬，属于“好吃不好看”类型。用火灰烧出的苦荞粑粑，摆上十天半月不会变质。苦荞粑粑蘸冬蜂蜜进餐，风味更佳呢。</p>
          </div>
          <div class="section">
            <img src="../../../static/images/strategy8.png" alt="">
          </div>
          <div class="section">
            <img src="../../../static/images/strategy9.png" alt="">
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
  export default {
    name: 'shopping_s',
    data () {
      return {
        bactive: 5,
        bheader: 1
      }
    },
    components: {
      'v-header': header,
      'v-footer': footer
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
    height:100%;
    background: rgba(255, 255, 255, 0.6);
    filter: blur();
    margin: 0 auto;
    margin-top: -217px;
    padding: 0 28px;
  }
  .charm_title {
    border-bottom: 1px solid #fff;
    height: 44px;
    padding-top: 10px;
    width: 100%;
  }
  img.triangle{width: 7px;height: 12px;vertical-align: inherit;display: inline;margin-right: 14px;}
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
  .tour_artile{
    height: 100%;
    padding: 27px 36px 70px 36px;
  }
  .tour_artile h6{margin: 0;font-size: 18px;color: #444444; margin-bottom: 15px}
  .section{margin: 16px 0}
  .section p{text-indent: 2em;font-size: 14px;color: #222222;line-height: 30px;}
  .section img{
    width: 680px;
    height: 450px;
    margin: 30px auto;
  }
</style>
