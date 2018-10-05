;
(function ($) {
    $.fn.extend({
        Upload: function (opt) {
            var defaults = {
                type: ['png', 'jpg'],
                size: 3
            };
            var news = $.extend({}, defaults, opt);
            console.log(news);
            $(this).on('change', function () {
                console.log(this.files[0]);
                var file = this.files[0];
                var filetype = file.type.split('/')[1];
                var filesize = file.size;
                if ($.inArray(filetype, news.type) == -1) {
                    alert('请选择图片格式为：' + type.join(',') + '的图片上传');
                    return false;
                }

                if (filesize > news.size * 1024 * 1024) {
                    alert('请选择3Mb之内的图片上传');
                    return false;
                }

                //读取
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = function () {
                    console.log(this.result);
                    var img = new Image();
                    img.src = this.result;
                    $(img).appendTo($('body'));
                }
            });
        }
    });
})(jQuery)