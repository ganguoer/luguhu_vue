<template>
    <div>
      <div class="clearfix newslist">
        <span class="lf tit">图片资讯</span>
        <span class="rf location_current">当前位置：首页><em>图片资讯</em></span>
      </div>
      <ul class="piclist clearfix">
          <li>
              <img src="../../../static/images/zxs_16.png">
              <p>里格半岛</p>
          </li>
          <li>
              <img src="../../../static/images/charmvideo.png">
              <p>格姆女神山</p>
          </li>
          <li>
              <img src="../../../static/images/index_23.png">
              <p>里务比岛</p>
          </li>
          <li>
              <img src="../../../static/images/index_26.png">
              <p>泸沽湖观景台</p>
          </li>
          <li>
              <img src="../../../static/images/index_28.jpg">
              <p>大落水村</p>
          </li>
          <li>
              <img src="../../../static/images/charm1.png">
              <p>里格半岛</p>
          </li>
          <li>
              <img src="../../../static/images/zxs_19.png">
              <p>格姆女神山</p>
          </li>
          <li>
              <img src="../../../static/images/zxs_21.png">
              <p>里务比岛</p>
          </li>
          <li>
              <img src="../../../static/images/zxs_23.jpg">
              <p>泸沽湖观景台</p>
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
.piclist{margin-top: 30px;}
.piclist li{position: relative; width: 285px;height: 210px;overflow: hidden;margin-right: 23px;float: left; margin-bottom: 18px}
.piclist li:nth-child(3n){margin-right: 0}
.piclist li img{width: 100%;height: 100%}
.piclist li p{background: rgba(255,210,0,.8);height: 33px;line-height: 33px; text-align: center;color: #222;position: absolute;bottom: 0;left: 0;width: 100%; text-align: center}
</style>
