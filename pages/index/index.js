var app = getApp();//获取应用实例，调用全局
Page({
  data: {
    imgUrls: [
      'http://localhost/img/index_banna.png',
      'http://localhost/img/index_banna2.png'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  gotoMall: function () {
    app.goToPage('../mall/mall');
  },
  onLoad: function (options) {
    //页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    //页面渲染完成
  },
  onShow: function () {
    //页面显示
  },
  onHide: function () {
    //页面隐藏
  },
  onUnload: function () {
    //页面关闭
  }
})