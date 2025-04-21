(function() {
    if (!confirm("Do you want to open settings?\n\nThis will completely unload the current page and any unsaved data will be lost.")) return;

    // Fade to white
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:white;opacity:0;transition:opacity 1s ease;z-index:9998;';
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.style.opacity = 1);

    // Spinner
    const spinner = document.createElement('div');
    spinner.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;border:4px solid #ccc;border-top:4px solid #000;border-radius:50%;animation:spin 1s linear infinite;z-index:9999;';
    document.body.appendChild(spinner);

    // Spinner animation
    const style = document.createElement('style');
    style.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
    document.head.appendChild(style);

    // Replace content with iframe after fade
    setTimeout(() => {
        document.body.innerHTML = '';
        document.head.innerHTML = '';
        document.head.appendChild(style); // re-append style
        const iframe = document.createElement('iframe');
        iframe.src = 'https://wicorn29.github.io/uWicLet/settings/flags.html';
        iframe.style.cssText = 'position:fixed;top:0;left:0;bottom:0;right:0;width:100vw;height:100vh;border:none;margin:0;padding:0;z-index:9999;overflow:hidden;';
        document.body.appendChild(iframe);
    }, 1200);
})();
