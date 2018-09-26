<template>
    <div>
      <div class="clearfix newslist">
        <span class="lf tit">最新资讯</span>
        <span class="rf location_current">当前位置：首页><em>最新资讯</em></span>
      </div>
      <ul class="listnews">
        <li class="clearfix">
          <div class="lf img_lfs"><img src="../../../static/images/zxs_19.png"></div>
          <div class="lf right_cont">
            <p class="bigtit">丽江旅游拟投30亿在泸沽湖建摩梭旅游小镇</p>
            <p class="moredetail">丽江旅游一直希望将泸沽湖作为“第二主战场”。2012年，在泸沽湖投资建设牛开地片区度假村、里格精品度假村两个项目，总投资额预计14亿元... <router-link to="" class="mores">[详情]</router-link></p>
            <p class="clearfix details_txt"><span class="lf">来源：泸沽湖资讯网</span><span class="lf times">2018-07-31   09:30:11</span></p>
          </div>
        </li>
        <li class="clearfix">
          <div class="lf img_lfs"><img src="../../../static/images/zxs_21.png"></div>
          <div class="lf right_cont">
            <p class="bigtit">泸沽湖 将实行游客限流管控</p>
            <p class="moredetail">据《人民日报》报道，继丽江玉龙雪山每天游客量限制在1万人后，云南丽江市市长郑艺近日接受采访时透露，热门景区丽江古城、泸沽湖也将实行流量管控... <router-link to="" class="mores">[详情]</router-link></p>
            <p class="clearfix details_txt"><span class="lf">来源：泸沽湖资讯网</span><span class="lf times">2018-07-31   09:30:11</span></p>
          </div>
        </li>
        <li class="clearfix">
          <div class="lf img_lfs"><img src="../../../static/images/zxs_16.png"></div>
          <div class="lf right_cont">
            <p class="bigtit">滇川渝在泸沽湖景区开展旅游市场检查并签订三方两地旅游综合监管合作框架协议</p>
            <p class="moredetail">为贯彻落实党中央、国务院部署的“扫黑除恶”专项行动任务和国家文化和旅游部部署的暑期旅游市场秩序专项整治精神，进一步加强泸沽湖旅游市场综合监督管理... <router-link to="" class="mores">[详情]</router-link></p>
            <p class="clearfix details_txt"><span class="lf">来源：泸沽湖资讯网</span><span class="lf times">2018-07-31   09:30:11</span></p>
          </div>
        </li>
        <li class="clearfix">
          <div class="lf img_lfs"><img src="../../../static/images/zxs_09.png"></div>
          <div class="lf right_cont">
            <p class="bigtit">川滇两省达成框架协议 共同保护治理泸沽湖</p>
            <p class="moredetail">7月19日，川滇两省共同保护治理泸沽湖工作会议在成都举行。会上，四川和云南达成框架性合作协议，决定强化协作、协同启动相关保护治理行动，守护一湖清水...  <router-link to="" class="mores">[详情]</router-link></p>
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
