document.addEventListener('DOMContentLoaded', function () {
    if (window.self !== window.top && document.title === "uWicLet") {
        return;
    }
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
