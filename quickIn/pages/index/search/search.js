// pages/index/search/search.js
var app = getApp();
var that = undefined;
const http = require('../../../utils/http.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [{
      name: "热门商圈"
    }, {
      name: "热门景点"
    }, {
      name: "热门酒店"
    }, {
      name: "地铁附近"
    }, {
      name: "热门酒店"
    }, {
      name: "地铁附近"
    }],
    tabScroll: 0,
    currentTab: 0,
    windowHeight: '',
    windowWidth: '',

    searchValue: '',

    /* 酒店列表 */
    hotelList: [
      {
        hotelImg: '/img/swiper-index.png',
        name: '维也纳酒店（上海虹桥机场九亭店）',
        point: 4.4,
        commentWord: '性价比高',
        commentNum: 9,
        keyword: '经济型/三星级',
        addKeyWord: '虹桥枢纽',
        price: 118,
        distance: 3
      }
      ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
    wx.getSystemInfo({ // 获取当前设备的宽高，文档有
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
    if (options.catId) {
      that.getInfoByCatId(1, 100, options.catId)
    }
  },

  /* 搜索商品 */
  search(start, size, name) {

  },
  // 输入
  blur_set(e) {
    if (e.currentTarget.dataset.blur === '0') {
      that.setData({
        searchValue: e.detail.value
      })
      that.search(1, 100, that.data.searchValue);
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  /* 点击切换样式 */
  clickChangeBlock(e) {
    that.setData({
      goodsBlockFirst: !that.data.goodsBlockFirst
    })
    console.log(that.data.goodsBlockFirst);
  },
  /* 点击切换 */
  clickMenu: function(e) {
    var current = e.currentTarget.dataset.current //获取当前tab的index
    var tabWidth = this.data.windowWidth / 4
    this.setData({
      tabScroll: (current - 2) * tabWidth //使点击的tab始终在居中位置
    })
    if (this.data.currentTab == current) {
      return false
    } else {
      this.setData({
        currentTab: current
      })
    }
  },
  changeContent: function(e) {
    var current = e.detail.current // 获取当前内容所在index,文档有
    var tabWidth = this.data.windowWidth / 5
    this.setData({
      currentTab: current,
      tabScroll: (current - 2) * tabWidth
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /* 跳转 */
  navigate: function(e) {
    let link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link
    })
  },
})