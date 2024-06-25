document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let responses = {};
    const formElements = event.target.elements;

    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type === 'radio' && formElements[i].checked) {
            responses[formElements[i].name] = formElements[i].value;
        }
    }

    // Display the responses in the response div
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '<h2>Terima kasih atas partisipasi Anda!</h2><pre>' + JSON.stringify(responses, null, 2) + '</pre>';

    // Create a blob from the responses object
    const blob = new Blob([JSON.stringify(responses, null, 2)], { type: 'application/json' });
    
    // Create a link element
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
