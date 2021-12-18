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
      url: "/pages/home/home",
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
    var stuId = wx.getStorageSync("_stuId");
    var stuName = wx.getStorageSync("_stuName");
    var stuImg = wx.getStorageSync("_stuImg");
    if (stuId != "" && stuName != "" && stuImg != "") {
      that.setData({
        _stuId: stuId,
        _stuName: stuName,
        _stuImg: stuImg,
      });
    } else {
      that.setData({
        _stuId: app.globalData._stuId,
        _stuName: app.globalData._stuName,
        _stuImg: app.globalData._stuImg,
      });
    }

    if (!app.globalData.time) {
      app.globalData.time = setInterval(function () {
        if (time > 0) time--;
        else time = 600;
      }, 1000);
    }
  },
  onShow: function () {
    var that = this;
    time = 600;
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
    //为页面中time赋值;
    setInterval(function () {
      that.setData({
        countdown: util.formatSeconds(time),
      });
    }, 300);
  },
  onUnload: function () {
    var that = this;
    clearInterval(app.globalData.timer);
    clearInterval(that.countdown);
  },
  onHide: function () {
    var that = this;
    clearInterval(app.globalData.timer);
    clearInterval(that.countdown);
  },
});
