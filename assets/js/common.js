//通用的接口调用设置
//ajaxPrefliter方法可以在ajax请求发出之前配置请求参数

var baseURL = 'http://ajax.frontend.itheima.net/';
$.ajaxPrefilter(function(option){
    //option是jQuery请求方法的配置信息
    option.beforeSend = function(){
        NProgress && NProgress.start();
    };
    //1 配置通用的url地址
    option.url = baseURL + option.url;
    //2 设置接口的请求头
    if(option.url.lastIndexOf('/my/') != -1){
        //headers默认不存在
        option.headers = {
            Authorization : localStorage.getItem('myToken')
        };
    };
    //3 处理通用的异常情况,服务器响应结束时触发
    option.complete = function(res){
        NProgress && NProgress.done();
        //处理失败的情况
        if(res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！'){
            //清除错误的myToken并跳转到登录页
            localStorage.removeItem('myToken');
            location.href = './login.html';
        };
    };
});