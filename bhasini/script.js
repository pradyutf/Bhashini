
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('translateButton').addEventListener('click', () => {
        var inputText = document.getElementById('inputText').value;
        var sourceLang = document.getElementById('sourceLanguage').value;
        var targetLang = document.getElementById('targetLanguage').value;

        var apiUrl = 'https://bhashiniproject.up.railway.app/translate';
        var data = { 
            content: inputText,
            source: sourceLang,
            target: targetLang
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the response as JSON
            })
            .then(data => {
                if (data.translated_content) {
                    console.log('Translated Text:', data.translated_content); // Log the translated content for debugging
                    document.getElementById('outputText').value = data.translated_content; // Set the output text
                } else {
                    throw new Error('Translated content not found in the response');
                }
            })
            .catch(error => {
                console.error('Translation error:', error);
            });
    });
});
