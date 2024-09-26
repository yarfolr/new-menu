function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

function toggleMenu() {
	const navbar = document.querySelector('.navbar')
	navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block'
}

document.addEventListener('DOMContentLoaded', () => {
	// Smooth scrolling to section
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth',
			})
		})
	})

	// Scroll to top functionality
	const scrollTopBtn = document.querySelector('.scroll-top')
	window.addEventListener('scroll', () => {
		if (window.scrollY > 300) {
			scrollTopBtn.style.display = 'block'
		} else {
			scrollTopBtn.style.display = 'none'
		}
	})
})
