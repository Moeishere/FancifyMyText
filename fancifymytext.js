document.getElementById('bigger').addEventListener('click', function() {
    document.getElementById('userText').style.fontSize = '24pt';
});

document.getElementById('fancyShmancy').addEventListener('change', function() {
    if (this.checked) {
        var textArea = document.getElementById('userText');
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'blue';
        textArea.style.textDecoration = 'underline';
    }
});

document.getElementById('boringBetty').addEventListener('change', function() {
    if (this.checked) {
        var textArea = document.getElementById('userText');
        textArea.style.fontWeight = 'normal';
        textArea.style.color = 'black';
        textArea.style.textDecoration = 'none';
    }
});

document.getElementById('moo').addEventListener('click', function() {
    var textArea = document.getElementById('userText');
    var sentences = textArea.value.split('.').map(function(sentence) {
        return sentence.trim() + ' moo';
    }).join('. ');
    textArea.value = sentences;
});
