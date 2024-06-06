// let bar = document.getElementById('bar')
// let close = document.getElementById('close')
// let nav = document.getElementById('navbar')


// if (bar){
//   bar.addEventListener('click', ()=>{
//     nav.classList.add('active')
//   })
// }
// if (close){
//   close.addEventListener('click', ()=>{
//     nav.classList.remove('active')
//   })
// }

document.getElementById('menu-icon').addEventListener('click', function() {
  const navbarLinks = document.getElementById('navbar-links');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  navbarLinks.classList.toggle('show');
  openIcon.classList.toggle('show');
  closeIcon.classList.toggle('show');
});






const faqs = document.querySelectorAll('.faq');


faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
    faq.classList.toggle('open');

    //Change icon

    const icon = faq.querySelector('.faq_icon i');
    if(icon.className === 'fa-solid fa-plus'){
        icon.className = 'fa-solid fa-minus'
    } else{
        icon.className = 'fa-solid fa-plus'
    }

})
})



document.getElementById('delayed-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Add a delay before navigating
  setTimeout(function() {
      // Navigate to the link's href after 1000 milliseconds (1 second)
      window.location.href = event.target.href;
  }, 900); // Adjust delay time as needed
})