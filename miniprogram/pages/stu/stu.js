const util = require("../../utils/dataUtil.js");
const app = getApp();
var time = 600;

Page({
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

  test() {
    if (!util.getSecond()) {
      console.log("getSecond 1");
      this.play();
      this.display2();
    } else {
      console.log("getSecond 0");
      this.play2();
      this.display();
    }
  },
  /**
   * 页面的初始数据
   */
  onLoad: function () {
    //日期显示
    var that = this;

    //为页面中time赋值;
    setInterval(function () {
      that.setData({
        timer: util.formatSeconds(time),
      });
    }, 300);
    // console.log("timer!!!!!");
    if (!app.globalData.time) {
      // console.log("time--");
      app.globalData.time = setInterval(function () {
        if (time > 0) time--;
        else time = 600;
      }, 1000);
    }
  },
  onShow: function () {
    var that = this;
    that.setData({
      date: util.getDate(),
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      lx: [1, 0, 1, 0],
      ly: [0, 1, 0, 1],
      valx: [158, 132, 150, 550],
      valy: [120, 140, 530, 148],
      //   info: {
      //     picture: app.globalData.imgUrl,
      //     name: app.globalData.name,
      //     id: app.globalData.id,
      //     college: "机电与信息工程学院",
      //   },
      flash: 0,
    });
    app.globalData.timer = setInterval(this.test, 300);
  },
  onUnload: function () {
    console.log("onUnload");
    clearInterval(app.globalData.timer);
  },
  onHide: function () {
    console.log("onHide");
    clearInterval(app.globalData.timer);
  },
});
