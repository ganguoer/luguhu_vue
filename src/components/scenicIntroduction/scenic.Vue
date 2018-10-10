<template>
<div class="scenic">
  <v-header v-bind:bactive="bactive" v-bind:bheader="bheader"></v-header>
  <div class="tours_con">
    <img src="../../../static/images/scenic_banner.png" alt="">

    <div class="charm_t">
      <div class="charm_title">
        <span><img class="triangle" src="../../../static/images/triangle.png" alt="">景区介绍</span>
        <p class="address">当前位置：首页><span>景区介绍</span></p>
      </div>

      <div class="eatList">
        <ul class="clearfix">
          <li>
            <router-link to="/scenic_s">
              <div class="list">
                <img src="../../../static/images/tourism_s1.png" alt="">
                <p class="img_detail">格姆女神山</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/scenic_s">
              <div class="list">
                <img src="../../../static/images/tourism_s1.png" alt="">
                <p class="img_detail">格姆女神山</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/scenic_s">
              <div class="list">
                <img src="../../../static/images/tourism_s1.png" alt="">
                <p class="img_detail">格姆女神山</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/scenic_s">
              <div class="list">
                <img src="../../../static/images/tourism_s1.png" alt="">
                <p class="img_detail">格姆女神山</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/scenic_s">
              <div class="list">
                <img src="../../../static/images/tourism_s1.png" alt="">
                <p class="img_detail">格姆女神山</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/scenic_s">
              <div class="list">
                <img src="../../../static/images/tourism_s1.png" alt="">
                <p class="img_detail">格姆女神山</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/scenic_s">
              <div class="list">
                <img src="../../../static/images/tourism_s1.png" alt="">
                <p class="img_detail">格姆女神山</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/scenic_s">
              <div class="list">
                <img src="../../../static/images/tourism_s1.png" alt="">
                <p class="img_detail">格姆女神山</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/scenic_s">
              <div class="list">
                <img src="../../../static/images/tourism_s1.png" alt="">
                <p class="img_detail">格姆女神山</p>
              </div>
            </router-link>
          </li>
        </ul>
        <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
      </div>
    </div>
  </div>

  <v-footer></v-footer>
</div>

</template>

<script>
  import header from '@/components/common/header'
  import footer from '@/components/common/footer'
  import pagination from '@/components/common/pagination'
    export default {
        name: 'scenic',
        data () {
            return {
              bactive: 3,
              bheader: 1,
              total: 150,     // 记录总条数
              display: 9,   // 每页显示条数
              current: 1,   // 当前的页数
            }
        },
      components: {
        'v-header': header,
        'v-footer': footer,
        'v-pagination': pagination
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
  img.triangle{width: 7px;height: 12px;vertical-align: inherit;display: inline;margin-right: 14px;}
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

  .eatList{ padding: 30px 0px 64px;}
  .eatList ul li{
    float: left;
    width: 360px;
    margin-right: 22px;
    margin-bottom: 22px;
    border: 5px solid #ffd200;
    overflow: hidden;
    box-shadow: -5px 5px 10px #888888;
  }
  .eatList ul li:nth-child(3n){margin-right: 0}
  .eatList ul li a{display: block;width: 100%}
  .eatList ul li .list img{display: block;width: 100%;height: 228px;}
  .eatList ul li .list{position: relative;}
  .eatList ul li .list .img_detail{position: absolute;bottom: 0;left: 0;width:100%; height: 36px;line-height: 36px;font-size: 14px;color: #fff;background: rgba(0,0,0,0.38);text-align: center;}

</style>
