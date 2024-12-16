const pupils = document.querySelectorAll('.pupil');
const eyes = document.querySelectorAll('.eye');

// Function to calculate the distance between the mouse and the eye
document.addEventListener('mousemove', (e) => {
  eyes.forEach((eye, index) => {
    const pupil = pupils[index];
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate angle between the pupil and the cursor
    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

    // Move the pupil based on the angle
    const pupilRadius = 15;  // Maximum distance the pupil can move
    const xOffset = pupilRadius * Math.cos(angle);
    const yOffset = pupilRadius * Math.sin(angle);

    // Update the pupil position
    pupil.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  });
});
