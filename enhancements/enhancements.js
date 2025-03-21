function loadAndLogScripts(scripts) {
    const currentDomain = window.location.hostname; // Get the current website's domain

    scripts.forEach(script => {
        // Check if the script should be executed on the current domain
        if (script.domains === "*" || script.domains.includes(currentDomain)) {
            // Fetch the script content from the raw GitHub URL
            fetch(script.url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch script from ${script.url}`);
                        warn(`Failed to fetch script from ${script.url}`)
                    }
                    return response.text(); // Return the script content as text
                })
                .then(scriptContent => {
                    console.log(`Script content from ${script.url}:`);
                    console.log(scriptContent); // Log the script content to the console

                    // Create a script element to inject and execute the content
                    const scriptElement = document.createElement('script');
                    scriptElement.type = 'text/javascript';
                    scriptElement.innerHTML = scriptContent; // Set the fetched script as the inner content

                    // Insert the script just before the first element in the head (usually <title>)
                    const head = document.head;
                    head.insertBefore(scriptElement, head.firstChild);

                    console.log(`Script from ${script.url} executed successfully.`);
                })
                .catch(error => {
                    console.error(`Error loading script from ${script.url}:`, error);
                });
        } else {
            console.log(`Script from ${script.url} is not executed on ${currentDomain}`);
        }
    });
}

// Define the scripts with their URLs and the domains they should execute on
const scripts = [
    {
        url: 'https://raw.githubusercontent.com/wicorn29/uWicLet/main/enhancements/w29rain.js',
        domains: ['www.securly.com']
    },
    {
        url: 'https://raw.githubusercontent.com/anotheruser/anotherrepo/main/script1.js',
        domains: ['anotherwebsite.com']  // Executes only on "anotherwebsite.com"
    },
    {
        url: 'https://raw.githubusercontent.com/someuser/somerepo/main/script2.js',
        domains: ['e.co']  // Executes on all domains
    }
];

// Load, log, and execute the scripts based on the current website domain
loadAndLogScripts(scripts);
