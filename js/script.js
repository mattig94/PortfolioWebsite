(function() {
	var $form = document.querySelector('#contact-form');
	var $emailInput = document.querySelector('#email');
	var $messageInput = document.querySelector('#message');

	function showErrorMessage($input, message) {
		var $container = $input.parentElement;
		
		//Remove an existing error
		var error = $container.querySelector('.error-message');
		if (error) {
			$container.removeChild(error);
		}

		//Add error message if error
		if (message) {
			var error = document.createElement('div');
			error.classList.add('error-message');
			error.innerText = message;
			$container.appendChild(error);
		}
	}

	function validateEmail() {
		var value = $emailInput.value;
		
		if (!value) {
			showErrorMessage($emailInput, 'Email is a required field');
			return false;
		}
		if (value.indexOf('@') === -1) {
			showErrorMessage($emailInput, 'Please enter a valid email address');
			return false;
		}
		showErrorMessage($emailInput, null);
		return true;
	}

	function validateMessage() {
		if ($messageInput.value.length < 5) {
			showErrorMessage($messageInput, 'Please include a message');
			return false;
		};
		showErrorMessage($messageInput, null);
		return true;
	}

	function validateForm() {
		var isValidEmail = validateEmail();
		var hasMessage = validateMessage();
		return isValidEmail && hasMessage;
	}

	$emailInput.addEventListener('input', validateEmail);
	$messageInput.addEventListener('input', validateMessage);

	$form.addEventListener('submit', (e) => {
		e.preventDefault();
		if (validateForm()) {
			alert('Success!');
		}
	})

}) ();

