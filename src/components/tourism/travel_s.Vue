<template>
  <div class="travel_s">
    <v-header v-bind:bactive="bactive" v-bind:bheader="bheader"></v-header>
    <div class="tours_con">
      <img src="../../../static/images/t_banner1.png" alt="">

      <div class="charm_t">
        <div class="charm_title clearfix">
          <span> <img class="triangle" src="../../../static/images/triangle.png" alt="">{{travelDetails.columnname}}</span>
          <p class="address">当前位置：首页>旅游攻略><span>{{travelDetails.columnname}}</span></p>
        </div>

        <div class="tour_artile" >
          <div class="author">
            <img :src="imgSrc+ travelDetails.images " alt="">
            <span class="name">{{travelDetails.author}}</span>
            <span>{{travelDetails.creatTime}}</span>
            <img class="eye" src="../../../static/images/eye.png" alt="">
            <span >524</span>
            <span class="title">{{travelDetails.title}}</span>
          </div>
          <div class="section"  v-html="travelDetails.content">
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
    name: 'travel_s',
    data () {
      return {
        bactive: 5,
        bheader: 1,
        travelDetails:''
      }
    },
    created: function() {
      var travelID=this.$route.query.id;
      this.imgSrc =this.config.imgsrc;
      this.axios.get(this.config.info.getArticalById,{
        params:{
          id:travelID
        }
      }).then((response) => {
        console.log(response.data.data);
        this.travelDetails =response.data.data;
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
  .author{height: 58px;line-height: 58px;padding: 10px 0;
    border-bottom: 1px solid #666666;}
  .author img{width: 58px;height: 58px;border-radius: 50%;display: inline;vertical-align: bottom;}
  .author span{padding: 0 13px;font-size: 16px;color: #666666;}
  .author span.name{color: #1182e3;}
  .author img.eye{vertical-align: inherit;height: 12px;width: 19px;margin-right: -10px;}
  .author span.title{color: #222222;font-weight: 700;padding-left: 30px;}
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
