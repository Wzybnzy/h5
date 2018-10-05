function DrawLine(el, data) {
    //canvasElement
    this.el = typeof el === "string" ? document.querySelector(el) : el;
    //ctx
    this.ctx = this.el.getContext('2d');
    //画布的高度和宽度
    this.w = this.el.width;
    this.h = this.el.height;
    //数据
    this.data = data;
    //绘制主轴
    this.init();

}

DrawLine.prototype = {
    constructor: DrawLine,
    init: function() {
        //绘制主线
        var offset = this.data.offset,
            t = offset[0],
            r = offset[1],
            b = offset[2],
            l = offset[3];
        this.ctx.beginPath();
        this.ctx.moveTo(l, t);
        this.ctx.lineTo(l, this.h - b);
        this.ctx.lineTo(this.w - r, this.h - b);
        this.ctx.stroke();
        this.ctx.closePath();
        //绘制x轴的刻度线 移动画布原点
        this.ctx.translate(l, this.h - b);
        //1.刻度之间的间距 长度/length+1
        var x = this.w - r - l;
        var xdata = this.data.x;
        var xnum = x / (xdata.length + 1);
        xdata.map(function(v, i) {
            this.ctx.beginPath();
            var x1 = (i + 1) * xnum;
            this.ctx.moveTo(x1, 0);
            this.ctx.lineTo(x1, 10);
            this.ctx.stroke();
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "top";
            this.ctx.fillText(v, x1, 15);
        }, this);
        //y轴的刻度线
        var y = this.h - t - b;
        var ydata = this.data.y;
        var ynum = y / (ydata.length - 1);
        ydata.map(function(v, i) {
            var y1 = -i * ynum;
            this.ctx.beginPath();
            this.ctx.moveTo(0, y1);
            this.ctx.lineTo(-10, y1);
            this.ctx.stroke();
            this.ctx.textAlign = "right";
            this.ctx.textBaseline = "middle";
            this.ctx.fillText(v, -15, y1);
        }, this);
        //绘制中间内容
        this.cont(xnum, y);
    },
    cont: function(x, sum) {
        this.ctx.beginPath();
        var data = this.data.data;
        this.ctx.moveTo(x, -data[0] / 100 * sum);
        this.ctx.fillText(data[0], x, -data[0] / 100 * sum);
        for (var i = 1; i < data.length; i++) {
            this.ctx.lineTo(x * (i + 1), -data[i] / 100 * sum);
            this.ctx.fillText(data[i], x * (i + 1), -data[i] / 100 * sum);
        };
        this.ctx.stroke();
    }
}