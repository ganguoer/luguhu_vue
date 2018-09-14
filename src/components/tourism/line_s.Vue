<template>
  <div class="line_s">
    <v-header></v-header>
    <div class="tours_con">
      <img src="../../../static/images/t_banner1.png" alt="">

      <div class="charm_t">
        <div class="charm_title">
          <span>线路游览</span>
          <p class="address">当前位置：首页>旅游攻略>><span>线路游览</span></p>
        </div>

        <div class="tour_artile">
          <h6>成都出发西昌泸沽湖自驾4日游 </h6>
          <h6>行程参考</h6>
          <div class="section">
            <p>第1天 ：成都—西昌（440km）</p>
            <p> 收拾好行李准备出发!早上到新津服务区集合，小队长分发对讲机、车贴，随后全军出击，经成雅、雅西高速前往石棉，到达石棉品尝当地特色农家菜，餐后出发前往西昌,入住酒店，晚餐。 </p>
          </div>
          <div class="section">
            <p>第2天：西昌—泸沽湖（270km） </p>
            <p>早餐后出发经盐源，前往风景美哭的女儿国—泸沽湖，到达泸沽湖后入住酒店，稍作休息，午餐后尽情享受泸沽湖的美丽风光，天水一色，随后进行晚餐，餐后可感受泸沽湖的夜晚。</p>
          </div>
          <div class="section">
            <p>第3天：泸沽湖—盐源（138KM） </p>
            <p>酒店morning call，早餐后，随后自行游览泸沽湖，在泸沽湖可租赁自行车、电动车环湖，也可开着自己的爱车游玩.午后出发前往盐源，随后入住酒店。</p>
          </div>
          <div class="section">
            <p>第4天：盐源—成都（550KM）</p>
            <p>酒店叫早，然后可以前往水果市场购买点当地特色水果，之后驾车边走边吃返回成都，结束愉快的自驾之旅。</p>
          </div>
          <div class="section">
            <img src="../../../static/images/strategy10.png" alt="">
          </div>
          <div class="section">
            <img src="../../../static/images/strategy11.png" alt="">
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
    name: 'line_s',
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
