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
            <li v-for="(item,index) in livings" :key="index">
              <router-link :to="{path:'/living_s',query:{ id:item.id}}" >
                <div class="list clearfix">
                  <img :src="imgSrc+ item.imgUrl " alt="">
                  <div class="listr">
                     <p class="title">{{item.hotelName}} </p>
                    <p class="detail"> {{item.hotelDetail}}</p>
                    <p>{{item.address}}</p>
                    <p>电话：{{item.phone}}</p>
                  </div>
                </div>
              </router-link>
            </li>

          </ul>

          <v-pagination :total="total" :display="display" :current-page='current' @pagechange="pagechange"></v-pagination>
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
        total: 0,     // 记录总条数
        display: 9,   // 每页显示条数
        current: 1,   // 当前的页数
        livings:[],
        imgSrc:''
      }
    },
    mounted(){
      this.getLiving();
    },
    methods: {
      pagechange:function(currentPage){
        console.log(currentPage);
        // ajax请求, 向后台发送 currentPage, 来获取对应的数据
        this.current = currentPage;
        this.getLiving();
      },
      getLiving(){
        var that=this;
        that.imgSrc =that.config.imgsrc;
        that.axios.get(that.config.tourism.getHotel,{
          params : {   //请求参数
            size:9,
            page:that.current
          }
        })
          .then(function (response){
            console.log(response.data.data)
            that.total = response.data.data.num;
            console.log(that.total);
            that.livings=response.data.data.hotel;
          })
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
