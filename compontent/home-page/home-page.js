// compontent/home-page/home-page.js
Component({
  methods: {
    location:function(options){
      wx.navigateTo({
        url: '../City/City'
      })
    }
  }
})
