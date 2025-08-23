'use strict';

(function() {
	const doc = document.documentElement;
	const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
	const saved = localStorage.getItem('theme');
	if (saved === 'light' || (!saved && prefersLight)) {
		document.body.classList.add('light');
	}

	document.getElementById('theme-toggle')?.addEventListener('click', () => {
		document.body.classList.toggle('light');
		localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
	});

	function addRippleEffect(el) {
		el.addEventListener('click', (e) => {
			const circle = document.createElement('span');
			const diameter = Math.max(el.clientWidth, el.clientHeight);
			const radius = diameter / 2;
			circle.style.width = circle.style.height = `${diameter}px`;
			circle.style.left = `${e.clientX - (el.getBoundingClientRect().left + radius)}px`;
			circle.style.top = `${e.clientY - (el.getBoundingClientRect().top + radius)}px`;
			circle.classList.add('ripple');
			const ripple = el.getElementsByClassName('ripple')[0];
			if (ripple) ripple.remove();
			el.appendChild(circle);
		}, { passive: true });
	}

	document.querySelectorAll('.button').forEach(addRippleEffect);

	// Link targets — replace '#' with your actual URLs
	document.getElementById('btn-photo')?.setAttribute('href', '#');
	document.getElementById('btn-video')?.setAttribute('href', '#');
	document.getElementById('btn-paid')?.setAttribute('href', '#');
})();