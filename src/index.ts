import './index.pcss';

const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvasElement.getContext('2d');

import './index.pcss';
import { Line } from "./utils/tools";

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

const tool = new Line(canvasElement, context);
tool.use();

