document.getElementById('message-form').addEventListener('submit', function(e) {
	e.preventDefault();
	fetch('/chat', {
		method: 'POST',
		body: new FormData(document.getElementById('message-form'))
	}).then(function(response) {
		return response.text();
	}).then(function(data) {
		document.getElementById('chat-area').innerHTML += '<p>' + data + '</p>';
		document.getElementById('message-input').value = '';
	});
});