//实现登录注册功能
$(function(){
    //获取表单对象
    var form = layui.form;
    //基于layui自定义表单验证规则
    form.verify({
        //用户名必须是5-10位字符
        uname: [/^[\S]{5,10}$/,'用户名必须是5-10位字符'],
        //密码必须是6位数字
        pwd: function(value){
            var reg = /^\w{5,10}$/;
            if(!reg.test(value)){
                return '密码必须是5-10位字母';
            };
        },
        //自定义注册表单验证规则(两次密码一致)
        same: function(value){
            //获取原始密码
            var pwd = $('#registerForm input[type=password]').eq(0).val();
            if(pwd != value){
                return '两次密码必须一致';
            };
        }
    });
    //表单提交事件(点击登录button)
    $('#loginForm').submit(function(e){
        //阻止默认事件
        e.preventDefault();
        //获取用户名和密码
        var formData = $(this).serialize();
        //发送ajax请求验证用户名和密码
        $.ajax({
            url: 'api/login',
            type: 'post',
            data: formData,
            success: function(backData){
                //登录成功后跳转到主页
                if(backData.status == 0){
                    //把登录成功的标志存储在客户端
                    localStorage.setItem('myToken',backData.token);
                    location.href = './index.html';
                };
            }
        });
    });

    //去注册
    $('.register').on('click',function(){
        $('#loginForm').hide().siblings('form').show();
    });
    //去登录
    $('.login').on('click',function(){
        $('#registerForm').hide().siblings('form').show();
    });

    //注册表单提交事件
    $('#registerForm').submit(function(e){
        //阻止默认事件
        e.preventDefault();
        //获取用户名和密码
        var formData = $(this).serialize();
        //发送ajax请求验证用户名和密码
        $.ajax({
            url: 'api/reguser',
            type: 'post',
            data: formData,
            success: function(backData){
                //登录成功后跳转到登录页
                if(backData.status == 0){
                    $('.login').click();
                    layer.msg(backData.message);
                }else{
                    //layui的弹窗
                    layer.msg(backData.message);
                };
            }
        });
    });
});
