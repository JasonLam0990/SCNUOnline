// pages/course/course.js
var app = getApp()
Page({
  data: {
    fakeCourses: [
      {
        id:"111",
        title: "远程学习方法概论",
        playUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        duration: 556,
        videoUrl:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      },
      {
        id: "222",
        title: "第一章 现代远程教育发展史",
        playUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        duration: 556,
        videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      },
      {
        id: "333",
        title: "第二章 现代远程教育流派",
        playUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        duration: 556,
        videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      },
      {
        id: "444",
        title: "第三章 上机操作基础",
        author: '许巍',
        playUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        duration: 556,
        videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      },
      {
        id: "555",
        title: "第四章 现代远程教育发展史",
        playUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        duration: 556,
        videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      },
      {
        id: "666",
        title: "第五章 现代远程教育流派",
        playUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        duration: 556,
        videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      },
    ],
    userHistory:[
      {
        id:"111",
        audioplayed: false,
        videoplayed: false
      },
      {
        id: "222",
        audioplayed: false,
        videoplayed: false
      },
      {
        id: "333",
        audioplayed: false,
        videoplayed: false
      },
      {
        id: "444",
        audioplayed: false,
        videoplayed: false
      },
      {
        id: "555",
        audioplayed: false,
        videoplayed: false
      },
      {
        id: "666",
        audioplayed: false,
        videoplayed: false
      },
    ],
    fakeForums: [
      {
        "title": "请同学们谈谈MOOC、微课和翻转课堂的区别",
        "user": "胡英芹",
        "commentNumber":56,
        "time": "04-11 16:50"
      },
      {
        "title": "请同学们谈谈MOOC、微课和翻转课堂的区别",
        "user": "胡英芹",
        "commentNumber": 56,
        "time": "04-11 16:50"
      }, 
      {
        "title": "请同学们谈谈MOOC、微课和翻转课堂的区别",
        "user": "胡英芹",
        "commentNumber": 56,
        "time": "04-11 16:50"
      },
      {
        "title": "请同学们谈谈MOOC、微课和翻转课堂的区别",
        "user": "胡英芹",
        "commentNumber": 56,
        "time": "04-11 16:50"
      },
      {
        "title": "请同学们谈谈MOOC、微课和翻转课堂的区别",
        "user": "胡英芹",
        "commentNumber": 56,
        "time": "04-11 16:50"
      },
      {
        "title": "请同学们谈谈MOOC、微课和翻转课堂的区",
        "user": "胡英芹",
        "commentNumber": 56,
        "time": "04-11 16:50"
      },
    ],
    tabs: ["音频课件", "视频课件", "课程论坛"],
    activeIndex: "0",
    sliderOffset: 0,
    sliderLeft: 0,

    playurl: '',
    title:'',
    // 播放时长
    duration: '',
    isplay:false,
    first:false,
    mainTitle:'',
    speaker: ''
  },
  onLoad: function (options) {
    // let mainTitle = options.mainTitle
    let mainTitle = "远程学习方法"
    // let speaker = options.speaker
    let speaker = "卢和琰"
    var that = this;
    wx.getSystemInfo({ //根据手机的宽度计算滑条的位置
      success: function (res) {
        var sliderWidth = res.windowWidth / 3 - 10
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          mainTitle: mainTitle,
          speaker:speaker
        });
      }
    });
  },
  onClick: function (event) {
    let playurl = event.currentTarget.dataset.playurl;
    let duration = event.currentTarget.dataset.duration;
    let title = event.currentTarget.dataset.title;
    let audioplayed = event.currentTarget.dataset.title;
    let id = event.currentTarget.dataset.id;

    let courses = this.data.fakeCourses
    for (let i of courses) {
      if (i.id == id) {
        i.audioplayed = true;

      }
      this.setData({
        fakeCourses: courses,
        duration: this._formatTime(duration),
        title: title
      })
    }
    this._createAudio(playurl, duration,title)
  }, 
  onVideoClick: function (event) {
    let id = event.currentTarget.dataset.id;
    console.log(id)
    let courses = this.data.fakeCourses
    for (let i of courses) {
      if (i.id == id) {
        i.videoplayed = true;
      }
      this.setData({
        fakeCourses: courses,
      })
    }

    var targetUrl = "video/video";
    targetUrl = targetUrl + "?videoUrl=" + event.currentTarget.dataset.videoUrl;
    wx.navigateTo({
      url: targetUrl
    });
  }, 

  // 创建播放器
  _createAudio: function (playurl, duration,title) {
    wx.playBackgroundAudio({
      dataUrl: playurl,
      title:title,
    })
    // 监听音乐播放。
    wx.onBackgroundAudioPlay(() => {
      this.setData({
        isplay: true,
        first:true
      })
    })
    // 监听音乐暂停。
    wx.onBackgroundAudioPause(() => {
      this.setData({
        isplay: false,
      })
    })
    // 监听播放拿取播放进度
    const manage = wx.getBackgroundAudioManager()
    manage.onTimeUpdate(() => {
      const currentTime = manage.currentTime
      this.setData({
        currentTime: this._formatTime(currentTime),
        percent: currentTime / duration
      })
    })
  },


  _formatTime: function (interval) {
    interval = interval | 0
    const minute = interval / 60 | 0
    const second = this._pad(interval % 60)
    return `${minute}:${second}`
  },
  /*秒前边加0*/
  _pad(num, n = 2) {
    let len = num.toString().length
    while (len < n) {
      num = '0' + num
      len++
    }
    return num
  },

  togglePlaying: function () {
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        var status = res.status
        if (status == 1) {
          wx.pauseBackgroundAudio()
        } else {
          wx.playBackgroundAudio()
        }
      }
    })
  },
  //选项卡的点击事件
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  gotoAdd: function () {

    wx.navigateTo({
      url: 'addNewArticle/addNewArticle'
    })
  },
  gotoDetail: function () {

    wx.navigateTo({
      url: 'forumDetail/forumDetail'
    })
  },
});