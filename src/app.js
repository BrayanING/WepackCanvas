import './app.scss';
var createCanva = (prop) => {
    console.log(prop);

    return new Promise((resolve, reject) => {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var image = document.createElement("img");
        canvas.width = canvas.height = prop.dim * 4.19 || 50;
        image.src = prop.url;
        image.crossOrigin = "Anonymous";
        // var add = document.getElementsByTagName("body");
        document.body.appendChild(canvas);
        image.onload = function () {
            context.save();
            context.beginPath();
            canvas.width = 50;
            canvas.height = 50;
            canvas.style.width = '50px';
            canvas.style.height = '50px';
            context.fillStyle = prop.fillStyle;
            context.strokeStyle = prop.strokeStyle;
            context.lineWidth = prop.lineWidth;
            context.arc(24, 24, 2 * prop.dim, 0, Math.PI * 2, true);
            context.clip();
            context.drawImage(image, 0, 0, 4 * prop.dim, 4 * prop.dim);
            context.stroke();
            context.restore();
            try {
                resolve(canvas.toDataURL());
            } catch (error) {
                reject({
                    error
                });
            }
        }
    });
}

var url = 'https://m.media-amazon.com/images/M/MV5BMTc3Njg2MTE4Ml5BMl5BanBnXkFtZTcwMDc4MTUzNA@@._V1_.jpg';

var prop = {
    fillStyle: 'red', //color
    strokeStyle: 'red', //color
    url: url,
    dim: 12,
    lineWidth: 4
};
createCanva(prop).then((data) => {
    console.log(data);
    img = document.getElementById("imgCircle");
});