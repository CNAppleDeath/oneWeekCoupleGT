//https://cloud.tencent.com/developer/article/1380912

const db = wx.cloud.database({});
const cont = db.collection('user');
var temp;

Page({
  data: {
    name: temp
  },
  onLoad: function (options) {
    var _this = this;
    db.collection('user').get({
      success(res) {
        console.log(res.data);
        temp = res.data.age;
      }
    })
  },

})
