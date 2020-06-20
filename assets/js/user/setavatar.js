$(function(){
    $('.cropper-box img').cropper({
        //纵横比
        aspectRatio: 1,
        preview: '.img-preview'
    });
    $('#file').on('change',function(){
        // 获取选中的头像文件
        var file1 = this.files[0];//files是一个数组,第一个元素就是这个文件
        // 给这个选中的头像文件设置一个路径
        var url = URL.createObjectURL(file1);
        // 把这个路径赋值给img的src属性
        $('#image').cropper('destroy').attr('src',url).cropper({
            //纵横比
            aspectRatio: 1,
            preview: '.img-preview'
        });
    });


});