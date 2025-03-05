let offsetX, offsetY;
let isDragging = false;

export function startDragging(e) {
    const rect = blobFrameContainer.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    isDragging = true;
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDragging);
    blobFrame.style.pointerEvents = "none";
    blobFrameContainer.style.transition = 'none';
}

export function drag(e) {
    if (!isDragging) return;
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;
    newX = Math.min(Math.max(newX, 0), window.innerWidth - blobFrameContainer.offsetWidth);
    newY = Math.min(Math.max(newY, 0), window.innerHeight - blobFrameContainer.offsetHeight);
    blobFrameContainer.style.left = newX + "px";
    blobFrameContainer.style.top = newY + "px";
    blobFrameContainer.style.transform = 'none';
}

export function stopDragging() {
    isDragging = false;
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDragging);
    blobFrame.style.pointerEvents = "auto";
    blobFrameContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}
