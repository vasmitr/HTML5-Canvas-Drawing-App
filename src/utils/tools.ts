export class Line {
    canvasElement: HTMLCanvasElement;

    context: CanvasRenderingContext2D;

    constructor(canvasElement: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.context = context;
    }

    mouseMoveHandler = (event: MouseEvent): void => {
        const x = event.clientX;
        const y = event.clientY;
        requestAnimationFrame(() => {
            this.context.lineTo(x, y);
            this.context.stroke();
        });
    };

    mouseUpHandler = (): void => {
        this.canvasElement.removeEventListener('mousemove', this.mouseMoveHandler, false);
    };

    mouseDownHandler = (event: MouseEvent): void => {
        this.canvasElement.addEventListener('mousemove', this.mouseMoveHandler, false);
        const x = event.clientX;
        const y = event.clientY;

        this.context.fillStyle = "#000000";
        this.context.lineWidth = 3;
        this.context.beginPath();
        this.context.moveTo(x, y);
    };

    use = (): void => {
        this.canvasElement.addEventListener('mouseup', this.mouseUpHandler);
        this.canvasElement.addEventListener('mousedown', this.mouseDownHandler);
    };

    unuse = (): void => {
        this.canvasElement.removeEventListener('mouseup', this.mouseUpHandler);
        this.canvasElement.removeEventListener('mousedown', this.mouseDownHandler);
    };
}