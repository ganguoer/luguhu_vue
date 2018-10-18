<template>
    <div>
      <div class="clearfix newslist">
        <span class="lf tit">图片资讯</span>
        <span class="rf location_current">当前位置：首页><em>图片资讯</em></span>
      </div>
      <ul class="piclist clearfix">
          <li v-for="(item,index) in imgNews" :key="index">
            <router-link  :to="{path:'/newsdetail',query:{ id:item.id}}" >
              <img :src="imgSrc+ item.images">
              <p>{{item.title}}</p>
            </router-link>
          </li>
      </ul>
      <v-pagination :total="total" :display="display" :current-page='current' @pagechange="pagechange"></v-pagination>

    </div>
</template>

<script>
  import pagination from '@/components/common/pagination'
  export default {
    name: '',
    data () {
      return {
        total: 0,     // 记录总条数
        display: 9,   // 每页显示条数
        current: 1,   // 当前的页数
        imgNews:[],
        imgSrc:''
      }
    },
    mounted(){
        this.getImgnews();
    },
    methods: {
      pagechange:function(currentPage){
        console.log(currentPage);
        // ajax请求, 向后台发送 currentPage, 来获取对应的数据
        this.current = currentPage;
        this.getImgnews();
      },

      getImgnews(){
        var that=this;
        that.imgSrc =that.config.imgsrc;
        that.axios.get(that.config.info.getArtical,{
          params : {   //请求参数
            type:109,
            size:9,
            page:that.current
          }
        })
          .then(function (response){
            console.log(response.data.data);
            that.total = response.data.data.num;
            that.imgNews=response.data.data.article;

          })
      }
    },
    components: {
      'v-pagination': pagination
    }
  }

</script>

<style scoped>
.newslist{margin-top: 10px;height: 44px;line-height: 44px;border-bottom: solid 1px #dcdcdc}
.newslist .tit{border-bottom: solid 2px #ffd200;padding: 0 15px 0 10px;height: 42px}
.newslist .location_current em{font-style: normal;color: #1182e3}
.piclist{margin-top: 30px;}
.piclist li{position: relative; width: 285px;height: 210px;overflow: hidden;margin-right: 23px;float: left; margin-bottom: 18px}
.piclist li:nth-child(3n){margin-right: 0}
.piclist li img{width: 100%;height: 100%}
.piclist li p{background: rgba(255,210,0,.8);height: 33px;line-height: 33px; text-align: center;color: #222;position: absolute;bottom: 0;left: 0;width: 100%; text-align: center}
</style>
