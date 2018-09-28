<template>
  <div id="charm">
    <v-header></v-header>

    <div class="charmcontent">
      <img src="../../../static/images/meili_banner.png" alt="">

      <div class="charm_t">
        <div class="charm_title">
          <span><img class="triangle" src="../../../static/images/triangle.png" alt="">魅力泸沽湖</span>
          <p class="address">当前位置：首页><span>魅力泸沽湖</span></p>
        </div>
        <div class="charm_des">
          <img src="../../../static/images/charm1.png" alt="">
          <div class="description">
            <h6>魅力泸沽湖 /Charming lugu lake</h6>
            <p>
              泸沽湖古称鲁窟海子，又名左所海，俗称亮海。纳西族摩梭语“泸”为山沟，“沽”为里，意即山沟里的湖。泸沽湖旅游景区四周崇山峻岭，一年有三个月以上的积雪期。森林资源丰富，山清水秀，空气清新，景色迷人，泸沽湖被当地摩梭人奉为“母亲湖”。也被人们誉为“蓬莱仙境”。身临其境，水天一色，水平如镜，缓缓滑行于碧波之上的猪槽船和徐徐漂浮于水天之间的摩梭民歌，使其更增添几分古朴，几分宁静，是一个远离嚣市、未被污染的处女湖，有高原明珠的美誉。每逢晴天，蓝天白云，倒映湖中，水天一色，景象奇丽。它犹如一块明珠镶嵌在群山怀抱之中，碧波荡漾，风光迷人，有“高原明珠”、“滇西北的一片净土”、“东方第一奇景”等美称。这里古朴的民风，秀丽的山光水色与浓郁的传奇风情，充满了神秘的色彩。</p>
          </div>
        </div>
      </div>

      <div class="charm_list">
        <ul class="clearfix">
          <li><img src="../../../static/images/shexiang1.png" alt=""></li>
          <li class="bg1">
            <router-link to='charmVR'>
              <img class="shex" src="../../../static/images/shexiang.png" alt="">
              <p class="s_title">泸沽湖风景区VR全景</p>
              <p class="s_eng">Lugu lake scenic area VR panorama</p>
            </router-link>
          </li>
          <li><img src="../../../static/images/shexiang2.png" alt=""></li>
          <li class="bg2">
            <router-link to='charmVR'>
              <img class="shex" src="../../../static/images/shexiang.png" alt="">
              <p class="s_title">大落水村VR全景</p>
              <p class="s_eng">Daluoshui Village VR Panorama</p>
            </router-link>
          </li>
          <li class="bg3">
            <router-link to='charmVR'>
              <img class="shex" src="../../../static/images/shexiang.png" alt="">
              <p class="s_title">祭神台VR全景</p>
              <p class="s_eng">Festival of God VR Panorama</p>
            </router-link>
          </li>
          <li>
            <img src="../../../static/images/shexiang3.png" alt="">
          </li>
          <li class="ex ">
            <img class="ex" src="../../../static/images/shexiang4.png" alt="">
            <p class="exp">摩梭民俗博物馆VR全景</p>
          </li>
          <li><img src="../../../static/images/shexiang5.png" alt=""></li>
          <li class="bg4">
            <router-link to='charmVR'>
              <img class="shex" src="../../../static/images/shexiang.png" alt="">
              <p class="s_title">里务比寺VR全景</p>
              <p class="s_eng">Philippine Temple VR Panorama</p>
            </router-link>
          </li>
          <li class="ex">
            <img class="ex" src="../../../static/images/shexiang6.png" alt="">
            <div class="mode">
              <router-link to="index">查看更多</router-link>
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
    name: 'charm',
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
  .charmcontent {
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
    height: 434px;
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

  .charm_des {
    padding-top: 40px;
  }

  .charm_des img {
    width: 455px;
    height: 293px;
    float: left;
  }

  .description {
    margin-left: 485px;
    text-align: left;
    color: #222222;
  }

  .description h6 {
    margin: 0;
    line-height: 45px;
    font-size: 18px;
    font-weight: 400;
  }

  .description p {
    font-size: 14px;
    text-indent: 2em;
    line-height: 30px;
  }

  .charm_list {
    width: 1212px;
    height: 912px;
    margin: 63px auto 0px;
    text-align: center;
  }

  .charm_list ul li {
    float: left;
    width: 303px;
    height: 303px;
  }

  .charm_list ul li a {
    display: block;
    height: 303px;
  }

  .charm_list ul li > img {
    width: 303px;
    height: 303px;
  }

  img.shex {
    width: 78px;
    height: 55px;
    margin: 0 auto;
    margin-top: 75px;
  }

  .s_title {
    font-size: 18px;
    color: #fff;
    line-height: 54px;
  }

  .s_eng {
    font-size: 14px;
    color: #fff;
    line-height: 20px;
  }

  .charm_list ul .ex {
    width: 606px;
    position: relative;
  }

  .charm_list ul .exp {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 47px;
    line-height: 47px;
    background: rgba(0, 0, 0, 0.45);
    font-size: 18px;
    color: #fff;
  }

  .charm_list ul .mode {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.41);

  }

  .charm_list ul .mode a {
    font-size: 18px;
    color: #ffd200;
    text-decoration: underline;
    display: block;
    height: 100%;
    padding-top: 136px;
  }

  .bg1 {
    background-color: #5dc241;
  }

  .bg2 {
    background-color: #46b4de;
  }

  .bg3 {
    background-color: #e9c13d;
  }

  .bg4 {
    background-color: #7563ff;
  }
</style>
