<template>
  <div class="scenic_s">
    <v-header v-bind:bactive="bactive" v-bind:bheader="bheader"></v-header>
    <div class="tours_con">
      <img src="../../../static/images/scenic_banner.png" alt="">

      <div class="charm_t">
        <div class="charm_title">
          <span>{{scenicDetails.title}}</span>
          <p class="address">当前位置：首页>景区介绍><span>景区详情</span></p>
        </div>

        <div class="tour_artile">
          <h6>{{scenicDetails.title}}  </h6>
          <!--<img src="../../../static/images/VR.png" alt=""> <a href="#">VR全景</a>-->
          <div class="section" v-html="scenicDetails.content">

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
        bheader: 1,
        scenicDetails:''
      }
    },
    created: function() {
      var newsID=this.$route.query.id;
      this.axios.get(this.config.info.getArticalById,{
        params:{
          id:newsID
        }
      }).then((response) => {
        console.log(response.data.data);
        this.scenicDetails =response.data.data;

      }).catch(function(error) {
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
  >>>p img{
       width: 680px;
       height: 450px;
       margin: 30px auto;
       margin-left: 200px;
     }
</style>
