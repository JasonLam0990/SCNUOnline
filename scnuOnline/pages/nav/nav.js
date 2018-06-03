// pages/nav/nav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseLists: [
      {
        courseName: '远程学习方法',
        courseTeacher: '卢和琰/二二而/二二二/二二二/二二二/二二二/二二二/二二二',
        courseType: 'ggbxk'
      },
      {
        courseName: '马克思主义思想概论牛逼啊',
        courseTeacher: '二二二/二二二/二二二/二二二',
        courseType: 'zybxk'
      },
      {
        courseName: '远程学习方法可还行啊',
        courseTeacher: '卢和琰',
        courseType: 'ggxxk'
      },
      {
        courseName: '远程学习方法',
        courseTeacher: '卢和琰',
        courseType: 'zybxk'
      },
    ],
  },
  onItemClick: function (event) {
    var targetUrl = "../course/course";
    targetUrl = targetUrl + "?courseName=" + event.currentTarget.dataset.course_name + "&courseTeacher=" + event.currentTarget.dataset.course_teacher
    console.log(targetUrl)
    wx.navigateTo({
      url: targetUrl
    });
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
    wx.pauseBackgroundAudio()
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