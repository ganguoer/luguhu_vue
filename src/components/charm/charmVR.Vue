<template>
  <div id="charmVR">
    <v-header v-bind:bactive="bactive" v-bind:bheader="bheader"></v-header>
    <div class="charmcontent">
      <img src="../../../static/images/meili_banner.png" alt="">

      <div class="charm_t">
        <div class="charm_title">
          <span><img class="triangle" src="../../../static/images/triangle.png" alt="">魅力泸沽湖</span>
          <p class="address">当前位置：首页>魅力泸沽湖><span>泸沽湖风景区VR全景</span></p>
        </div>
        <div class="charm_des">
          <video width="1157" height="639" controls poster="../../../static/images/charmvideo.png">
            <source src="../../../static/video/sintel.mp4" type="video/mp4">
            <object data="../../../static/video/sintel.mp4" width="1157" height="639">
              <embed src="../../../static/video/sintel.swf" width="1157" height="639">
            </object>
          </video>

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
    name: 'charmVR',
    data () {
      return {
        bactive: 4,
        bheader: 1,
      }
    },
    components: {
      'v-header':header,
      'v-footer':footer
    }
  }

</script>

<style scoped>
.charmcontent{
  width: 100%;
  position: relative;
  z-index: 1;
  background: linear-gradient(#045ebc,#7ebfe9);
  width: 100%;
  padding-bottom: 104px;
}
.charmcontent img{width: 100%; height: 588px;display: block;}
  .charm_t{
    width: 1156px;
    height: 795px;
    background: rgba(255,255,255,0.6);
    filter: blur();
    margin: 0 auto;
    margin-top: -237px;
    padding:  0 27px;
  }
.charm_title{
  border-bottom: 1px solid #fff;
  height: 44px;
  padding-top: 10px;
  width: 100%;
}
img.triangle{width: 7px;height: 12px;vertical-align: inherit;display: inline;margin-right: 14px;}
.charm_title>span{
  float: left;
  color: #444444;
  font-size: 14px;
  line-height: 44px;
  border-bottom: 2px solid #1182e3;
  padding: 0 10px;
}
.address{
  color: #666666;
  font-size: 14px;
  float: right;
  line-height: 44px;
  padding-right: 10px;
}
.address>span{
  color: #1182e3;
  font-size: 14px;
}
.charm_des{
  padding-top: 40px;
  overflow: hidden;
  width: 1157px;
  height: 639px;
}
  video{
    background-size: cover;
  }
</style>
