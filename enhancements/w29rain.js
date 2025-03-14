(function() {  
     const style = document.createElement('style');  
     style.innerHTML = `  
         body {  
             overflow: hidden; /* Prevents showing particles when they spawn */  
         }  
         @keyframes fall {  
             to { transform: translateY(100vh); opacity: 0; } /* Fade out at the bottom */  
         }  
         .particle {  
             position: absolute;  
             white-space: nowrap;  
             pointer-events: none;  
             animation: fall linear forwards;  
             opacity: 1; /* Start fully visible */  
         }  
         .text {  
             color: green;  
             font-size: 20px;  
             display: inline;  
         }  
         .block {  
             color: red;  
             font-size: 20px;  
             display: inline;  
         }  
     `;  
     document.head.appendChild(style);  
   
     function createParticle() {  
         const particle = document.createElement('div');  
         particle.className = 'particle';  
         particle.style.left = Math.random() * window.innerWidth + 'px';  
         particle.style.top = -30 + 'px'; // Start above the viewport  
         particle.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random duration between 3s and 5s  
   
         // Create the text and block elements  
         const text = document.createElement('span');  
         text.className = 'text';  
         text.innerText = '</w>';  
   
         const block = document.createElement('span');  
         block.className = 'block';  
         block.innerText = '▉';  
   
         // Append text and block to the particle  
         particle.appendChild(text);  
         particle.appendChild(block);  
         document.body.appendChild(particle);  
   
         // Remove the particle after it falls  
         particle.addEventListener('animationend', () => {  
             particle.remove();  
         });  
     }  
   
     setInterval(createParticle, 100); // Create a new particle every 100ms  
 })();
