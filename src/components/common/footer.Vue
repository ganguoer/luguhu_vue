<template>
  <div class="footer">
    <div class="foot clearfix">

      <div class="dls clearfix">
        <dl>
          <dt><a href="#">旅游资讯</a></dt>
          <dd><a href="#">宾馆索引</a></dd>
          <dd><a href="#">机票索引</a></dd>
          <dd><a href="#">旅游索引</a></dd>
          <dd><a href="#">邮轮索引</a></dd>
          <dd><a href="#">用车索引</a></dd>
        </dl>
        <dl>
          <dd class="xia"><a href="#">攻略索引</a></dd>
          <dd><a href="#">网站导航</a></dd>
          <dd><a href="#">火车票索引</a></dd>
          <dd><a href="#">企业差旅索引</a></dd>
        </dl>
      </div>
      <div class="dls clearfix">
        <dl>
          <dt><a href="#">加盟合作</a></dt>
          <dd><a href="#">分销联盟</a></dd>
          <dd><a href="#">广告业务</a></dd>
          <dd><a href="#">保险代理</a></dd>
          <dd><a href="#">酒店加盟</a></dd>
          <dd><a href="#">智慧旅游</a></dd>
        </dl>
        <dl>
          <dd class="xia"><a href="#">友情链接</a></dd>
          <dd><a href="#">企业礼品卡采购</a></dd>
          <dd><a href="#">代理合作</a></dd>
          <dd><a href="#">目的地及景区合作</a></dd>
          <dd><a href="#">更多加盟合作</a></dd>
        </dl>
      </div>
      <div class="dls clearfix">
        <dl>
          <dt><a href="#">关于泸沽湖</a></dt>
          <dd><a href="#">关于泸沽湖</a></dd>
          <dd><a href="#">联系我们</a></dd>
          <dd><a href="#">企业公民</a></dd>
          <dd><a href="#">用户协议</a></dd>
          <dd><a href="#">安全中心</a></dd>
        </dl>
        <dl>
          <dd class="xia"><a href="#">泸沽湖热点</a></dd>
          <dd><a href="#">诚聘英才</a></dd>
          <dd><a href="#">旅游度假资质</a></dd>
          <dd><a href="#">营业执照</a></dd>
        </dl>
      </div>
      <div class="erweima">
        <img src="../../../static/images/erweima.png" alt="">
      </div>

    </div>
    <div class="smalltit">
      <p>关于我们   |    支付方式     |   联系我们        使用帮助     |   服务条款  </p>
      <p>Copyright © 2017 www.xxx.com     经营许可证号：400-000-000　 版权所有：泸沽湖景区</p>
      <p>技术支持：中智游（北京）科技有限公司</p>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'footer',
        data () {
            return {}
        }
    }

</script>

<style scoped>
  /*底部样式*/
  .footer{
    width: 100%;
    height: 361px;
    background-color: #42a0e0;
  }
  .foot{
    width: 1000px;
    margin: 0 auto;
    padding-top: 34px;
  }

  .foot .dls{
    float: left;
    margin-right: 30px;
    border-right: 1px solid #fff;
  }
  .foot .dls:last-child{
    border-right:0px solid #fff!important;

    margin-right: 42px;
    border-right: 1px solid #fff;
  }
  .foot .dls:last-child{
    border-right:0;

  }

  .erweima{
    float: left;
    margin-top: 24px;
  }
  .foot .dls dl{
    float: left;
    padding-right: 36px;
  }
  .foot .dls dl dt a{
    font-size: 16px;
    color: #fff;
    line-height: 32px;
  }
  .foot .dls dl dd{
    line-height: 26px;
  }
  .foot .dls dl dd a{
    font-size: 14px;
    color: #fff;
  }
  .pr{position:relative}
  .hidden{display: none}
  .foot .dls dl dd.xia{
    margin-top: 42px;
  }
  .smalltit{
    margin-top: 30px;
  }
  .smalltit p{
    text-align: center;
    font-size: 14px;
    color: #fff;
    line-height: 26px;
  }

</style>
