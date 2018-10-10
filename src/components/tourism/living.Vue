<template>
  <div class="living">
    <v-header v-bind:bactive="bactive" v-bind:bheader="bheader"></v-header>
    <div class="tours_con">
      <img src="../../../static/images/t_banner1.png" alt="">

      <div class="charm_t">
        <div class="charm_title">
          <span><img class="triangle" src="../../../static/images/triangle.png" alt="">住在泸沽湖</span>
          <p class="address">当前位置：首页>旅游攻略><span>住在泸沽湖</span></p>
        </div>

        <div class="liveList">
          <ul class="clearfix">
            <li>
              <router-link to="/living_s">
                <div class="list clearfix">
                  <img src="../../../static/images/live1.png" alt="">
                  <div class="listr">
                     <p class="title">泸沽湖云上度假酒店 </p>
                    <p class="detail">  泸沽湖云上度假酒店位于美丽的泸沽湖，坐北朝南，依山而建。专业的设计团队打造的5层楼24间海景房，让看风景成为享受。酒店设有：一楼超大园林景观，三楼水景露台，四楼休息区，五楼天台休闲区，800平方的地下停车场。1:1的绿化配比让您的假期更好得到放松。</p>
                    <p>地址：盐源 泸沽湖达祖村扎日落 ，泸沽湖旁</p>
                    <p>电话：0834-3335555</p>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/living_s">
                <div class="list clearfix">
                  <img src="../../../static/images/live1.png" alt="">
                  <div class="listr">
                     <p class="title">泸沽湖云上度假酒店 </p>
                    <p class="detail">  泸沽湖云上度假酒店位于美丽的泸沽湖，坐北朝南，依山而建。专业的设计团队打造的5层楼24间海景房，让看风景成为享受。酒店设有：一楼超大园林景观，三楼水景露台，四楼休息区，五楼天台休闲区，800平方的地下停车场。1:1的绿化配比让您的假期更好得到放松。</p>
                    <p>地址：盐源 泸沽湖达祖村扎日落 ，泸沽湖旁</p>
                    <p>电话：0834-3335555</p>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/living_s">
                <div class="list clearfix">
                  <img src="../../../static/images/live1.png" alt="">
                  <div class="listr">
                     <p class="title">泸沽湖云上度假酒店 </p>
                    <p class="detail">  泸沽湖云上度假酒店位于美丽的泸沽湖，坐北朝南，依山而建。专业的设计团队打造的5层楼24间海景房，让看风景成为享受。酒店设有：一楼超大园林景观，三楼水景露台，四楼休息区，五楼天台休闲区，800平方的地下停车场。1:1的绿化配比让您的假期更好得到放松。</p>
                    <p>地址：盐源 泸沽湖达祖村扎日落 ，泸沽湖旁</p>
                    <p>电话：0834-3335555</p>
                  </div>
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
    name: 'living',
    data () {
      return {
        bactive: 5,
        bheader: 1,
        total: 150,     // 记录总条数
        display: 9,   // 每页显示条数
        current: 1,   // 当前的页数
      }
    },
    methods: {
      pagechange:function(currentPage){
        console.log(currentPage);
        // ajax请求, 向后台发送 currentPage, 来获取对应的数据
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

  .liveList{ padding: 40px 0px 64px;}
  .liveList ul li{

  }
  .liveList ul li a{display: block;width: 100%}
  .liveList ul li{margin-bottom: 45px;}
  .liveList ul li .list img{float: left; width: 455px;height:293px;}
  .liveList ul li .list .listr{margin-left: 490px;}
  .liveList ul li .list .listr p{line-height: 30px; font-size: 14px;color: #222;}
  .liveList ul li .list .listr .title{font-size: 18px;color: #222;}
  .liveList ul li .list .listr .detail{text-indent: 2em;padding: 24px 0 36px;}
</style>
