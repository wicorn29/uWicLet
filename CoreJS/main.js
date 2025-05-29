import { openBlobFrame, closeIframe } from './iframe.js';
import { handleMessage } from './messageHandler.js';
import { startDragging, stopDragging, drag } from './drag.js';
import { openSettings } from './settings.js';

document.addEventListener("keydown", function (blob) {
    if (blob.code == "Backquote" && blob.ctrlKey && blob.shiftKey) {
        openBlobFrame();
    }
});

window.addEventListener("message", handleMessage);
