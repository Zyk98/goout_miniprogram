const util = require("../../utils/dataUtil.js");
const app = getApp();
const env = require("../../envList.js");
var time = 600;
var flag = 1;

Page({
  data: {
    _stuImg: "",
    _stuName: "",
    _stuId: "",
  },
  navToHomePage() {
    wx.switchTab({
      url: "/pages/home2/home2",
    });
  },
  display2: function () {
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "ease",
      delay: 0,
    });
    animation.opacity(0).translate(0, 0).step();
    this.setData({
      ani2: animation.export(),
    });
  },
  play2: function () {
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "ease",
      delay: 0,
    });
    animation.opacity(1).translate(0, 0).step();
    this.setData({
      ani2: animation.export(),
    });
  },

  display: function () {
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "ease",
      delay: 0,
    });
    animation.opacity(0).translate(0, 0).step();
    this.setData({
      ani: animation.export(),
    });
  },
  play: function () {
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "ease",
      delay: 0,
    });
    animation.opacity(1).translate(0, 0).step();
    this.setData({
      ani: animation.export(),
    });
  },

  twinkle() {
    if (flag == 1) {
      this.play();
      this.display2();
      flag = 0;
    } else {
      this.play2();
      this.display();
      flag = 1;
    }
  },
  /**
   * 页面的初始数据
   */
  onLoad: function () {
    const app = getApp();
    var that = this;
    //为页面中time赋值;
    setInterval(function () {
      that.setData({
        timer: util.formatSeconds(time),
      });
    }, 300);

    if (!app.globalData.time) {
      app.globalData.time = setInterval(function () {
        if (time > 0) time--;
        else time = 600;
      }, 1000);
    }

    //初始化云函数，调用getOpenId获取用户唯一的openid
    wx.cloud.init({
      env: env.envList[0]["envId"],
    });
    wx.cloud.callFunction({
      name: "getOpenId",
      complete: (res) => {
        console.log(res.result.userInfo["openId"]);
        app.globalData._openId = res.result.userInfo["openId"];
        wx.setStorageSync("isLogin", app.globalData._openId); //存储登录凭证
      },
    });
  },
  onShow: function () {
    //利用openid从数据库中获取用户的姓名、学号、头像url
    wx.cloud.init();
    const db = wx.cloud.database();
    var that = this;
    db.collection("user")
      .where({
        _openid: app.globalData._openId,
      })
      .get({
        success: function (res) {
          console.log(app.globalData._openId);
          that.setData({
            _stuId: res.data["0"]._stuId,
            _stuName: res.data["0"]._stuName,
            _stuImg: res.data["0"]._stuCloudImg,
          });
        },
        fail: function (err) {
          console.log(err.errMsg);
        },
      });
    that.setData({
      date: util.getDate(),
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      lx: [1, 0, 1, 0],
      ly: [0, 1, 0, 1],
      valx: [158, 132, 150, 550],
      valy: [120, 140, 530, 148],
      flash: 0,
    });
    app.globalData.timer = setInterval(this.twinkle, 300);
  },
  onUnload: function () {
    clearInterval(app.globalData.timer);
  },
  onHide: function () {
    clearInterval(app.globalData.timer);
  },
});
