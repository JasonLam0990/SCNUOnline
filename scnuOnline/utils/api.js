/*添加*/
const getList = (courseId) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: '',
      data: {
        courseId: courseId
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

const getCourseList = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url:'',
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

const newArticle = (Article) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url:'',
      data:Article,
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

const getArticleList = (courseId) => {
  wx.showLoading()
  return new Promise((resolve, reject) => {
    wx.request({
      url: '',
      data: {
        courseId: courseId
      },
      success: function (res) {
       // wx.hideLoading()
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
const newReply=(reply)=>{
  return new Promise((resolve, reject) => {
    wx.request({
      url: '',
      data: reply,
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success: function (res) {
        // wx.hideLoading()
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
const getReplyList = (courseId, noteId) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: '',
      data:{
        courseId: courseId,
        noteId: noteId
      },
      success: function (res) {
        resolve(res)
      }
    })
  })
}
function withData(param) {
   return param < 10 ? '0' + param : '' + param;
  
}
const getFormatTime = ()=>{
  var newDate = new Date();
  var year = withData(newDate.getFullYear()),
    mont = withData(newDate.getMonth() + 1),
    date = withData(newDate.getDate()),
    hour = withData(newDate.getHours()),
    minu = withData(newDate.getMinutes());
  return `${mont}-${date} ${hour}:${minu}`
}
module.exports = {
  getList: getList,
  getCourseList: getCourseList,
  newArticle: newArticle,
  getArticleList: getArticleList,
  newReply: newReply,
  getReplyList: getReplyList,
  getFormatTime: getFormatTime
}