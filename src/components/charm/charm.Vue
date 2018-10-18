<template>
  <div id="charm">
    <v-header v-bind:bactive="bactive" v-bind:bheader="bheader"></v-header>

    <div class="charmcontent">
      <img src="../../../static/images/meili_banner.png" alt="">

      <div class="charm_t">
        <div class="charm_title">
          <span><img class="triangle" src="../../../static/images/triangle.png" alt="">魅力泸沽湖</span>
          <p class="address">当前位置：首页><span>魅力泸沽湖</span></p>
        </div>
        <div class="charm_des">
          <img :src="imgSrc+ scenicIntro.imgUrl " alt="">
          <div class="description" v-html="scenicIntro.article_content">

          </div>
        </div>
      </div>

      <div class="charm_list">
        <ul class="clearfix">
          <li><img :src="imgSrc+scenicVR[0].imgUrl " alt=""></li>
          <li class="bg1">
            <router-link :to="{path:'/charmVR',query:{ id:scenicVR[0].id}}">
              <div class="mask_charm">
              <img class="shex" src="../../../static/images/shexiang.png" alt="">
              <p class="s_title">{{scenicVR[0].title}}</p>
              <p class="s_eng">{{scenicVR[0].remarks}}</p>
              </div>
            </router-link>
          </li>
          <li><img :src="imgSrc+scenicVR[1].imgUrl " alt=""></li>
          <li class="bg2">
            <router-link :to="{path:'/charmVR',query:{ id:scenicVR[1].id}}">
              <div class="mask_charm">
              <img class="shex" src="../../../static/images/shexiang.png" alt="">
              <p class="s_title">{{scenicVR[1].title}}</p>
              <p class="s_eng">{{scenicVR[1].remarks}}</p>
              </div>
            </router-link>
          </li>
          <li class="bg3">
            <router-link :to="{path:'/charmVR',query:{ id:scenicVR[2].id}}">
              <div class="mask_charm">
              <img class="shex" src="../../../static/images/shexiang.png" alt="">
              <p class="s_title">{{scenicVR[2].title}}</p>
              <p class="s_eng">{{scenicVR[2].remarks}}</p>
              </div>
            </router-link>
          </li>
          <li>
            <img :src="imgSrc+scenicVR[2].imgUrl "  alt="">
          </li>
          <li class="ex ">
            <router-link :to="{path:'/charmVR',query:{ id:scenicVR[3].id}}">
            <img class="ex" :src="imgSrc+scenicVR[3].imgUrl"  alt="">
            <p class="exp">{{scenicVR[3].title}}</p>
            </router-link>
          </li>
          <li><img :src="imgSrc+scenicVR[4].imgUrl" alt=""></li>
          <li class="bg4">
            <router-link :to="{path:'/charmVR',query:{ id:scenicVR[4].id}}">
              <div class="mask_charm">
              <img class="shex" src="../../../static/images/shexiang.png" alt="">
              <p class="s_title">{{scenicVR[4].title}}</p>
              <p class="s_eng">{{scenicVR[4].remarks}}</p>
              </div>
            </router-link>
          </li>
          <li class="ex">
            <img class="ex" src="../../../static/images/shexiang6.png" alt="">
            <div class="mode">
              <router-link to="/charmlist">查看更多</router-link>
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
      return {
        bactive: 4,
        bheader: 1,
        scenicIntro:{},
        scenicVR:{},
        imgSrc:''
      }
    },
    mounted(){
        this.getSceInfo();
        this.getVR();
    },
    methods:{
        getSceInfo(){
            var that=this;
          that.imgSrc =that.config.imgsrc;
          that.axios.get(that.config.charm.getScenicById,{
            params:{
              id:2
            }
          }).then((response) => {
            console.log(response.data.data);
            that.scenicIntro =response.data.data;

          }).catch(function(error) {
            console.log(error);
          });
        },
       getVR(){
            var self=this;
         self.axios.get(self.config.charm.getScenicVideo,{
          params:{
            page:1,
            size:10,
            id:2
          }
        }).then((response) => {
          console.log(response.data.data);
           self.scenicVR =response.data.data.scenicVideo;

        }).catch(function(error) {
          console.log(error);
        });
      }
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
    padding-top: 75px;
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
