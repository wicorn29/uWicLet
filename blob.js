document.addEventListener('DOMContentLoaded', function () {
    if (window.self !== window.top && document.title === "uWicLet") {
        return;
    }
    
    fetch('https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/Extras/prohibited.json')
        .then(response => response.json())
        .then(data => {
            if (data.blocked_websites.includes(window.location.hostname)) {
                window.addEventListener('keydown', function (event) {
                    if (event.code == "Backquote" && event.ctrlKey && event.shiftKey) {
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
                        
                        setTimeout(() => {
                            symbol.style.opacity = "0";
                            setTimeout(() => symbol.remove(), 500);
                        }, 50);
                    }
                });
            }
        })
        .catch(error => console.error('Error fetching prohibited list:', error));
    
    if ((window.location.hostname.endsWith('.google.com') && window.location.hostname !== 'www.google.com') || window.location.hostname == 'www.youtube.com') {
        window.addEventListener('keydown', function (event) {
            if (event.code == "Backquote" && event.ctrlKey && event.shiftKey) {
                window.alert("uWicLet failed to load on this page! Error: Google Subdomain");
            }
        });
        return;
    }
    
    var script = document.createElement('script');
    script.src = 'https://wicorn29.github.io/uWicLet/main.js';
    script.onerror = function () {
        window.addEventListener('keydown', function (event) {
            if (event.code == "Backquote" && event.ctrlKey && event.shiftKey) {
                alert("uWicLet failed to load on this page! Error: Blocked by Content Security Policy");
            }
        });
    };
    document.body.appendChild(script);
});
