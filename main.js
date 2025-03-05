import { openBlobFrame, closeIframe } from './iframe.js';
import { handleMessage } from './messageHandler.js';
import { startDragging, stopDragging, drag } from './drag.js';
import { openSettings } from './settings.js';

try {
    document.addEventListener("keydown", function (blob) {
        if (blob.code == "Backquote" && blob.ctrlKey && blob.shiftKey) {
            openBlobFrame();
        }
    });

    window.addEventListener("message", handleMessage);
} catch (error) {
    alert('An error occurred in main.js: ' + error.message);
    console.error(error);
}
