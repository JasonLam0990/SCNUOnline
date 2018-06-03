var app = getApp()
var tag = 1;
Page({
  data: {
    name: '',
    src: '',
    curTime: '00:00',
    endTime: '00:00',
    reCurTime: '',
    reEndTime: '',
    playurl:'',
    status:'',
    cdCls: 'pause',
    currentDot: 0,
    isplay:false,
  },
  onLoad: function (options) {
    var playurl = options.playurl
    var name = options.name
    console.log(playurl)
    console.log(name)
    this.setData({
      playurl: playurl,
      name: name
    })
    var me = this
    wx.playBackgroundAudio({
      playurl: playurl,
      name: name,
      success: function () {
        me.backgroundAudioTime();
        me.setData({
          cdCls: 'play',
          isplay: true
        })
      }
    })
  },
  
  //播放暂停
  audioPlay: function () {
    var me = this
    let temp = 0
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        var status = res.status
        temp = status
        if (status == 1) {
          wx.pauseBackgroundAudio()
          me.setData({
            cdCls: 'pause',
            isplay: false
          })
        } else {
          wx.playBackgroundAudio()
          me.setData({
            cdCls: 'play',
            isplay: true
          })
        }
      }
    })
    this.setData({ 
      stauts:temp
     })
  },
  //获取音乐时间
  backgroundAudioTime: function (u) {
    var me = this;
    var timer = setInterval(function () {
      wx.getBackgroundAudioPlayerState({
        success: function (res) {
          var status = res.status
          var playurl = res.playurl
          var curTime = res.currentPosition
          var endTime = res.duration
          var downloadPercent = res.downloadPercent
          if (curTime == endTime && status == '1') {
            wx.navigateTo({
              url: '/pages/course/course'
            })
          }
          console.log(curTime)
          me.setData({ reCurTime: curTime })
          me.setData({ reEndTime: endTime })
          if (curTime < 10) {
            curTime = '00:0' + curTime;
          }
          if (curTime >= 10) {
            if (curTime >= 60) {
              var c = parseInt(curTime / 60)
              var d = curTime % 60
              if (d < 10) {
                d = '0' + d;
              }
              curTime = '0' + c + ':' + d;
            } else {
              curTime = '00:' + curTime;
            }

          }
          var a = parseInt(endTime / 60);
          var b = endTime % 60;
          if (b < 10) {
            b = '0' + b;
          }
          endTime = '0' + a + ':' + b;
          me.setData({ curTime: curTime })
          me.setData({ endTime: endTime })
        }
      })
    }, 1000)
  },//滑动条的改变
  slider1change: function (e) {
    var mine = this;
    var e = e.detail.value
    wx.seekBackgroundAudio({
      position: e
    })
    if (e < 10) {
      e = '00:0' + e;
    }
    if (e >= 10) {
      if (e >= 60) {
        var c = parseInt(e / 60)
        var d = e % 60
        if (d < 10) {
          d = '0' + d;
        }
        e = '0' + c + ':' + d;
      } else {
        e = '00:' + e;
      }

    }
    this.setData({ curTime: e })
  },
  changeDot: function (e) {
    this.setData({
      currentDot: e.detail.current
    })
  }
})