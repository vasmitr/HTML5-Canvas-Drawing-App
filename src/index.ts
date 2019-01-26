const c = document.getElementById('canvas') as HTMLCanvasElement;
const context = c.getContext('2d');

import './index.css';

// function fillRegion(x, y, width, height, rgba=[0,0,0,0]) {
//     const imageData = context.getImageData(x, y, width, height);
//     const { data } = imageData;
//     const numPixels = data.length / 4;
//
//     for (let i = 0; i < numPixels; i++) {
//         // red
//         data[i * 4] = rgba[0];
//         // green
//         data[i * 4 + 1] = rgba[1];
//         // blue
//         data[i * 4 + 2] = rgba[2];
//         // alfa
//         data[i * 4 + 3] = rgba[3];
//     }
//
//     context.putImageData(imageData, x, y);

// }

function mouseMoveHandler(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    requestAnimationFrame(() => {
        context.lineTo(x, y);
        context.stroke();
    });
}

function mouseUpHandler() {
    c.removeEventListener('mousemove', mouseMoveHandler, false);
}

function mouseDownHandler(event: MouseEvent) {
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