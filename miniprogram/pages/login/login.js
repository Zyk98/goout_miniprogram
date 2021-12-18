// pages/login/login.js
const util = require("../../utils/dataUtil.js");
const env = require("../../envList.js");
const app = getApp();
wx.cloud.init();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    _stuImg: "",
    _stuName: "",
    _stuId: "",
    _stuCloudImg: "",
    _openId: "",
  },
  //获取用户头像
  uploadUserImg: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success(res) {
        that.setData({
          _stuImg: res.tempFilePaths[0],
        });
      },
    });
  },
  //获取用户名字
  nameinput: function (e) {
    var that = this;
    that.setData({
      _stuName: e.detail.value,
    });
  },
  //获取用户学号
  idinput: function (e) {
    var that = this;
    that.setData({
      _stuId: e.detail.value,
    });
  },
  //上传数据
  uploadBtnClick: function (e) {
    var that = this;
    var id = that.data._stuId;
    var img = that.data._stuImg;
    wx.cloud.uploadFile({
      cloudPath: "_" + id + img.substring(img.lastIndexOf(".")),
      filePath: img, // 文件路径
      success: (res) => {
        that.setData({
          _stuCloudImg: res.fileID,
        });
        wx.showToast({
          title: "上传成功",
          icon: "success",
        });
      },
      fail: (err) => {
        // handle error
        wx.showToast({
          title: "上传失败",
          icon: "error",
        });
        console.log(err.errMsg);
      },
    });
  },
  switchToHome: function () {
    wx.switchTab({
      url: "../home/home",
    });
  },
  //登录
  loginBtnClick: function (e) {
    var that = this;
    const db = wx.cloud.database();
    db.collection("user").add({
      data: {
        _id: app.globalData._openId,
        _stuId: that.data._stuId,
        _stuName: that.data._stuName,
        _stuCloudImg: that.data._stuCloudImg,
      },
      success: function (res) {
        that.switchToHome();
      },
      fail: function (err) {},
    });

    setTimeout(that.switchToHome, 500);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init({
      env: env.envList[0]["envId"],
    });
    var app = getApp();
    var that = this;
    wx.cloud.callFunction({
      name: "getOpenId",
      complete: (res) => {
        app.globalData._openId = res.result.userInfo["openId"];
        that.setData({
          _openId: app.globalData._openId,
        });
        wx.setStorageSync("isLogin", app.globalData._openId); //存储登录凭证
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
