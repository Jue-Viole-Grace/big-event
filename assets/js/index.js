$(function(){
    //判断myToken是否存在
    var myToken = localStorage.getItem('myToken');
    if(!myToken){
        location.href = './login.html';
    };

    //获取用户信息
    function loadUserInfo (){
        $.ajax({
            url: 'http://ajax.frontend.itheima.net/my/userinfo',
            type: 'get',
            //请求头
            headers: {
                Authorization: myToken
            },
            success: function(backData){
                if(backData.status == 0){
                    var info = backData.data;
                    //用户信息填充
                    $('.welcome #username').html(info.username);
                    $('#nav-username').html(info.username);
                    //填充头像
                    // info.user_pic = 'http://t.cn/RCzsdCq';
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
});