//https://cloud.tencent.com/developer/article/1380912

const db = wx.cloud.database({});
const cont = db.collection('user');
<<<<<<< HEAD
=======
const app = getApp()
>>>>>>> 42dfc1115713e3ed2d5f95b4a4ab9cf4998ceef3
var openid = undefined;
var user_info = undefined;

Page({
  data: {
    name: '', age: '', gender: '', height: '', weight: '', expectedGender: '', expectedAge: '', expectedHeight: '', expectedWeight: '', merits: [], expectedMerits: [], 
  },

  onLoad: function (options) {
    
    var that = this;
<<<<<<< HEAD
    wx.cloud.callFunction({
      name: 'login', data: {}, success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        openid = res.result.openid
        //wx.cloud.init({ env: 'owcp-gt' })
        that.db = wx.cloud.database()
        that.test = that.db.collection('user')
      }, fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })

    db.collection('user').where({
      _openid: openid

    }).get({
      success: res => {
        console.log(res.data);
        user_info = res.data[0];
        console.log(user_info.expectedMerits);

        this.setData({
          name: user_info.name, 
          age: user_info.age,
          gender: user_info.gender,
          height: user_info.height, 
          weight: user_info.weight,
          expectedMerits: user_info.expectedMerits, 

          
        })

      }
    })
=======

    openid = app.globalData.openid

    user_info = app.globalData.myData

    console.log(user_info)

    this.setData({
      name: user_info.name,
      age: user_info.age,
      gender: user_info.gender,
      height: user_info.age,
      weight: user_info.weight,
      expectedMerits: user_info.expectedMerits
    })

    // db.collection('user').where({
    //   _openid: openid

    // }).get({
    //   success: res => {
    //     console.log(res.data);
    //     user_info = res.data[0];
    //     console.log(user_info.expectedMerits);

    //     this.setData({
    //       name: user_info.name, 
    //       age: user_info.age,
    //       gender: user_info.gender,
    //       height: user_info.height, 
    //       weight: user_info.weight,
    //       expectedMerits: user_info.expectedMerits, 
          
    //     })

    //   }
    // })
>>>>>>> 42dfc1115713e3ed2d5f95b4a4ab9cf4998ceef3

  

  },


})
