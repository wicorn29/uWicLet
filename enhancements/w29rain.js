(function() {  
    const style = document.createElement('style');  
    style.innerHTML = `  
        body {  
            overflow: hidden; /* Prevents showing particles when they spawn */  
            cursor: none; /* Hide the default cursor */  
        }  
        .platform {  
            position: absolute;  
            width: 150px;  
            height: 20px;  
            background-color: rgba(0, 0, 0, 0.5);  
            border-radius: 10px;  
            margin-left: -75px; /* Centers the platform under the cursor */  
        }  
        @keyframes fall {  
            to { 
                transform: translateY(100vh); 
                opacity: 0; /* Fade out at the bottom */  
            }  
        }  
        .particle {  
            position: absolute;  
            white-space: nowrap;  
            pointer-events: none;  
            opacity: 1; /* Start fully visible */  
            transition: transform 1s ease-out, opacity 1s ease-out; /* Smooth fling transition */  
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

    let mouseX = 0, mouseY = 0;

    // Platform area above the cursor
    const platform = document.createElement('div');
    platform.className = 'platform';
    document.body.appendChild(platform);

    // Listen for mouse movement to track cursor position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;

        // Move the platform to follow the cursor
        platform.style.left = `${mouseX - 75}px`;
        platform.style.top = `${mouseY - 30}px`; // Place the platform just above the cursor
    });

    function createParticle(x, y) {  
        const particle = document.createElement('div');  
        particle.className = 'particle';  
        particle.style.left = x + 'px';  
        particle.style.top = y + 'px'; // Start position at mouse  

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

        // Set a random fall duration
        const fallDuration = Math.random() * 2 + 3 + 's';  
        particle.style.animation = `fall ${fallDuration} linear forwards`;  

        // Set up particle data to track its state
        const particleData = {
            el: particle,
            x: x,
            y: y,
            falling: true,
            fallDuration: fallDuration,
            stuck: false, // Track whether the particle has stuck to the platform or another particle
            stackParent: null, // The particle it's stacked on
        };

        particles.push(particleData);  
    }  

    const particles = [];

    // Update particles every frame
    function updateParticles() {
        particles.forEach((particleData) => {
            const particle = particleData.el;
            const rect = particle.getBoundingClientRect();
            const platformRect = platform.getBoundingClientRect();

            // If particle is falling and hasn't been stuck yet
            if (particleData.falling && !particleData.stuck) {
                // Check if particle is near the platform
                if (
                    rect.left < platformRect.right && rect.right > platformRect.left &&
                    rect.bottom > platformRect.top && rect.top < platformRect.bottom
                ) {
                    // Stick to the platform when it lands
                    particleData.falling = false; // Stop falling
                    particleData.stuck = true; // Mark as stuck to the platform
                    particleData.stackParent = platform; // Set platform as its "stack parent"
                    particle.style.transition = 'none'; // Disable animation while stuck
                    particle.style.animation = 'none'; // Disable any animations while stuck

                    // Place it exactly on top of the platform (where it collided)
                    particle.style.top = `${platformRect.top - rect.height}px`;
                    particle.style.left = `${Math.max(platformRect.left, Math.min(platformRect.right - rect.width, rect.left))}px`; // Keep within platform bounds
                }
            } else if (particleData.falling && particleData.stackParent !== platform) {
                // Check if particle is touching another stacked particle
                for (let i = 0; i < particles.length; i++) {
                    const otherParticleData = particles[i];
                    if (otherParticleData !== particleData && !otherParticleData.stuck) {
                        const otherRect = otherParticleData.el.getBoundingClientRect();
                        if (
                            rect.left < otherRect.right && rect.right > otherRect.left &&
                            rect.bottom > otherRect.top && rect.top < otherRect.bottom
                        ) {
                            // Stick to the other particle if it's not yet stuck
                            particleData.falling = false;
                            particleData.stuck = true;
                            particleData.stackParent = otherParticleData.el; // Set the other particle as the stack parent
                            particle.style.transition = 'none'; // Disable animation while stuck
                            particle.style.animation = 'none'; // Disable any animations while stuck
                            
                            // Place it on top of the other particle
                            particle.style.top = `${otherRect.top - rect.height}px`;
                            particle.style.left = `${Math.max(otherRect.left, Math.min(otherRect.right - rect.width, rect.left))}px`; // Keep within other particle bounds
                            break;
                        }
                    }
                }
            } else if (particleData.stuck) {
                // If the particle is stuck, check if it is no longer touching the platform or stack
                if (
                    (particleData.stackParent === platform && (
                        rect.bottom > platformRect.top || // Check if the particle is below the platform
                        rect.left < platformRect.left || rect.right > platformRect.right // Check if it's outside the platform bounds
                    )) ||
                    (particleData.stackParent !== platform && !isTouchingStack(particleData, rect))
                ) {
                    // Resume falling if not touching the stack or platform
                    particleData.stuck = false; // No longer stuck
                    particleData.falling = true; // Resume falling
                    particle.style.transition = 'transform 1s ease-out'; // Re-enable animation when falling
                    particle.style.animation = `fall ${particleData.fallDuration} linear forwards`; // Resume fall animation
                }
            }
        });

        // Keep checking particles
        requestAnimationFrame(updateParticles);
    }

    // Check if particle is touching a stack of other particles
    function isTouchingStack(particleData, rect) {
        const stackParentRect = particleData.stackParent.getBoundingClientRect();
        return rect.bottom > stackParentRect.top && rect.left < stackParentRect.right && rect.right > stackParentRect.left;
    }

    // Start updating the particles
    requestAnimationFrame(updateParticles);

    // Create particles every 100ms
    setInterval(() => createParticle(Math.random() * window.innerWidth, -30), 100);  
})();
