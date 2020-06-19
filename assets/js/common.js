//通用的接口调用设置
//ajaxPrefliter方法可以在ajax请求发出之前配置请求参数

var baseURL = 'http://ajax.frontend.itheima.net/';
$.ajaxPrefilter(function(option){
    //option是jQuery请求方法的配置信息
    //1 配置通用的url地址
    option.url = baseURL + option.url;
});