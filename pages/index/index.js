// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: [],
    b: [],
    list: [{
        id: 1,
        src: '/images/lbt1.jpg'
      },
      {
        id: 2,
        src: '/images/lbt2.jpg'
      },
      {
        id: 3,
        src: '/images/lbt3.jpg'
      },
      {
        id: 4,
        src: '/images/lbt4.jpg'
      },
      {
        id: 5,
        src: '/images/lbt5.jpg'
      }
    ],
    list2_1: [{
        id: 1,
        src: '/images/lb1.png',
        text: '京东超市'
      },
      {
        id: 2,
        src: '/images/lb2.png',
        text: '数码电器'
      },
      {
        id: 3,
        src: '/images/lb3.png',
        text: '京东新百货'
      },
      {
        id: 4,
        src: '/images/lb4.png',
        text: '京东生鲜'
      },
      {
        id: 5,
        src: '/images/lb5.png',
        text: '京东到家'
      },
      {
        id: 6,
        src: '/images/lb6.png',
        text: '充值缴费'
      },
      {
        id: 7,
        src: '/images/lb7.png',
        text: '附近好店'
      },
      {
        id: 8,
        src: '/images/lb8.png',
        text: 'PLUS会员'
      },
      {
        id: 9,
        src: '/images/lb9.png',
        text: '京东国际'
      },
      {
        id: 10,
        src: '/images/lb10.png',
        text: '京东拍卖'
      }
    ],
    list2_2: [{
        id: 1,
        src: '/images/lb11.png',
        text: '玩3C'
      },
      {
        id: 2,
        src: '/images/lb12.png',
        text: '沃尔玛'
      },
      {
        id: 3,
        src: '/images/lb13.png',
        text: '美妆馆'
      },
      {
        id: 4,
        src: '/images/lb14.png',
        text: '京东旅行'
      },
      {
        id: 5,
        src: '/images/lb15.png',
        text: '拍拍二手'
      },
      {
        id: 6,
        src: '/images/lb16.png',
        text: '全部'
      },
    ],
    dcms: [{
        id: 1,
        src: '/images/dcms1.jpg',
        price: '￥84.9'
      },
      {
        id: 2,
        src: '/images/dcms2.jpg',
        price: '￥9.9'
      },
      {
        id: 3,
        src: '/images/dcms3.jpg',
        price: '￥110'
      },
      {
        id: 4,
        src: '/images/dcms4.jpg',
        price: '￥6.2'
      },
      {
        id: 5,
        src: '/images/dcms5.jpg',
        price: '￥46.99'
      },
      {
        id: 6,
        src: '/images/dcms6.jpg',
        price: '￥139'
      },
      {
        id: 7,
        src: '/images/dcms7.jpg',
        price: '￥39.42'
      },
      {
        id: 8,
        src: '/images/dcms8.jpg',
        price: '￥6.76'
      },
      {
        id: 9,
        src: '/images/dcms9.jpg',
        price: '￥4989'
      },
      {
        id: 10,
        src: '/images/dcms10.jpg',
        price: '￥2610'
      }
    ],
    dianchang: '10',
    miaosha: {
      s: '00',
      f: '00',
      m: '00'
    },
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
    tlist:[
      {id:1,text:' 卡西欧手表'},
      {id:2,text:' 奥利奥饼干'},
      {id:3,text:' 办公椅'},
      {id:4,text:' 机顶盒'}
    ],
    changsu: ''
  },
  mytime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    var djs = '';
    // 0点场
    var dc0 = year + '-' + month + '-' + dates + ' ' + '05:59:59'
    // var str = year + '-' + month + '-' + dates + ' ' + '23:55:00'
    var dc0_t = year + '-' + month + '-' + dates + ' ' + '00:00:00'
    var dc0_b = year + '-' + month + '-' + dates + ' ' + '05:59:59'
    var dc0_t_t = +new Date(dc0_t);
    var dc0_b_b = +new Date(dc0_b);
    // 6点场
    var dc6 = year + '-' + month + '-' + dates + ' ' + '07:59:59'
    var dc6_t = year + '-' + month + '-' + dates + ' ' + '06:00:00'
    var dc6_b = year + '-' + month + '-' + dates + ' ' + '07:59:59'
    var dc6_t_t = +new Date(dc6_t);
    var dc6_b_b = +new Date(dc6_b);
    // 8点场
    var dc8 = year + '-' + month + '-' + dates + ' ' + '09:59:59'
    var dc8_t = year + '-' + month + '-' + dates + ' ' + '08:00:00'
    var dc8_b = year + '-' + month + '-' + dates + ' ' + '09:59:59'
    var dc8_t_t = +new Date(dc8_t);
    var dc8_b_b = +new Date(dc8_b);
    // 10点场
    var dc10 = year + '-' + month + '-' + dates + ' ' + '11:59:59'
    var dc10_t = year + '-' + month + '-' + dates + ' ' + '10:00:00'
    var dc10_b = year + '-' + month + '-' + dates + ' ' + '11:59:59'
    var dc10_t_t = +new Date(dc10_t);
    var dc10_b_b = +new Date(dc10_b);
    // 12点场
    var dc12 = year + '-' + month + '-' + dates + ' ' + '13:59:59'
    var dc12_t = year + '-' + month + '-' + dates + ' ' + '12:00:00'
    var dc12_b = year + '-' + month + '-' + dates + ' ' + '13:59:59'
    var dc12_t_t = +new Date(dc12_t);
    var dc12_b_b = +new Date(dc12_b);
    // 14点场
    var dc14 = year + '-' + month + '-' + dates + ' ' + '15:59:59'
    var dc14_t = year + '-' + month + '-' + dates + ' ' + '14:00:00'
    var dc14_b = year + '-' + month + '-' + dates + ' ' + '15:59:59'
    var dc14_t_t = +new Date(dc14_t);
    var dc14_b_b = +new Date(dc14_b);
    // 16点场
    var dc16 = year + '-' + month + '-' + dates + ' ' + '17:59:59'
    var dc16_t = year + '-' + month + '-' + dates + ' ' + '16:00:00'
    var dc16_b = year + '-' + month + '-' + dates + ' ' + '17:59:59'
    var dc16_t_t = +new Date(dc16_t);
    var dc16_b_b = +new Date(dc16_b);
    // 18点场
    var dc18 = year + '-' + month + '-' + dates + ' ' + '19:59:59'
    var dc18_t = year + '-' + month + '-' + dates + ' ' + '18:00:00'
    var dc18_b = year + '-' + month + '-' + dates + ' ' + '19:59:59'
    var dc18_t_t = +new Date(dc18_t);
    var dc18_b_b = +new Date(dc18_b);
    // 20点场
    var dc20 = year + '-' + month + '-' + dates + ' ' + '21:59:59'
    var dc20_t = year + '-' + month + '-' + dates + ' ' + '20:00:00'
    var dc20_b = year + '-' + month + '-' + dates + ' ' + '21:59:59'
    var dc20_t_t = +new Date(dc20_t);
    var dc20_b_b = +new Date(dc20_b);
    // 22点场
    var dc22 = year + '-' + month + '-' + dates + ' ' + '23:59:59'
    var dc22_t = year + '-' + month + '-' + dates + ' ' + '22:00:00'
    var dc22_b = year + '-' + month + '-' + dates + ' ' + '23:59:59'
    var dc22_t_t = +new Date(dc22_t);
    var dc22_b_b = +new Date(dc22_b);

    if (dc0_t_t <= new Date() && dc0_b_b >= new Date()) {
      // 0点场
      this.setData({
        dianchang: '00'
      })
      djs = +new Date(dc0);
    } else if (dc6_t_t <= new Date() && dc6_b_b >= new Date()) {
      // 6点场
      this.setData({
        dianchang: '06'
      })
      djs = +new Date(dc6);
    } else if (dc8_t_t <= new Date() && dc8_b_b >= new Date()) {
      // 8点场
      this.setData({
        dianchang: '08'
      })
      djs = +new Date(dc8);
    } else if (dc10_t_t <= new Date() && dc10_b_b >= new Date()) {
      // 10点场
      this.setData({
        dianchang: '10'
      })
      djs = +new Date(dc10);
    } else if (dc12_t_t <= new Date() && dc12_b_b >= new Date()) {
      // 12点场
      this.setData({
        dianchang: '12'
      })
      djs = +new Date(dc12);
    } else if (dc14_t_t <= new Date() && dc14_b_b >= new Date()) {
      // 14点场
      this.setData({
        dianchang: '14'
      })
      djs = +new Date(dc14);
    } else if (dc16_t_t <= new Date() && dc16_b_b >= new Date()) {
      // 16点场
      this.setData({
        dianchang: '16'
      })
      djs = +new Date(dc16);
    } else if (dc18_t_t <= new Date() && dc18_b_b >= new Date()) {
      // 18点场
      this.setData({
        dianchang: '18'
      })
      djs = +new Date(dc18);
    } else if (dc20_t_t <= new Date() && dc20_b_b >= new Date()) {
      // 20点场
      this.setData({
        dianchang: '20'
      })
      djs = +new Date(dc20);
    } else if (dc22_t_t <= new Date() && dc22_b_b >= new Date()) {
      // 22点场
      this.setData({
        dianchang: '22'
      })
      djs = +new Date(dc22);
    }
    //获取截止时间的时间戳（单位毫秒）
    // // var djs = +new Date(dc0);
    // // var inputTime = +new Date("'year'-6-27 23:55:00");
    // if (inputTime < new Date()) return
    //获取当前时间的时间戳（单位毫秒）
    var nowTime = +new Date();
    //把剩余时间毫秒数转化为秒
    var times = (djs - nowTime) / 1000;
    //计算小时数 转化为整数
    var shi = parseInt(times / 60 / 60 % 24);

    shi = shi < 10 ? "0" + shi : shi;
    //计算分钟数 转化为整数
    var fen = parseInt(times / 60 % 60);
    fen = fen < 10 ? "0" + fen : fen;
    //计算描述 转化为整数
    var miao = parseInt(times % 60);
    miao = miao < 10 ? "0" + miao : miao;
    this.setData({
      'miaosha.s': shi,
      'miaosha.f': fen,
      'miaosha.m': miao
    })
  },
  gosousuo(){
    wx.navigateTo({
      url: '/pages/search/search?text='+this.data.changsu+'&id=1',
    })
  },
  onSlideChangeEnd(e) {
    // console.log(this.tlist)
    if(e.detail.current === 1) {
      this.setData({
        changsu: this.data.tlist[1].text
      })
      // console.log(this.changsu)
    }else if(e.detail.current === 2) {
      this.setData({
        changsu: this.data.tlist[2].text
      })
    }else if(e.detail.current === 3) {
      this.setData({
        changsu: this.data.tlist[3].text
      })
    }else {
      this.setData({
        changsu: this.data.tlist[0].text
      })
    }
    // console.log(e.detail.current)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  msdjs: '',
  onReady: function () {
    this.mytime()
    this.msdjs = setInterval(this.mytime, 1000);
    this.setData({
      changsu: this.data.tlist[0].text
    })
    // console.log(this.data.changsu)
    // console.log(this.tlist2[0].text)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.mytime()
    this.msdjs = setInterval(this.mytime, 1000);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(this.msdjs)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.msdjs)
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