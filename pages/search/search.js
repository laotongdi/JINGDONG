// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 1,
      text: '补水眼霜'
    },
    {
      id: 2,
      text: '无纺布鞋套'
    },
    {
      id: 3,
      text: '电脑桌'
    },
    {
      id: 4,
      text: '跑步机'
    },
    {
      id: 5,
      text: '对讲机'
    },
    {
      id: 6,
      text: '七度空间卫生巾'
    },
    {
      id: 7,
      text: '进口牛奶'
    },
    {
      id: 8,
      text: '不粘锅煎锅'
    },
    {
      id: 9,
      text: '计算器'
    },
    {
      id: 10,
      text: '微波炉'
    },
    {
      id: 11,
      text: '地中海窗帘'
    },
    {
      id: 12,
      text: '户外急救包'
    }
    ],
    jieshou: ' 卡西欧手表',
    flag: true
  },
  dianji() {
    if (this.data.flag === true) {
      this.setData({
        flag: false
      })
    } else {
      this.setData({
        flag: true
      })
    }
  },

  goBack() {
      wx.navigateBack();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // options是导航传递过来的参数对象
    this.setData({
      jieshou: options.text,
    })
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