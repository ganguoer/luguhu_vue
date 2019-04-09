<template>
  <div slot='select01'>
    <ul class="list_imgs clearfix" >
      <li v-for="(item,index) in transportList" :key="index" >
        <router-link :to="{path:'/line_s',query:{ id:item.id}}">
        <div class="imgs">
          <img :src="imgSrc+ item.images ">

        </div>
        <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'tabTransport',
    data(){
      return{
        transportList:[]
      }
    },
    mounted(){
      this.getTransport();
    },
    methods: {
      getTransport(){
        var that=this;
        that.imgSrc =that.config.imgsrc;
        that.axios.get(that.config.info.getArtical,{
          params : {   //请求参数
            type: 110,
            size:4,
            page:1
          }
        })
          .then(function (response){
            console.log(response.data.data)
            that.transportList=response.data.data.article;
          })
      }
    }
  }
</script>

<style scoped>
  .list_imgs li{float: left;width: 284px;margin-right: 11px}
  .list_imgs li:last-child{margin-right: 0}
  .list_imgs .imgs{width: 284px;height: 205px;box-shadow:2px 2px 10px #888888; overflow: hidden;position: relative;}
  .list_imgs .imgs img{width: 100%;height: 100%;}
  .list_imgs p{text-align: center;color: #1182e3;font-size: 16px;padding-top: 18px;}
  .list_imgs{margin-top: 38px;}
</style>
