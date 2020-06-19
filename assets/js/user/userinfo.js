$(function(){
    var form = layui.form;
    //调用接口加载用户信息
    function loadUserInfo (){
        $.ajax({
            url: 'my/userinfo',
            type: 'get',
            success: function(res){
                // $('.layui-form input[name=username]').val(res.data.username);
                // $('.layui-form input[name=nickname]').val(res.data.nickname);
                // $('.layui-form input[name=email]').val(res.data.email);
                //基于layui填充表单
                form.val('userInfo',res.data);
            }
        });
    };
    loadUserInfo();

    //修改个人信息-表单提交事件
    $('#form').submit(function(e){
        e.preventDefault();
        //fd是数组
        var fd = $(this).serializeArray();
        fd = fd.filter(function(item){
            //原生js数组的filter方法，返回满足条件的元素
            return item.name !== 'username';
        });
        $.ajax({
            url: 'my/userinfo',
            type: 'post',
            data: fd,
            success: function(res){
                if(res.status === 0){
                    layer.msg(res.message);
                };
            }
        });
    });
});