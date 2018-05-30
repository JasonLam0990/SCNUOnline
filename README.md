# scnuOnline
一个通过音频与视频url实现播放的使用本地数据的微信小程序，本demo阉割了那些向后台申请的request，让需要的数据更为清晰，方便前后端的交流

### 主页面主要由 **课程banner图片** 与 **nav动画式导航条三个板块** 下对应的（ **课程音频list，课程视频list，论坛list** ）构成
<center>
 <img src="/project-photo/WechatIMG251.jpeg" margin=20% width=30% />
</center>

```
  data: {
    fakeCourses: [
      {
        title: "远程学习方法概论",
        playUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        duration: 556,
        videoUrl:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      },
    ],
    fakeForums: [
      {
        "title": "请同学们谈谈MOOC、微课和翻转课堂的区别",
        "user": "胡英芹",
        "commentNumber":56,
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
  },
```
主页面所用数据

- fakeCourses为课程的本地数据 {
title：音频名称
playurl：音频播放url
duration：播放时长
videourl：视频播放url
} 
- fakeForums为论坛的本地数据 {
title：标题#
user：发布者
commentNumber：评论的数量
time：发布时间
}
- tabs为nav导航条的内容
- activeIndex: 用来确定现在导航条所点击到的板块
- sliderOffset，sliderLeft: 用来确定导航条移动动画的移动距离
- isplay：判断是否正在播放音频
- first：判断是够是第一次进入，若是，则隐藏音频播放器，只有在点击音频时，才出现

### 点击音频后弹出播放器组件并开始播放音频，具体代码见项目
<center>
 <img src="/project-photo/WechatIMG252.jpeg" width=30%/>
</center>


### 点击上方导航栏切换后，点击list内容，跳转到视频播放页面，使用微信小程序原声组件video
<center>
 <img src="/project-photo/WechatIMG253.jpeg" width=30%/>
</center>


### 课程论坛页面
<center>
 <img src="/project-photo/WechatIMG254.jpeg" width=30%/>
</center>


### 发布新帖页面，图片上传组件功能可用
<center>
 <img src="/project-photo/WechatIMG255.jpeg" width=30%/>
</center>


### 点击论坛list中的内容，跳转到论坛内容的界面，显示帖子详情以及评论情况
<center>
 <img src="/project-photo/WechatIMG256.jpeg" width=30%/>
</center>

## 项目亮点

1.  动画式滑动导航栏
2.  前后端交互数据的传值与渲染清晰，适合初学者学习

### 欢迎star与交流学习
