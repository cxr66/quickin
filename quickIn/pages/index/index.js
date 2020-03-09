//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 轮播图 */
    indicatorDots: false,
    autoplay: true,
    duration: 3000,
    swiperList: [{
      bannerUrl: 'https://www.baidu.com',
      bannerPath: '/img/swiper-index.png',
      name: ''
    }],

    /* 表单提交数据 */
    form:{
      location: "上海,漕河泾·松江新兴产业园-5号楼附近",
      begin_time: '11-14',
      end_time: '11-14',
      hotel_name: '酒店位置/名称/关键词',
      
    }
  },
  // 跳转
  navigate: function (e) {
    let link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})
