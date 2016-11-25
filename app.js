//app.js
App({
  //当程序初始化时候执行onlaunch方法
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  //小程序显示的时候触发
  onShow:function(){
    console.log('小程序显示的时候触发');
  },
  //小程序隐藏的时候触发
  onHide:function(){
    console.log('小程序隐藏的时候触发');
  },
  //定义全局方法，其他页面可调用
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  /**
 * @description        跳转页函数
 * @parameter   toUrl  跳转页 index/index?id=2
 */
  goToPage:function(toUrl){
    wx.navigateTo({
      url: toUrl
    })
  },
  //全局属性
  globalData:{
    userInfo:null
  }
})