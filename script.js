setInterval(function () {
    const clock = document.querySelector(".display");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = 'AM';
    if (hr > 12) {
      day = 'PM';
      hr = hr - 12;
    }

    clock.textContent = hr + ':' + min + ':' + sec + " " + day;
  });


const hamburger=document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu=document.querySelector('.header .nav-bar .nav-list ul');
const menu_item=document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header=document.querySelector('.header .container');
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position >250) {
		header.style.backgroundColor = '#32353';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


/*gallery section*/
const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;

img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);

function imgClick(e) {
  img.forEach(img => (img.style.opacity = 1));
  current.src = e.target.src;
  current.classList.add('fade-in');
  setTimeout(() => current.classList.remove('fade-in'), 500);
  e.target.style.opacity = opacity;
}

/*end gallery section*/
