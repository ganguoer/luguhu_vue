<template>
    <div>
      <div class="clearfix newslist">
        <span class="lf tit">景区动态</span>
        <span class="rf location_current">当前位置：首页><em>景区动态</em></span>
      </div>
      <ul class="listnews">
        <li class="clearfix">
          <div class="lf img_lfs"><img src="../../../static/images/zxs_09.png"></div>
          <div class="lf right_cont">
            <p class="bigtit">泸沽湖环境综合整治让“高原明珠”再放光彩</p>
            <p class="moredetail">被称为“高原明珠”的泸沽湖地处云南省宁蒗县与四川省盐源县交界处，是国家４Ａ级风景区。今年53岁的李尚林是云南丽江泸沽湖省级旅游区管理委员... <router-link to="" class="mores">[详情]</router-link></p>
            <p class="clearfix details_txt"><span class="lf">来源：泸沽湖资讯网</span><span class="lf times">2018-07-31   09:30:11</span></p>
          </div>
        </li>
        <li class="clearfix">
          <div class="lf img_lfs"><img src="../../../static/images/zxs_05.png"></div>
          <div class="lf right_cont">
            <p class="bigtit">丽江泸沽湖签约中智游打造智慧景区标杆</p>
            <p class="moredetail">近日，丽江泸沽湖旅游开发有限公司基于云南省政府“一部手机游云南”项目要求和自身管理服务需求，开展“云南泸沽湖景区智慧旅游建设项目”公开招标工作... <router-link to="" class="mores">[详情]</router-link></p>
            <p class="clearfix details_txt"><span class="lf">来源：泸沽湖资讯网</span><span class="lf times">2018-07-31   09:30:11</span></p>
          </div>
        </li>
        <li class="clearfix">
          <div class="lf img_lfs"><img src="../../../static/images/zxs_03.png"></div>
          <div class="lf right_cont">
            <p class="bigtit">四川凉山目标:年底泸沽湖确保成功创建国家5A景区</p>
            <p class="moredetail">近日，四川凉山州召开A级景区创建工作会议，总结全州景区创建工作，安排部署创建目标任务。会议明确创建目标：今年年底，泸沽湖确保成功创建国家5A级旅游景区... <router-link to="" class="mores">[详情]</router-link></p>
            <p class="clearfix details_txt"><span class="lf">来源：泸沽湖资讯网</span><span class="lf times">2018-07-31   09:30:11</span></p>
          </div>
        </li>
        <li class="clearfix">
          <div class="lf img_lfs"><img src="../../../static/images/travellist1.png"></div>
          <div class="lf right_cont">
            <p class="bigtit">泸沽湖景区川滇联席会议召开 共商开发管理与保护</p>
            <p class="moredetail">为进一步加强联系、增进了解、推动协作，共商泸沽湖开发管理与保护事宜。日前，泸沽湖景区川滇联席会议召开。会上，四川省凉山州摩梭家园暨泸沽湖旅游景区管理局与云南...  <router-link to="" class="mores">[详情]</router-link></p>
            <p class="clearfix details_txt"><span class="lf">来源：泸沽湖资讯网</span><span class="lf times">2018-07-31   09:30:11</span></p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {}
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
