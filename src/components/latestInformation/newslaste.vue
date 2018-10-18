<template>
    <div>
      <div class="clearfix newslist">
        <span class="lf tit">最新资讯</span>
        <span class="rf location_current">当前位置：首页><em>最新资讯</em></span>
      </div>
      <ul class="listnews">
        <li class="clearfix" v-for="(item,index) in news" :key="index">
          <div class="lf img_lfs"><img :src="imgSrc+ item.images "></div>
          <div class="lf right_cont">
            <p class="bigtit">{{item.title}}</p>
            <p class="moredetail">{{item.content}} <router-link :to="{path:'/newsdetail',query:{ id:item.id}}" class="mores">[详情]</router-link></p>
            <p class="clearfix details_txt"><span class="lf">来源：{{item.origin}}</span><span class="lf times">{{item.creatTime}}</span></p>
          </div>
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
        display: 4,   // 每页显示条数
        current: 1,   // 当前的页数
        news:[],
        imgSrc:''
      }
    },
    mounted(){
      this.getNews();
    },
    methods: {
      pagechange:function(currentPage){
        console.log(currentPage);
        // ajax请求, 向后台发送 currentPage, 来获取对应的数据
        this.current = currentPage;
        this.getNews();
      },
      getNews(){
        var that=this;
        that.imgSrc=that.config.imgsrc;
        that.axios.get(that.config.info.getArtical,{
          params : {   //请求参数
            type: 101,
            size:4,
            page:that.current
          }
        })
          .then(function (response){
            console.log(response.data.data)
            that.total = response.data.data.num;
            console.log(that.total);
            that.news=response.data.data.article;
          })
      },
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
.listnews{margin-top: 15px;}
.listnews li{padding: 20px 0;border-bottom: solid 1px #dcdcdc}
.listnews li:last-child{border-bottom: none}
.listnews .img_lfs{width: 225px;height: 132px; overflow: hidden;}
.listnews .img_lfs img{width: 100%}
.listnews .right_cont{margin-left: 25px;width: 590px;}
.bigtit{font-size: 14px;color: #555;width: 550px;overflow: hidden;height: 20px;line-height: 20px;}
.moredetail{overflow: hidden;text-overflow: ellipsis;display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;width: 450px;color: #898989; padding-top: 10px}
.mores{color: #1182e3}
.details_txt{color:#aaa;margin-top: 25px}
.times{margin-left: 50px}
</style>
