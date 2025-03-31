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
                    }
                    return response.text(); // Return the script content
                })
                .then(content => {
                    console.log(`Script from ${script.url}:`);
                    console.log(content); // Log the script content

                    // Process the script content
                    const processedScript = processScript(content);

                    // Log the processed script content
                    console.log(`Processed script content from ${script.url}:`);
                    console.log(processedScript);

                    // Create a script element to inject and execute the content
                    const scriptElement = document.createElement('script');
                    scriptElement.type = 'text/javascript';
                    scriptElement.innerHTML = processedScript; // Set the processed script as the inner content

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

// Helper function to process the script content (abstracted logic)
function processScript(content) {
    // Abstracted logic to process content (content may have been encoded or transformed)
    return decodeTransformedContent(content);
}

// Helper function to decode or transform the content (hidden details)
function decodeTransformedContent(encoded) {
    // Process the content here (this step is abstract, hiding the transformation)
    return atob(encoded);
}

// Define the scripts with their URLs and the domains they should execute on
const scripts = [
    {
        url: 'https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/enhancements/blockpageenhancments.w29',
        domains: ['www.securly.com']
    },
    {
        url: 'https://raw.githubusercontent.com/anotheruser/anotherrepo/main/script1.w29',
        domains: ['anotherwebsite.com']  // Executes only on "anotherwebsite.com"
    },
    {
        url: 'https://raw.githubusercontent.com/someuser/somerepo/main/script2.w29',
        domains: ['e.co']  // Executes on all domains
    }
];

// Load, log, and execute the scripts based on the current website domain
loadAndLogScripts(scripts);
