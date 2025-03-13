 (function() {  
     // Check if the current hostname is 'example.com'  
     if (window.location.hostname === 'example.com') {  
         // Create a script element  
         const script = document.createElement('script');  
         script.src = 'https://raw.githubusercontent.com/wicorn29/uWicLet/refs/heads/main/enhancements/w29rain.js';  
         script.onload = function() {  
             console.log('Script loaded successfully.');  
         };  
         script.onerror = function() {  
             console.error('Error loading the script.');  
         };  
         // Append the script to the document body  
         document.body.appendChild(script);  
     } else {  
         console.log('Not on example.com, script will not be executed.');  
     }  
 })();  
