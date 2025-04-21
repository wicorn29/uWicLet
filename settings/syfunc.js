(function() {
    // Check if the OS is Chromebook (contains "cros" in the user agent)
    if (!navigator.userAgent.toLowerCase().includes("cros")) {
        // Inform the user they are not on a Chromebook
        const continueAnyway = confirm("You are not on a Chromebook. The settings menu may not function correctly.\n\nDo you still want to continue?");
        
        // If they do not want to continue, exit the function
        if (!continueAnyway) return;

        // If they want to continue, display a message about potential issues
        alert("Proceeding anyway. Note that the settings may not work properly.");
    }

    // Ask if they want to open settings and warn about unloading the page
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

        // Final message to reload the page to close settings
        alert("To close settings, reload the page.");
    }, 1200);
})();
