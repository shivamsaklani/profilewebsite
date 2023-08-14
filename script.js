/*dynamic header*/
const menuIcon = document.querySelector('.menu-icon');
const links = document.querySelectorAll('.links');

menuIcon.addEventListener('click', () => {
  links.forEach(link => {
    link.classList.toggle('show');
  });
});


/* dynamic line*/
const dynamicLine = document.getElementById('dynamic-line');
        const dynamicTexts = [
            "Programmer","Youtuber","Freelancer",
            "Fronted Developer",
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
// about section scroll//
const aboutContent = document.querySelector('.about-content');
    let prevScrollY = window.scrollY;

    function fadeInOnScroll() {
      const sectionTop = aboutContent.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) {
        aboutContent.classList.add('active');
      } else {
        aboutContent.classList.remove('active');
      }

      prevScrollY = window.scrollY;
    }

    function checkScrollDirection() {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY) {
        fadeInOnScroll();
      } else {
        fadeInOnScroll();
      }

      prevScrollY = currentScrollY;
    }

    window.addEventListener('scroll', checkScrollDirection);


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