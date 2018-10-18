<template>
  <div id="charmVR">
    <v-header v-bind:bactive="bactive" v-bind:bheader="bheader"></v-header>
    <div class="charmcontent">
      <img src="../../../static/images/meili_banner.png" alt="">

      <div class="charm_t">
        <div class="charm_title">
          <span><img class="triangle" src="../../../static/images/triangle.png" alt="">魅力泸沽湖</span>
          <p class="address">当前位置：首页>魅力泸沽湖><span>{{scenicDetails.title}}</span></p>
        </div>
        <div class="charm_des">
          <!--<video width="1157" height="639" :autoplay="playStatus" controls >-->
          <!--<source :src="imgSrc+ scenicDetails.videoUrl" type="video/mp4">-->
          <!--<object :data="imgSrc+ scenicDetails.videoUrl" width="1157" height="639">-->
          <!--<embed :src="imgSrc+ scenicDetails.videoUrl" width="1157" height="639">-->
          <!--</object>-->
          <!--</video>-->
          <video id="myvideo" :src="imgSrc+ scenicDetails.videoUrl" :autoplay="playStatus" width="1157" height="639" controls>
            your browser does not support the video tag
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
        scenicDetails: '',
        imgSrc: '',
        playStatus:true
      }
    },
    created: function () {
      var vrID = this.$route.query.id;
      this.imgSrc = this.config.imgsrc;
      this.axios.get(this.config.charm.getVideoById, {
        params: {
          id: vrID
        }
      }).then((response) => {
        console.log(response.data.data);
        this.scenicDetails = response.data.data;

      }).catch(function (error) {
        console.log(error);
      });
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
    height: 795px;
    background: rgba(255, 255, 255, 0.6);
    filter: blur();
    margin: 0 auto;
    margin-top: -237px;
    padding: 0 27px;
  }

  .charm_title {
    border-bottom: 1px solid #fff;
    height: 44px;
    padding-top: 10px;
    width: 100%;
  }

  img.triangle {
    width: 7px;
    height: 12px;
    vertical-align: inherit;
    display: inline;
    margin-right: 14px;
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

  .charm_des {
    padding-top: 40px;
    overflow: hidden;
    width: 1157px;
    height: 639px;
  }

  video {
    background-size: cover;
  }
</style>
