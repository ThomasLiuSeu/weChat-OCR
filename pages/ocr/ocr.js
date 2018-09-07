// pages/ocr/ocr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  
  },

  chooseImage: function() {
    wx.chooseImage({
      count:1,
      success: function(res) {
        var fs = wx.getFileSystemManager();
        var base64Code = fs.readFileSync(res.tempFilePaths[0], "base64");
        var bdOCRURL = "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=XWfQ3HjNVOSuZblggwxkBu0E&client_secret=tgN8xu6gEAzazjIHVjjaWyZjV9Ogz5Dj ";
        var ocrURL = "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate?access_token=" + "24.0b1595e225de59fc5336368dde442fe6.2592000.1538902121.282335-11773988";
        wx.request({
          url: ocrURL,
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "post",
          data: "image=" + encodeURIComponent(base64Code),
          success: function(e) {
            console.log(e.data);
            debugger;

          }
        })
      },
    })
  }
})