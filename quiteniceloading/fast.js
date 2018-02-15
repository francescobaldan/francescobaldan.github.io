var downloadingImage = new Image();
downloadingImage.onload = function(){
	document.getElementsByClassName('loading')[0].style.opacity = 0;
	document.getElementsByClassName('loading')[0].style.zIndex = -1;
};

if (document.getElementsByTagName('body')[0].classList.contains('one'))
	downloadingImage.src = 'https://images.unsplash.com/photo-1415045550139-59b6fafc832f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f45ba72eb49317564dcfe37b759d97bc&auto=format&fit=crop&w=1950&q=100';
if (document.getElementsByTagName('body')[0].classList.contains('two'))
	downloadingImage.src = 'https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bff1627fffb987bb0026180a324f56e8&auto=format&fit=crop&w=1950&q=100';
if (document.getElementsByTagName('body')[0].classList.contains('three'))
	downloadingImage.src = 'https://images.unsplash.com/photo-1500521499834-d1d533b0b958?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=288ff6548081c9c3b59768334b7deffb&auto=format&fit=crop&w=1934&q=100';

document.getElementsByClassName('change-page')[0].addEventListener('click', function() {
	document.getElementsByClassName('loading')[0].style.opacity = 1;
	document.getElementsByClassName('loading')[0].style.zIndex = 999;
	setTimeout(function() {
		var page = document.getElementsByClassName('change-page')[0].getAttribute('data-link');
		window.location.replace('./' + page + '.html');
	}, 650);
});