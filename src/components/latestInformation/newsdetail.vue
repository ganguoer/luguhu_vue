<template>
    <div>
      <div class="clearfix newslist">
        <span class="lf tit">{{newdetails.columnname}}</span>
        <span class="rf location_current">当前位置：首页><em>{{newdetails.columnname}}</em></span> ·
      </div>
      <p class="titmanage">{{newdetails.title}}</p>
      <p class="detail">时间：{{newdetails.creatTime}}  来源：{{newdetails.origin}}  作者：{{newdetails.author}}</p>
      <div v-html=" newdetails.content">

      </div>

    </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        newdetails:''
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
        this.newdetails =response.data.data;
      }).catch(function(error) {
        console.log(error);
      });
    }
  }

</script>

<style scoped>
.newslist{margin-top: 10px;height: 44px;line-height: 44px;border-bottom: solid 1px #dcdcdc}
.newslist .tit{border-bottom: solid 2px #ffd200;padding: 0 15px 0 10px;height: 42px}
.newslist .location_current em{font-style: normal;color: #1182e3}
.titmanage{font-size: 16px;color: #222; text-align: center;padding: 30px 0 15px 0;}
.detail{color: #666;text-align: center;padding-bottom: 15px}
p{line-height: 28px;text-indent: 2rem}
</style>
