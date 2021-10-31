Page({
  /**
   * 页面的初始数据
   */
  data: {
    editTextYifu: "逸夫楼通行证(1/1次)",
    editTextOut: "出校通行证(1/1次)",
    editTextIn: "进校通行证(1/1次)",
    buttoncolorIn: "#870000",
    buttoncolorOut: "#870000",
  },
  navToOut() {
    wx.navigateTo({
      url: "/pages/stu/stu",
    });
    let that = this;
    that.setData({
      editTextOut: "出校通行证(0/1次)",
      buttoncolorOut: "#ac6a68",
    });
  },
  navToIn() {
    wx.navigateTo({
      url: "/pages/stu/stu",
    });
    let that = this;
    that.setData({
      editTextIn: "进校通行证(0/1次)",
      buttoncolorIn: "#ac6a68",
    });
  },
  resetData() {
    let that = this;
    that.setData({
      editTextOut: "出校通行证(1/1次)",
      editTextIn: "进校通行证(1/1次)",
      buttoncolorIn: "#870000",
      buttoncolorOut: "#870000",
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
