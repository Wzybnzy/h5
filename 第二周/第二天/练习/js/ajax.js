var $={
    ajax:function(option){
        var async=typeof(option.async)==='undefined'?true:fasle;
        var xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else if(window.ACctiveXObject){
            xhr=new ActiveXObject();
        }
        xhr.open(option.type||"post",option.url,async);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                option.success && (option.success(eval('('+this.responseText+')')))
            }
            else{
                option.error && (option.error(this.responseText))
            }
        }
        xhr.send();
    }
};