(function() {
	
	var input              = document.getElementById('username');
	var	form               = document.getElementById('form');
	var	elem               = document.createElement('div');
			elem.id            = 'notify';
			elem.style.display = 'none';

			form.appendChild(elem);

	input.addEventListener('invalid', function(event){
		event.preventDefault();
		if ( ! event.target.validity.valid ) {
			input.className    = 'invalid animated shake';
			elem.textContent   = 'Username should only contain lowercase letters e.g. john';
			elem.className     = 'error';
			elem.style.display = 'block';
		}
	});

	input.addEventListener('input', function(event){
		if ( 'block' === elem.style.display ) {
			input.className = '';
			elem.style.display = 'none';
		}
	});

})();