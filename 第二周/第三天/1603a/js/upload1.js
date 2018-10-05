;
(function($) {
    $.fn.extend({
        Upload: function(opt) {
            var defaults = {
                type: [],
                size: 3
            };
            var news = $.extend({}, opt, defaults);
            $('#file').on('change', function() {
                var file = this.files[0];
                var fileType = file.type.split('/')[1];
                var fileSize = file.size;
                console.log(this.files);
                if ($.inArray(fileType, type) == -1) {
                    alert('请上传格式为' + type.join(','));
                    return false;
                }
                if (fileSize > size * 1024 * 1024) {
                    alert('请上传图片大小为3Mb的图片');
                    return false;
                }
                console.log(fileType, fileSize);
                var filereader = new FileReader();
                filereader.readAsDataURL(file); //去读取文件
                filereader.onload = function() { // 当文件读取完之后
                    var img = new Image();
                    img.src = this.result;
                    // console.log(this.result);
                    $(img).appendTo($('body'));
                }

            });
        }
    });
})(JQuery)