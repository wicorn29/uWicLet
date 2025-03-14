//blob.js

var backupAlert = window.alert;
document.addEventListener('DOMContentLoaded', function () {
    if (window.self !== window.top && document.title === "Chromebrew") {
        return;
    }
    if ((window.location.hostname.endsWith('.google.com') && window.location.hostname !== 'www.google.com') || window.location.hostname == 'www.youtube.com') {
        window.addEventListener('keydown', function (event) {
            if (event.code == "Backquote" && event.ctrlKey && event.shiftKey) {
                window.alert("Chromebrew failed to load on this page! Error: Google Subdomain");
            }
        });
        return;
    }
    var main = 'https://wicorn29.github.io/Chromebrew/prepayload.js';
    var fallback = 'https://raw.githubusercontent.com/wicorn29/Chromebrew/refs/heads/main/prepayload.js';
    var script = document.createElement('script');
    script.src = main;
    script.onerror = function (error) {
        console.error("Error loading main script:", error);
        var script2 = document.createElement('script');
        script2.src = fallback;
        script2.onerror = function (error2) {
            console.error("Error loading fallback script:", error2);
            window.blobebmLoaded = false;
            setTimeout(() => {
                if (window.blobebmLoaded === false) {
                    window.addEventListener('keydown', function (event) {
                        if (event.code == "Backquote" && event.ctrlKey && event.shiftKey) {
                            var newAlert = window.alert;
                            window.alert = backupAlert;
                            alert("Chromebrew failed to load on this page! Error: Blocked by Content Security Policy");
                            window.alert = newAlert;
                        }
                    });
                }
            }, 10);
        };
        document.body.appendChild(script2);
    };
    document.body.appendChild(script);
});
