# scnuOnline
一个通过音频与视频url实现播放的使用本地数据的微信小程序，本demo阉割了那些向后台申请的request，让需要的数据更为清晰，方便前后端的交流

### 主页面主要由 **导航页面** **课程banner图片** 与 **nav动画式导航条三个板块** 下对应的（ **课程音频list，课程视频list，论坛list** ）构成

<center>
 <img src="/project-photo/WechatIMG276.jpeg" margin=20% width=30% />
</center>

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

## 常用知识点——————页面跳转传参数以及wx:for渲染

```
course.wxml

<view class='course-box' wx:for="{{fakeCourses}}" bindtap='onVideoClick' data-videoUrl="{{item.videoUrl}}" data-id="{{item.id}}">
  <view class='number-label'>{{index+1}}</view>
  <text class='course-name'>{{item.title}}</text>
  <image class='headphone-pic' src="{{item.videoplayed === true ?'/images/video.png':'/images/video-after.png'}}"></image>
</view>
```
- 在course.wxml界面中，要有data-xx="{{}}"的操作，比如代码中的 **data-videoUrl="{{item.videoUrl}}"** 就是传一个叫作videoUrl的参数，这个参数的值为**item.videoUrl** ，那item.xx又是什么呢？当写了 **wx:for="{{fakeCourses}}"** 时，这个view会循环渲染整个fakeCourses
```
    fakeCourses: [
      {
        title: "远程学习方法概论1",
        playUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        duration: 556,
        videoUrl:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      },
      {
        title: "远程学习方法概论2",
        playUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        duration: 556,
        videoUrl:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      },
    ],
```
，就会有很多个{...}形式的json数据，而item就是一个个这样的json部分【wx:for的循环渲染中有一个index在计数，可以在wxml中使用{{index}}来获得，比如第一个item的index是0，第五个item的index是4】，item.videoUrl就是获取对应渲染出来的那个view的item里面的videoUrl


```
course.js

onVideoClick: function (event) {

  var targetUrl = "video/video";
  
  targetUrl = targetUrl + "?videoUrl=" + event.currentTarget.dataset.videoUrl + "&id=" + event.currentTarget.dataset.id;
  
  wx.navigateTo({
    url: targetUrl
  });
}, 
```
- 在course.js界面中，注意function的参数要有**event**，用```event.currentTarget.dataset.xx;```来获取wxml传过来的参数。记住除了第一个传的参数用查询字符串的写法```"?videoUrl="```，之后的都是```"&id="```的形式，即？与&。其实就是targetUrl设置成要跳转去的页面，然后将要传的参数附带与targetUrl后面，一起带过去。如果要传的参数是数组，则是```var arr = JSON.stringify(event.currentTarget.dataset.arr); "&arr=" + arr;```这样的写法。

```
video.js

  onLoad: function (options) {
    this.setData({
      src: options.videoUrl,
    })
  },
```
- 在video.js界面中，要接收前一个页面跳转传过来的值，主要在生命周期函数的onLoad函数中，即渲染页面时先执行的函数，注意参数**options**，用options.xx来获取前面targetUrl中附带的值。如果要收的参数是数组，则要使用```var arr = JSON.parse(options.arr);```来接收。


```
  onLoad: function (options) {
    var that = this;
    if(options.id==0){
      that.setData({
        src_flag: options.src_flag,
      })
    }else{
      var remark = JSON.parse(options.remark);
      that.setData({
        remark: remark,
      })
    }
  },
 ```
- 此外，在js的函数中，this.会随着不同的函数作用域而变化，如此处的用法，因为有if...else，所以在if...else内this.的作用域就是在if里面而不是外面了,自然就不能直接this.setData了，所以在最开始先用**var that = this;** ，在后面用that.setData即可


### 欢迎star与交流学习😁
