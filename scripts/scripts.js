const left = document.getElementById("left-side");

const handleOnMove = e => {
    const p =  e.clientX / window.innerWidth * 100;

    left.style.width = `${p}%`;
}

document.onmousemove = e => handleOnMove(e);

document.ontouchmove = e => handleOnMove(e.touches[0]);

document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.top img');

    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const mouseX = e.clientX - rect.left; // Mouse position relative to the image
        const mouseY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate movement
        const moveX = (mouseX - centerX) * 1.55; // The 0.05 is the movement factor
        const moveY = (mouseY - centerY) * 1.55;

        image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'translate(0, 0) scale(1)';
    });
});
