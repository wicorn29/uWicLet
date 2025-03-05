let blobFrame = null;
let blobFrameContainer = null;
let isOpening = false;
let isClosing = false;

export function openBlobFrame() {
    if (isOpening || isClosing) return;

    isOpening = true;

    // Close existing iframe if open
    if (blobFrame) {
        closeWithAnimation(blobFrameContainer);
        return;
    }

    blobFrameContainer = document.createElement("div");
    blobFrameContainer.style.cssText = `/* Styles for the container */`;
    
    blobFrame = document.createElement("iframe");
    blobFrame.setAttribute("tabindex", "0");
    blobFrame.style.cssText = `/* Styles for the iframe */`;

    fetch("https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/main.html")
        .then(response => response.text())
        .then(html => {
            const uBlobeHtml = blobFrame.contentDocument || blobFrame.contentWindow.document;
            uBlobeHtml.open();
            uBlobeHtml.write(html);
            uBlobeHtml.close();
            const iframeBody = uBlobeHtml.querySelector('body');
            iframeBody.style.overflowY = 'auto';
            iframeBody.style.height = '100%';
        });

    document.body.appendChild(blobFrameContainer);

    requestAnimationFrame(() => {
        blobFrameContainer.style.opacity = "1";
        blobFrameContainer.style.transform = "translate(-50%, -47%) translateY(0)";
        blobFrame.focus();
    });

    setTimeout(() => {
        isOpening = false;
    }, 300);
}

function closeWithAnimation(element) {
    isClosing = true;
    element.style.transition = "opacity 0.2s ease";
    element.style.opacity = "0";
    setTimeout(() => {
        element.remove();
        isClosing = false;
    }, 200);
}

export function closeIframe() {
    closeWithAnimation(blobFrameContainer);
    blobFrame = null;
}
