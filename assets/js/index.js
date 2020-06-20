$(function(){
    //判断myToken是否存在
    /*var myToken = localStorage.getItem('myToken');
    if(!myToken){
        location.href = './login.html';
    };  */

    //获取用户信息
    function loadUserInfo (){
        $.ajax({
            url: 'my/userinfo',
            type: 'get',
            success: function(backData){
                if(backData.status == 0){
                    var info = backData.data;
                    //用户信息填充
                    $('.welcome #username').html(info.username);
                    $('#nav-username').html(info.username);
                    //填充头像
                    //info.user_pic = 'http://t.cn/RCzsdCq';
                    if(info.user_pic){
                        //如果头像存在，则显示一张图片
                        $('.welcome').prepend('<img src="'+ info.user_pic +'">');
                        $('.welcome div').remove();
                    };
                };
            }
        });
    };
    loadUserInfo();

    //退出功能
    $('#logout-btn').on('click',function(){
        // 弹出层，询问是否要退出
        layer.confirm('你确定要退出登录吗？', function (index) {
            // 如果点击了确定，删除token，页面跳转
            localStorage.removeItem('myToken');
            layer.close(index); // 关闭当前弹出层
            location.href = './login.html';
        });
    });
});