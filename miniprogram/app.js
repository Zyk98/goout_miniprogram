// app.js
/*
    userInfo: {},
    stuName: "",
    stuId: "",
    stuImg: "",
    stuCloudImg: "",
*/

App({
  globalData: {
    data: {
      appid: "wx1f4882ec0e20d0e4",
      secret: "28cfddb52f474279baaf571b8af1fca6",
    },
    _openId: "",
  },

  onLaunch: function () {
    wx.cloud.init({
      env: "kdbj-7gk5ydeg7523a410", //你的环境ID
    });
    if (wx.getStorageSync("isLogin")) {
      wx.switchTab({
        url: "pages/home2/home2",
      });
    } else {
      wx.reLaunch({
        url: "pages/login/login",
      });
    }
  },
});
