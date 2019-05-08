// compontent/home-page/home-page.js
Component({
  methods: {
    location:function(options){
      wx.navigateTo({
        url: '../City/City'
      })
    },
    me:function(options){
      wx.navigateTo({
        url: '../personal/personal'
      })
    }
  }
})
