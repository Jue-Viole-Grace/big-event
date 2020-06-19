$(function(){
    //表单验证
    var form = layui.form;
    //自定义验证规则
    form.verify({
        //1 新密码和旧密码不能一样
        diff: function(value){
            var oldPwd = $('#form input[name=oldPwd]').val();
            if(oldPwd === value){
                return '新密码不能和旧密码相同'
            };
        },
        //2 确认密码必须一致
        same: function(value){
            var newPwd = $('#form input[name=newPwd]').val();
            if(newPwd !== value){
                return '两次新密码必须相同'
            };
        }
    });
    //表单提交
    $('#form').submit(function(e){
        e.preventDefault();
        var fd = $(this).serialize();
        $.ajax({
            url: 'my/updatepwd',
            type: 'post',
            data: fd,
            success: function(res){
                if(res.status === 0){
                    layer.msg(res.message);
                    document.querySelector('#form').reset();
                }else{
                    layer.msg(res.message);
                };
            }
        });
    });
});