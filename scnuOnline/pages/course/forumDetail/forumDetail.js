// pages/course/forumDetail/forumDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fakeForums: [
      {
        "title": "请同学们谈谈MOOC、微课的区别",
        "user": "胡英芹",
        "commentNumber": 56,
        "time": "04-11 16:50",
        "content":"远程教育是一种以学生自主学习为主，教师指导为辅，通过媒体人格人格人格人格热狗热狗二哥热狗二哥二哥二哥二哥二哥二哥二个人过二哥二哥二哥二哥二哥热狗二哥二过热过热个人过二个人个人个人过热过热个人过二个人个人个人个人二哥热狗热greg二个人个人过二哥二个",
      },
    ],
    "remark": [
      {
        "userName": "最冷一天",
        "avatarUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
        "time": "04-11 16:50",
        "content": "之前和他合作过一次，我觉得他这个人做事蛮负责的，执行力也很不错，组队的话可以多考虑考虑，大腿一枚，飞飞飞飞飞飞飞飞飞飞而非饿份份而非而非而非而非饿的饭而非",
      },
      {
        "userName": "最热一天",
        "avatarUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
        "time": "04-11 16:50",
        "content": "之前和他合作过一次，我觉得他这个人做事蛮负责的，执行力也很不错，组队的话可以多考虑考虑，大腿一枚，飞飞飞飞飞飞飞飞飞飞而非饿份份而非而非而非而非饿的饭而非",
      },
      {
        "userName": "最肥一天",
        "avatarUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
        "time": "04-11 16:50",
        "content": "之前和他合作过一次，我觉得他这个人做事蛮负责的，执行力也很不错，组队的话可以多考虑考虑，大腿一枚，飞飞飞飞飞飞飞飞飞飞而非饿份份而非而非而非而非饿的饭而非",
      },
    ],
  },
  gotoReply: function () {
    wx.navigateTo({
      url: 'reply/reply'
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