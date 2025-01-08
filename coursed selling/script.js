
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

const enrollButtons = document.querySelectorAll('.enroll-btn');

enrollButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const courseName = e.target.closest('.course-card').getAttribute('data-course');
    alert(`You have enrolled in the ${courseName} course!`);
  });
});
