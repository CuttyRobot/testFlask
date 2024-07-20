document.getElementById('submitButton').addEventListener('click', function() {
    const textField = document.getElementById('textField').value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: textField })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = 'Server received: ' + data.received_text;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
