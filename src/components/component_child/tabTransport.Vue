<template>
  <div slot='select01'>
    <ul class="list_imgs clearfix" >
      <li v-for="(item,index) in hotelList" :key="index" >
        <div class="imgs">
          <img :src="imgSrc+ item.imgUrl ">
          <router-link :to="{path:'/living_s',query:{ id:item.id}}" class="modetails">查看详情</router-link>
        </div>
        <p>{{item.hotelName}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'tabTransport',
    data(){
      return{
        hotelList:[]
      }
    },
    mounted(){
      this.hotelLists();
    },
    methods: {
      hotelLists(){
        var that=this;
        that.imgSrc =that.config.imgsrc;
        that.axios.get(that.config.tourism.getHotel,{
          params : {   //请求参数
            size:4,
            page:1
          }
        })
          .then(function (response){
            console.log(response.data.data)
            that.hotelList=response.data.data.hotel;
          })
      },
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
