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
});