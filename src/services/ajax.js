/*
 * author:yizuohua
 * time:2016.9.12
 * parameters:
 * opts:{'实际参数'}
 * method:请求方式：get/post,默认值：'get';
 * url:发送请求的地址，默认值：当前页地址；
 * data:string,json;
 * async:是否异步：true/false,默认值：true;
 * cache:是否缓存：true/false,默认值：true;
 * contentType:HTTP头信息，默认值：'application/x-www-form-urlencoded';
 * success:请求成功的回调函数；
 * error:请求失败后的回调函数；
 */
export function ajax(opts){
  //一.//设置默认参数
  var defaults = {
    method:'GET',
    url:'',
    data:'',
    async:true,
    cache:true,
    contentType:'application/x-www-form-urlencoded',
    success:function(){},
    error:function(){}
  }
  //二.用户参数覆盖默认参数
  for(var key in opts){
    defaults[key] = opts[key];
  }
  //三.对数据进行处理
  if(typeof defaults.data === 'object'){
    var str = '';
    for(var key in defaults.data){
      str += key + '=' + defaults.data[key] + "&";
    }
    defaults.data = str.substring(0,str.length - 1);
  }

  defaults.method = defaults.method.toUpperCase();
  //添加时间戳,处理缓存
  defaults.cache = defaults.cache ? '' : "&" + new Date().getTime();
  if(defaults.method === 'GET' && (defaults.data || defaults.cache)){
    defaults.url += '?' + defaults.data + defaults.cache;
  }

  //四.编写ajax
  //1.创建ajax对象
  var oXhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  //2.和服务器建立连接
  oXhr.open(defaults.method,defaults.url,defaults.async);
  //3.发送请求
  if(defaults.method === 'GET')
    oXhr.send(null);
  else{
    oXhr.setRequestHeader("Content-type",defaults.contentType);
    oXhr.send(defaults.data);
  }
  //4.等待服务器回应
  if(defaults.async){
    oXhr.onreadystatechange = function(){
      if(oXhr.readyState === 4){
        if(oXhr.status === 200)
          defaults.success.call(oXhr,oXhr.responseText);
        else{
          defaults.error();
        }
      }
    };
  }else{
    if(oXhr.status === 200)
      defaults.success.call(oXhr,oXhr.responseText);
    else{
      defaults.error();
    }
  }
}
