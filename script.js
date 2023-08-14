const dynamicLine = document.getElementById('dynamic-line');
        const dynamicTexts = [
            "Programming","Youtuber",
            "Web Development",
            // Add more dynamic text variations here
        ];

        let currentIndex = 0;
        let isErasing = false;
        let textIndex = 0;

        function updateDynamicText() {
            if (!isErasing) {
                dynamicLine.innerHTML = dynamicTexts[currentIndex].substring(0, textIndex) + 
                                        `<span class="typing-cursor">|</span>`;
                textIndex++;

                if (textIndex > dynamicTexts[currentIndex].length) {
                    isErasing = true;
                    setTimeout(updateDynamicText, 1000); // Wait before erasing
                } else {
                    setTimeout(updateDynamicText, 100); // Type next character
                }
            } else {
                dynamicLine.innerHTML = dynamicTexts[currentIndex].substring(0, textIndex) + 
                                        `<span class="typing-cursor">|</span>`;
                textIndex--;

                if (textIndex < 0) {
                    isErasing = false;
                    currentIndex = (currentIndex + 1) % dynamicTexts.length; // Move to the next text
                    setTimeout(updateDynamicText, 1000); // Wait before typing
                } else {
                    setTimeout(updateDynamicText, 50); // Erase next character
                }
            }
        }

        // Start the animation
        updateDynamicText();
// fad on scroll//
const aboutSection = document.querySelector('.about-section');

function fadeOnScroll() {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight * 0.8) {
    aboutSection.classList.add('active');
  } else {
    aboutSection.classList.remove('active');
  }
}

window.addEventListener('scroll', fadeOnScroll);



//end//


  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});