<template>
  <div class="lastest_information">
    <v-header v-bind:bactive="bactive" v-bind:bheader="bheader"></v-header>
    <div class="slider_warp">
      <ul>
        <li>
          <img src="../../../static/images/zxs_03.png">
        </li>
        <li>
          <img src="../../../static/images/zxs_05.png">
        </li>
        <li>
          <img src="../../../static/images/zxs_07.png">
        </li>
        <li>
          <img src="../../../static/images/zxs_09.png">
        </li>
      </ul>
    </div>
    <div class="content_warp clearfix">
      <div class="lf lf_warp">
        <div class="newslast">
          <!-- <h3><router-link to="/newszixun" class="zixun">最新资讯</router-link></h3> -->
          <ul class="nav-second">
            <li class="on">
              <router-link class="inner" to="/newszixun">最新资讯</router-link>
            </li>
            <li>
              <router-link class="inner" to="/soptdeysmic">景区动态</router-link>
            </li>
            <li>
              <router-link class="inner" to="/picturenews">图片资讯</router-link>
            </li>
            <li>
              <router-link class="inner" to="/konwnperson">游客须知</router-link>
            </li>
          </ul>
        </div>
        <div class="hotzxun">
            <h3>热点资讯</h3>
            <ul class="zxnews">
              <li class="clearfix">
                <router-link to="/newsdetail"> 
                  <span class="lf">1</span>
                  <span class="lf textss">丽江古城和泸沽湖将限...</span>
                </router-link>
              </li>
              <li class="clearfix">
                <router-link to="/newsdetail">
                  <span class="lf">2</span>
                  <span class="lf textss">川滇两省达成框架协议 ...</span>
                </router-link>
              </li>
              <li class="clearfix">
                <router-link to="/newsdetail">
                  <span class="lf">3</span>
                  <span class="lf textss">盐源县高标准推进泸沽</span>
                </router-link>
              </li>
              <li class="clearfix">
                <router-link to="/newsdetail">
                  <span class="lf">4</span>
                  <span class="lf textss">高峰到泸沽湖景区调研...</span>
                </router-link>
              </li>
              <li class="clearfix">
                <router-link to="/newsdetail">
                  <span class="lf">5</span>
                  <span class="lf textss">泸沽湖返成都旅游客车...</span>
                </router-link>
              </li>
              <li class="clearfix">
                <router-link to="/newsdetail">
                  <span class="lf">6</span>
                  <span class="lf textss">段琪督察泸沽湖河(湖)...</span>
                </router-link>
              </li>
            </ul>
          </div>
      </div>
      <div class="lf lf_changecont">
        <router-view/>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from "@/components/common/header";
import footer from "@/components/common/footer";

export default {
  name: "charmVR",
  data() {
    return {
      bactive: 2,
      bheader: 1
    }
  },
  components: {
    "v-header": header,
    "v-footer": footer
	},
	mounted(){
    $(function(){
      $('.nav-second li').bind('click',function(){
        $('.nav-second li').removeClass('on')
        $(this).addClass('on');
      })
    })
	}
}
</script>
<style scoped>
.zixun{color: #fff}
.lf_changecont{width: 902px;margin:11px 0 0 26px}
.hotzxun{margin-top: 25px;width: 236px;margin-top: 27px;border-right: solid 1px #dcdcdc;border-top: solid 3px #1182e3; margin-left: 14px}
.nav-second li{height: 52px;line-height: 52px;font-size: 14px; color: #666;border-bottom: solid 1px #dcdcdc}
.nav-second .inner{padding-left:15px;display: block }
.nav-second .on{background: #1182e3;color: #fff;}
.nav-second .on .inner{color: #fff}
.zxnews li{height: 30px; line-height: 30px;margin-bottom: 15px;padding-left: 15px}
.zxnews .textss{margin-left: 8px;width: 160px;white-space: nowrap;text-overflow: ellipsis}
.nav-second li:last-child{border-bottom: none}
.newslast{width: 236px;border: solid 1px #dcdcdc;margin: 14px;}
.newslast h3, .hotzxun h3{color: #fff;font-size: 16px;height: 52px;line-height: 52px;background: #1182e3;padding-left: 15px;font-weight: normal}
.hotzxun h3{background: #fff;color: #1182e3}
.lf_warp{width: 265px;border-right: solid 1px #dcdcdc; background: #edf2f6}
.content_warp{width: 1220px;margin: 0 auto;border: solid 1px #dcdcdc;margin-top: 10px; margin-bottom: 30px}
.slider_warp ul li{width: 258px;height: 179px;border:solid 3px #fff; margin-right: 18px; float: left;}
.slider_warp ul li:last-child{margin-right: 0}
.slider_warp{width: 1220px;height: 216px;border-top: solid 6px #ffd200;margin: 0 auto; margin-top: 350px;background: #a7cdeb;}
.slider_warp ul{height: 184px;width: 1110px;overflow: hidden; margin-top: 13px; margin-left: 55px;}
.lastest_information {
  background: url(../../../static/images/zxbg1_01.jpg) no-repeat;
  width: 100%;
  height: 100%;
}

</style>
