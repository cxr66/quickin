// pages/info/info.js
var app = getApp();
var that = undefined;
const http = require('../../utils/http.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    // 个人信息部分
    infoList: [
      {
        url: '/img/my/icon-order.png',
        desc: '全部订单',
        link: '/pages/info/order/order'
      },
      {
        url: '/img/my/icon-pay.png',
        desc: '待付款',
        link: ''
      },
      {
        url: '/img/my/icon-comment.png',
        desc: '待点评',
        link: ''
      }
    ],
    // 设置
    setList: [
      {
        desc: '个人帐户',
        link: '',
      },
      {
        desc: '我的收藏',
        link: '',
      },
      {
        desc: '我的点评',
        link: '',
      },
      {
        desc: '证件上传',
        link: '',
      },
      {
        desc: '常住酒店',
        link: '',
      },
      {
        desc: '常用信用卡',
        link: '',
      },
      {
        desc: '更多',
        link: '',
      },
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 跳转
  navigate: function (e) {
    let link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link
    })
  },

})