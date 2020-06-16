//实现登录功能
$(function(){
    //获取表单对象
    var form = layui.form;
    //基于layui自定义表单验证规则
    form.verify({
        //用户名必须是6-10位字符
        uname: [/^[\S]{6,10}$/,'用户名必须是6-10位字符'],
        //密码必须是6位数字
        pwd: function(value){
            var reg = /^\d{6}$/;
            if(!reg.test(value)){
                return '密码必须是6位数字';
            };
        }
    });
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
    //回车键触发表单提交事件
    $('.layui-form').on('keydown',function(e){
        if(e.keyCode == 13){
            $(this).trigger('submit');
        };
    });
});
