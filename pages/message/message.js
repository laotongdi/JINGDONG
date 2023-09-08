// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cp: [{
      id: 1,
      src: '/images/changp1.webp',
      price: '149',
      yj: '209',
      bt: '美的（Midea） 电饭煲家用电饭锅小型多功能24小时预约迷你微压3L全自动不沾煮饭锅1-6人 3升-FB30M111',
      qudao: '/images/jdcs.png',
      wl: '/images/jdwl.png'
    },
    {
      id: 2,
      src: '/images/changp2.webp',
      price: '199',
      yj: '239',
      bt: '美的（Midea）电饭煲家用智能电饭锅4升L预约定时微压快煮粥蒸饭锅大容量3-8人智能感温焖煮锅 【智能感温焖煮丨FB40M205】',
      qudao: '/images/jdcs.png',
      wl: '/images/jdwl.png'
    },
    {
      id: 3,
      src: '/images/changp3.webp',
      price: '199',
      yj: '239',
      bt: '美的（Midea）智能电饭煲电饭锅家用4L可拆蒸汽阀24H预约蒸煮米饭锅FB40simple111（3-8人）',
      qudao: '/images/jdcs.png',
      wl: '/images/jdwl.png'
    }, {
      id: 4,
      src: '/images/changp4.webp',
      price: '259',
      yj: '309',
      bt: '美的（Midea）智能电饭煲小电饭锅迷你2L触摸操控宿舍一键柴火饭多功能蒸煮米饭锅FB20Easy116（1-3人）',
      qudao: '/images/jdcs.png',
      wl: '/images/jdwl.png'
    }, {
      id: 5,
      src: '/images/changp4.webp',
      price: '259',
      yj: '309',
      bt: '美的（Midea）智能电饭煲小电饭锅迷你2L触摸操控宿舍一键柴火饭多功能蒸煮米饭锅FB20Easy116（1-3人）',
      qudao: '/images/jdcs.png',
      wl: '/images/jdwl.png'
    }, {
      id: 6,
      src: '/images/changp4.webp',
      price: '259',
      yj: '309',
      bt: '美的（Midea）智能电饭煲小电饭锅迷你2L触摸操控宿舍一键柴火饭多功能蒸煮米饭锅FB20Easy116（1-3人）',
      qudao: '/images/jdcs.png',
      wl: '/images/jdwl.png'
    }, {
      id: 7,
      src: '/images/changp4.webp',
      price: '259',
      yj: '309',
      bt: '美的（Midea）智能电饭煲小电饭锅迷你2L触摸操控宿舍一键柴火饭多功能蒸煮米饭锅FB20Easy116（1-3人）',
      qudao: '/images/jdcs.png',
      wl: '/images/jdwl.png'
    }
  ],
  no_scroll: true
  },
  goTop: function (e) {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  onPageScroll: function (e) {
    if (e.scrollTop > 100) {
      this.setData({
        no_scroll: false
      });
    } else {
      this.setData({
        no_scroll: true
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})