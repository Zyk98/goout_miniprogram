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
    _stuName: "",
    _stuId: "",
    _stuImg: "",
  },

  onLaunch: function () {
    wx.cloud.init({
      env: "kdbj2-9glapdnm7efbd0fb", //你的环境ID
    });
    if (wx.getStorageSync("isLogin")) {
      wx.switchTab({
        url: "pages/home/home",
      });
    } else {
      wx.reLaunch({
        url: "pages/login/login",
      });
    }
  },
});
