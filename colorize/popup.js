document.addEventListener('DOMContentLoaded', function() {
    var colorInput = document.getElementById('color-input');
    var copyButton = document.getElementById('copy-button');
  
    copyButton.addEventListener('click', function() {
      var color = colorInput.value;
      copyToClipboard(color);
    });
  });
  
  function copyToClipboard(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }