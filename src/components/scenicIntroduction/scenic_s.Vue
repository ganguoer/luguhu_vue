<template>
  <div class="scenic_s">
    <v-header v-bind:bactive="bactive" v-bind:bheader="bheader"></v-header>
    <div class="tours_con">
      <img src="../../../static/images/scenic_banner.png" alt="">

      <div class="charm_t">
        <div class="charm_title">
          <span>格姆女神山</span>
          <p class="address">当前位置：首页>景区介绍><span>景区详情</span></p>
        </div>

        <div class="tour_artile">
          <h6>格姆女神山  <img src="../../../static/images/VR.png" alt=""> <a href="#">VR全景</a></h6>
          <div class="section">
            <p>格姆女神山也叫狮子山，海拔3770米，是泸沽湖四周最高的山峰。狮子摩梭语称“格姆”，藏语称“森格格姆”，“森格”意为狮子，“格姆”意为白色女神，在摩梭族传说中是格姆女神的化身。</p>
            <p>泸沽湖格姆女神山旅游，从山下的尼塞村格姆女神山风景区门口，乘坐索道上山，游览格姆女神洞。摩梭人把格姆山神化，看作是女性的化身，顶礼膜拜，每年的农历七月二十五日，全民祭祀女神，作为隆重的节日，已有一千多年的历史。</p>
          </div>
          <div class="section">
            <img src="../../../static/images/tourism_s1.png" alt="">
          </div>
          <div class="section">
            <p>泸沽湖旅游除了游览高原明珠这个大湖之外，首推格姆女神山，丽江金沙旅游的泸沽湖旅游线路也包含了格姆女神山游览。泸沽湖地区属于汉族、藏族、纳西族摩梭人、彝族都多民族聚居地。</p>
            <p>格姆女神山南高北低，灰白色调鲜明，但当植被覆盖时，又显出绿色，同名主峰海拔3754米，高出湖面1000米左右，所以是很高的一座山。</p>
            <p>格姆女神山千年来都为泸沽湖的当地人所膜拜，只到最近几年才为旅游开发，泸沽湖格姆女神山已经成为泸沽湖旅游的一大亮点。</p>
            <p>格姆女神山千年来都为泸沽湖的当地人所膜拜，只到最近几年才为旅游开发，泸沽湖格姆女神山已经成为泸沽湖旅游的一大亮点。</p>
            <p>格姆女神洞位于狮子山脖子处，海拔3450米。洞口面向泸沽湖，站在洞口观景台上，从另一个方向上再次用广阔的视觉把泸沽湖框到心中。进入山洞，在幽暗的彩色灯光映照下，石钟乳显得光怪陆离。格姆女神的真实容颜就在攀爬过几级台阶后出现在眼前，女神活在摩梭人心中，却也形象地存在于洞内。这一刻女神形象已经更深刻地铭刻在了每一个虔诚的人的脚步里。</p>
            <p>女神洞口有一些山民供奉的供品。进石洞必须要过三关。那洞口是由很窄小的石缝缝组成，仅够一人匍匐进入，仿佛是把着门阻止不合格的草民的进入。石洞竟如此之大，至少可容纳几千人，几尊由石体天然的“女神”安然端坐，其旁任何一点岩石上突起，哪怕是一指小阶，都端坐着一位“女神”。</p>
            <p>从山上可以俯视泸沽湖全貌，形状各异的里戈岛、蛇岛一览无余，尼塞村、小落水村、大嘴村分布有致，远处山峦重重叠叠，薄雾缭绕，似披着云雾作彩衣，尽展婀娜动人的风姿。</p>
            <p>地址：云南省丽江市宁蒗县泸沽湖狮子山</p>
            <p>费用：尼赛村乘坐狮子山索道 90 元 / 人（含门票、索道、滑道） 2 元（保险）</p>
            <p>到达交通：徒步或坐环湖观光车前往，上山需要在尼赛村乘坐索道</p>
            <p>用时参考：1-2 小时</p>

          </div>
          <div class="section">
            <img src="../../../static/images/tourism_s1.png" alt="">
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
    name: 'scenic_s',
    data () {
      return {
        bactive: 3,
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
  .tour_artile h6 img{
    width: 38px;
    height: 18px;
    display: inline;
    padding-left: 60px;
    padding-top: 4px;
  }
  .tour_artile h6 a{font-size: 16px;color: #423ef5;text-decoration: underline; font-weight: 400;}
  .section{margin: 16px 0}
  .section p{text-indent: 2em;font-size: 14px;color: #222222;line-height: 30px;}
  .section img{
    width: 680px;
    height: 450px;
    margin: 30px auto;
  }
</style>
