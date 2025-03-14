// LoadScripts.js

function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
}

function executeScripts() {
    const scriptUrls = [
        'https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/enhancements/w29rain.js',
        'https://example.com/script2.js',
        'https://example.com/script3.js'
    ];

    scriptUrls.forEach(url => {
        loadScript(url);
    });
}

// Execute the function to load all scripts
executeScripts();
