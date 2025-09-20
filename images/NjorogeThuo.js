

// JS Animations for hero section (mimic bepatrickdavid.com)
window.addEventListener('DOMContentLoaded', function() {
	// Animate background image (scale and fade in)
	const bg = document.getElementById('heroBgImage');
	const title = document.getElementById('heroTitle');
	const hello = document.getElementById('heroHello');
	const desc = document.getElementById('heroDesc');
	const centerText = document.getElementById('heroCenterText');
	// Hide all hero text except centerText initially
	title.style.opacity = '0';
	hello.style.opacity = '0';
	desc.style.opacity = '0';
	// Animate background
	setTimeout(() => {
		bg.style.transition = 'opacity 1.2s cubic-bezier(0.4,0.2,0.2,1), transform 1.2s cubic-bezier(0.4,0.2,0.2,1)';
		bg.style.opacity = '1';
		bg.style.transform = 'scale(1)';
	}, 200);
	// Animate center text
	setTimeout(() => {
		centerText.style.opacity = '1';
	}, 700);
	// Hide center text and show rest after 3s
	setTimeout(() => {
		centerText.style.opacity = '0';
		// Animate title
		title.style.transition = 'opacity 0.7s cubic-bezier(0.4,0.2,0.2,1), transform 0.7s cubic-bezier(0.4,0.2,0.2,1)';
		title.style.opacity = '1';
		title.style.transform = 'translateY(0)';
		// Animate hello
		setTimeout(() => {
			hello.style.transition = 'opacity 0.7s cubic-bezier(0.4,0.2,0.2,1), transform 0.7s cubic-bezier(0.4,0.2,0.2,1)';
			hello.style.opacity = '1';
			hello.style.transform = 'translateY(0)';
		}, 500);
		// Animate desc
		setTimeout(() => {
			desc.style.transition = 'opacity 0.7s cubic-bezier(0.4,0.2,0.2,1), transform 0.7s cubic-bezier(0.4,0.2,0.2,1)';
			desc.style.opacity = '1';
			desc.style.transform = 'translateY(0)';
		}, 1000);
		// Animate hero content container
		setTimeout(() => {
			const content = document.querySelector('.hero-content');
			content.style.transition = 'opacity 0.7s cubic-bezier(0.4,0.2,0.2,1), transform 0.7s cubic-bezier(0.4,0.2,0.2,1)';
			content.style.opacity = '1';
			content.style.transform = 'translateY(0)';
		}, 1000);
	}, 3700);
});
