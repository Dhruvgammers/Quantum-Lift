const teamMembers = document.querySelectorAll('.team-member');
const scrollIndicators = document.querySelectorAll('.scroll-indicator__dot');

let currentMemberIndex = 0;
let scrolling = false;

function scrollToMember(index) {
    teamMembers[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToNextMember() {
    if (scrolling) return;
    scrolling = true;

    currentMemberIndex++;
    if (currentMemberIndex >= teamMembers.length) {
        currentMemberIndex = 0;
    }

    scrollToMember(currentMemberIndex);
    updateScrollIndicators();

    setTimeout(() => {
        scrolling = false;
    }, 100); // Delay to prevent rapid scrolling
}

function scrollToPreviousMember() {
    if (scrolling) return;
    scrolling = true;

    currentMemberIndex--;
    if (currentMemberIndex < 0) {
        currentMemberIndex = teamMembers.length - 1;
    }

    scrollToMember(currentMemberIndex);
    updateScrollIndicators();

    setTimeout(() => {
        scrolling = false;
    }, 1000); // Delay to prevent rapid scrolling
}

function updateScrollIndicators() {
    scrollIndicators.forEach((indicator, index) => {
        if (index === currentMemberIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

window.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default scroll behavior

    if (event.deltaY > 0) {
        scrollToNextMember();
    } else {
        scrollToPreviousMember();
    }
}, { passive: false });

const dots = document.querySelectorAll('.scroll-indicator__dot');
const lines = document.querySelectorAll('.scroll-indicator__line');
const indicatorBg = document.querySelector('.scroll-indicator__bg');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const sectionHeight = windowHeight / dots.length;

  dots.forEach((dot, index) => {
    const offsetTop = sectionHeight * index;
    const offsetBottom = offsetTop + sectionHeight;

    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
      for (let i = 0; i <= index; i++) {
        dots[i].classList.add('active');
        lines[i].classList.add('active');
      }
      indicatorBg.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    } else {
      dot.classList.remove('active');
      lines[index].classList.remove('active');
      indicatorBg.style.backgroundColor = 'transparent';
    }
  });
});
