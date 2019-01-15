const c = document.getElementById('canvas');
const context = c.getContext('2d');

function fillRegion(x, y, sizes=[0, 0], rgba=[0,0,0,0]) {
    const imageData = context.getImageData(x, y, ...sizes);
    const { data } = imageData;
    const numPixels = data.length / 4;

    for (let i = 0; i < numPixels; i++) {
        // red
        data[i * 4] = rgba[0];
        // green
        data[i * 4 + 1] = rgba[1];
        // blue
        data[i * 4 + 2] = rgba[2];
        // alfa
        data[i * 4 + 3] = rgba[3];
    }

    context.putImageData(imageData, x, y);

}

function mouseMoveHandler(event) {
    const x = event.clientX;
    const y = event.clientY;
    requestAnimationFrame(() => {
        context.lineTo(x, y);
        context.stroke();
    });
}

function mouseUpHandler(event) {
    c.removeEventListener('mousemove', mouseMoveHandler, false);
}

function mouseDownHandler(event) {
    c.addEventListener('mousemove', mouseMoveHandler, false);
    const x = event.clientX;
    const y = event.clientY;

    context.fillStyle = "#000000";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(x, y);
}

c.addEventListener('mouseup', mouseUpHandler);
c.addEventListener('mousedown', mouseDownHandler);