document.addEventListener('DOMContentLoaded', () => {
    const eggContainer = document.getElementById('dino-egg-container');
    const egg = document.getElementById('dino-egg');
    const cursor = document.getElementById('dino-cursor');
    const docBody = document.body;

    // Expanded Dino Options (Different Species & Colors)
    // Since emojis have fixed colors, we can simulate "color variation" 
    // by applying CSS hue-rotate filters dynamically later, or just use a diverse set.
    const dinoOptions = [
        '🦕', // Blue Sauropod
        '🦖', // Green T-Rex
        '🐊', // Crocodile (Dino-like)
        '🐉', // Dragon (Dino-like)
        '🦎'  // Lizard
    ];

    let isCursorActive = false;

    // Mouse movement handler
    document.addEventListener('mousemove', (e) => {
        if (isCursorActive) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    });

    // Egg click handler
    egg.addEventListener('click', () => {
        // 1. Animate Egg Disappearance
        egg.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
        egg.style.transform = 'scale(2) rotate(10deg)';
        egg.style.opacity = '0';

        // 2. Randomize Dino & Color
        const randomDino = dinoOptions[Math.floor(Math.random() * dinoOptions.length)];
        const cursorEmoji = cursor.querySelector('.dino-emoji');

        if (cursorEmoji) {
            cursorEmoji.textContent = randomDino;

            // Random Color Filter (Hue Rotate)
            // This will make green dinos purple, orange, etc.
            const randomHue = Math.floor(Math.random() * 360);
            cursorEmoji.style.filter = `hue-rotate(${randomHue}deg)`;
        }

        // 3. Enable Custom Cursor after animation
        setTimeout(() => {
            eggContainer.style.display = 'none'; // Remove from flow

            // Show custom cursor
            cursor.classList.remove('hidden');
            docBody.classList.add('cursor-active');
            isCursorActive = true;
        }, 500);
    });
});
