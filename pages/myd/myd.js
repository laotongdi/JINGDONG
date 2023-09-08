// pages/myd/myd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: 1,
        src: '/images/qb.png',
        text: '待付款'
      },
      {
        id: 2,
        src: '/images/xz.png',
        text: '待收货'
      },
      {
        id: 3,
        src: '/images/tq.png',
        text: '退换／售后'
      },
      {
        id: 4,
        src: '/images/zd.png',
        text: '全部订单'
      }
    ],
    list2: [{
        id: 1,
        src: '/images/kf.webp',
        text: '客户服务'
      },
      {
        id: 2,
        src: '/images/yy.webp',
        text: '我的预约'
      },
      {
        id: 3,
        src: '/images/wt.webp',
        text: '我的问答'
      },
      {
        id: 4,
        src: '/images/hq.webp',
        text: '闲置换钱'
      }
    ],
    cp: [{
        id: 1,
        src: '/images/changp1.webp',
        price: '149',
        yj: '￥209',
        bt: '美的（Midea） 电饭煲家用电饭锅小型多功能24小时预约迷你微压3L全自动不沾煮饭锅1-6人 3升-FB30M111',
        qudao: '/images/jdcs.png',
        wl: '/images/jdwl.png'
      },
      {
        id: 2,
        src: '/images/changp2.webp',
        price: '199',
        yj: '￥239',
        bt: '美的（Midea）电饭煲家用智能电饭锅4升L预约定时微压快煮粥蒸饭锅大容量3-8人智能感温焖煮锅 【智能感温焖煮丨FB40M205】',
        qudao: '/images/jdcs.png',
        wl: '/images/jdwl.png'
      },
      {
        id: 3,
        src: '/images/changp3.webp',
        price: '199',
        yj: '￥239',
        bt: '美的（Midea）智能电饭煲电饭锅家用4L可拆蒸汽阀24H预约蒸煮米饭锅FB40simple111（3-8人）',
        qudao: '/images/jdcs.png',
        wl: '/images/jdwl.png'
      }, {
        id: 4,
        src: '/images/changp4.webp',
        price: '259',
        yj: '￥309',
        bt: '美的（Midea）智能电饭煲小电饭锅迷你2L触摸操控宿舍一键柴火饭多功能蒸煮米饭锅FB20Easy116（1-3人）',
        qudao: '/images/jdcs.png',
        wl: '/images/jdwl.png'
      }, {
        id: 5,
        src: '/images/changp5.webp',
        price: '49',
        bt: '浪莎本命年内裤兔年男士大红结婚喜庆吉祥短裤衩棉质透气中腰大码裤衩 福字印花3条装 175/XL',
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