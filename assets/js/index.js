$(function(){
    //判断myToken是否存在
    var myToken = localStorage.getItem('myToken');
    if(!myToken){
        location.href = './login.html';
    };
});