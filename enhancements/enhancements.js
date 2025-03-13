 (function() {    
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
 })();  
