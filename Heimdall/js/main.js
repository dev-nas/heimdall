//------------------------ NAVBAR -----------------------
//-------------------------------------------------------
$(document).ready(function () {
	$('a[href^="#"]').on('click', function (evt) {
		var target = $(this).attr('href');
		$('html, body')
			.animate({
				scrollTop: $(target).offset().top
			}, 600);
	});

	$(".menu-icon").on("click", function () {
		$(".burger").toggleClass("active");
		$("nav ul").toggleClass("showing");
		$("nav").addClass("background-scroll");
	});

	$("nav a").on("click", function () {
		$(".burger").removeClass("active");
		$("nav ul").removeClass("showing");
	});
});

$(window).scroll(function () {
	if ($(window).scrollTop() > 1) {
		$('nav').addClass("background-scroll");
	} else {
		$('nav').removeClass("background-scroll");
		$("nav ul").removeClass("showing");
		$(".burger").removeClass("active");
	}
});

//------------------ Effet Parallax ----------------
//--------------------------------------------------
const parallax = document.querySelector("#accueil");

window.addEventListener('scroll', () => {
	setTimeout(moveBackground, 1)
});

function moveBackground() {
	parallax.style.backgroundPositionY = window.scrollY / 5 + "px";
}

//--------------- ScrollReveal ---------------------
//--------------------------------------------------
const sr = ScrollReveal();

sr.reveal('.logo', {
	origin: 'top',
	distance: '200px',
	duration: 7000,
});

sr.reveal('h2', {
	origin: 'bottom',
	distance: '200px',
	duration: 1500,
});

sr.reveal('.social-overlay', {
	origin: 'bottom',
	distance: '250px',
	duration: 1500,
});

sr.reveal('.scroll-overlay', {
	origin: 'top',
	distance: '200px',
	duration: 1500,
	delay: 800
});

sr.reveal('.picture', {
	origin: 'top',
	distance: '150px',
	duration: 2000,
	mobile: false
});

sr.reveal('figure', {
	duration: 3000,
	interval: 250,
	origin: 'bottom',
	distance: '50px',
});
sr.reveal('.figure-img1',{
	duration: 3000,
	interval: 250,
	origin: 'bottom',
	distance: '50px',
});
//------------------------ BOUTTON SCROLL TELEPHONE -----------------------
//-------------------------------------------------------

// Quand l'utilisateur scroll down de 20px , montrer le boutton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
//------------------------ BOUTTON SCROLL LANGUES -----------------------
//-------------------------------------------------------
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


