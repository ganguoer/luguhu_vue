let isProd = false;

let prod = "";
// let dev = "http://192.168.2.181:8080/lghcms/lghApi";
let dev = "http://lghback.citgroup.cn:8080/lghApi";

let imgsrc="http://lghback.citgroup.cn:8080";

let base = isProd ? prod : dev;
export default {
  amap: "988b262540ae65a710f18bf4516193de",
  imgsrc,
  //最新资讯
  info: {
    hotImg: `${base}/getImgs`,        //热点图片
    articalHot: `${base}/getArticalHot`, //热点资讯
    getArtical: `${base}/getArtical`,  // 景区动态
    getArticalById: `${base}/getArticalById`,  //获取详情
  },
  //魅力泸沽湖
  charm: {
    getScenicById: `${base}/getScenicById`,        //   泸沽湖简介
    getScenicVideo: `${base}/getScenicVideo`,        // 景区视频
    getVideoById: `${base}/getVideoById`,        // 景区视频 详情
  },
  //旅游攻略
  tourism: {
    getHotel: `${base}/getHotel`,  //住
    getHotelDetail: `${base}/getHotelDetail`,  //住 详情
  }

}
