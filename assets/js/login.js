//实现登录功能
$(function(){
    //表单提交事件(点击登录button)
    $('.layui-form').submit(function(e){
        //阻止默认事件
        e.preventDefault();
        //获取用户名和密码
        var formData = $(this).serialize();
        //发送ajax请求验证用户名和密码
        $.ajax({
            url: 'http://ajax.frontend.itheima.net/api/login',
            type: 'post',
            data: formData,
            success: function(backData){
                //登录成功后跳转到主页
                if(backData.status == 0){
                    location.href = './index.html';
                };
            }
        });
    });
});
