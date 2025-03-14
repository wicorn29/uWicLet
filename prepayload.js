(function() {
    // Fetch the restricted URLs list from the JSON file
    fetch('https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/Extras/prohibited.json')
        .then(response => response.json())
        .then(restrictedUrls => {
            // Check if the current hostname is in the restricted list
            if (restrictedUrls.includes(window.location.hostname)) {
                // Listen for the keypress event: Ctrl + Shift + ~ (backtick)
                document.addEventListener('keydown', function(event) {
                    if (event.ctrlKey && event.shiftKey && event.key === '`') {
                        // Create the symbol to display on restricted domain
                        let symbol = document.createElement("img");
                        symbol.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ISO_7010_P001.svg/1200px-ISO_7010_P001.svg.png";
                        symbol.style.position = "fixed";
                        symbol.style.width = "300px";
                        symbol.style.height = "300px";
                        symbol.style.left = "50%";
                        symbol.style.top = "50%";
                        symbol.style.transform = "translate(-50%, -50%)";
                        symbol.style.opacity = "1";
                        symbol.style.transition = "opacity 0.5s ease-out";
                        symbol.style.pointerEvents = "none";
                        symbol.style.zIndex = "999999";
                        document.body.appendChild(symbol);

                        // Fade out the symbol and remove it after animation
                        setTimeout(() => {
                            symbol.style.opacity = "0";
                            setTimeout(() => symbol.remove(), 500);
                        }, 50);

                        // Prevent default action and stop propagation
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    }
                });
            } else {
                // If not restricted, continue with the rest of the script
                fetch('https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/main.js')
                    .then(response => response.text())
                    .then(scriptContent => {
                        eval(scriptContent);
                    });
            }
        })
        .catch(error => {
            console.error('Error fetching restricted URLs:', error);
        });
})();
