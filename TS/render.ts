import Registry from "./registry.js";
import { canvas, CanvasUpdate, mousePos, vh, vw } from "./canvas.js";

const renderLoop = setInterval(() => {
    CanvasUpdate("#111122");

    

}, 1000*Registry.renderDelta);