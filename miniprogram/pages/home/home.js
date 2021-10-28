// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    editText1: "逸夫楼通行证(1/1次)",
    editText2: "出校通行证(1/1次)",
    editText3: "进校通行证(1/1次)",
  },
  clickButton1: function () {
    let that = this;
    that.setData({
      editText1: "逸夫楼通行证(0/1次)",
    });
  },
  clickButton2: function () {
    let that = this;
    that.setData({
      editText2: "出校通行证(0/1次)",
    });
  },
  clickButton3: function () {
    let that = this;
    that.setData({
      editText3: "进校通行证(0/1次)",
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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
