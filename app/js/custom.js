	// плавающее окошко прямого эфира
	var close = document.getElementsByClassName('header__close')[0];
	var live = document.getElementsByClassName('header__live')[0];
	close.onclick = function() {
		live.style.display = 'none';
	}

