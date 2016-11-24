import ajax from '../ajax'

const domain = '/api/appVersion/queryNewVersion.do'

export default {
  getList(options){
    ajax({
      url:domain,
      method:POST,
      data:{
         platformType:android,
        oldVersion:0.01
      },
      succes:function(){

      }
    })
  }
}
