// pages/search/search.js
var SEARCH_API='https://api.douban.com/v2/movie/search';
Page({
  data:{
    movies:[],
    err:true,
    errText:'暂无数据...'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  search:function(e){
    var searchVal=e.detail.value;
    if(!searchVal){
      return;
    }
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    })
    var that=this;
    wx.request({
      url: SEARCH_API, //仅为示例，并非真实的接口地址
      data: {
        q: searchVal
      },
      header: {
          'content-type': 'json'
      },
      success: function(res) {
        wx.hideToast();

        if(res.data.subjects.length==0){
          that.setData({
            movies:res.data.subjects,
            err:false
          })
        }else{
          that.setData({
            movies:res.data.subjects,
            err:true
          })
        }
        
      }
    })
  }
})