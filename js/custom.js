	var close = document.getElementsByClassName('header__close')[0];
	var live = document.getElementsByClassName('header__live')[0];
	close.onclick = function() {
		live.style.display = 'none';
	}
	document.getElementsByClassName('header__news-menu')[0].onmouseover = function() {
		mouseOver()
	};
	document.getElementsByClassName('header__news-menu')[0].onmouseout = function() {
		mouseOut()
	};

	function mouseOver() {
		document.getElementsByClassName('header__news-nav')[0].classList.add('newsDropdown');
	}

	function mouseOut() {
		document.getElementsByClassName('header__news-nav')[0].classList.remove('newsDropdown');
	}