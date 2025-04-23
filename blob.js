/// fetch('https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/dev/devinit.js').then(response => response.text()).then(scriptContent => { eval(scriptContent); }); // load in the debugger

/// blob.js


var backupAlert = window.alert;
document.addEventListener('DOMContentLoaded', function () {
    if (window.self !== window.top && document.title === "uBlobeBM") {
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
    var main = 'https://wicorn29.github.io/uWicLet/main.js';
    var fallback = 'https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/main.js';
    var fallback2 = atob("cleanup2").replace(/Ã/g, '×');
    var fallback3 = atob("cleanup3").replace(/Ã/g, '×');
    var blob = new Blob([fallback2], { type: 'text/javascript' });
    var blobUrl = URL.createObjectURL(blob);
    var script = document.createElement('script');
    script.src = main;
    script.onerror = function () {
        var script2 = document.createElement('script');
        script2.src = fallback;
        script2.onerror = function () {
            var script3 = document.createElement('script');
            script3.src = blobUrl;
            script3.onerror = function () {
                window.blobebmLoaded = false;
                var script4 = document.createElement('script');
                script4.innerHTML = fallback3;
                setTimeout(() => {
                    if (window.blobebmLoaded === false) {
                        window.addEventListener('keydown', function (event) {
                            if (event.code == "Backquote" && event.ctrlKey && event.shiftKey) {
                                var newAlert = window.alert;
                                window.alert = backupAlert;
                                alert("uWicLet failed to load on this page! Error: Blocked by Content Security Policy");
                                window.alert = newAlert;
                            }
                        });
                    }
                }, 10);
                document.body.appendChild(script4);
            };
            document.body.appendChild(script3);
        };
        document.body.appendChild(script2);
    };
    document.body.appendChild(script);
});
