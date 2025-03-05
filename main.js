import { openBlobFrame, closeIframe } from 'https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/CoreJS/iframe.js';
import { handleMessage } from 'https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/CoreJS/messageHandler.js';
import { startDragging, stopDragging, drag } from 'https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/CoreJS/drag.js';
import { openSettings } from 'https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/CoreJS/settings.js';

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
