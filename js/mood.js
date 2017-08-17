function init(){
    var phrases = document.getElementById('quotes_json');
    phraseStr = phrases.textContent;
    phrasesObj = JSON.parse(phraseStr);
    phraseObj = phrasesObj[Math.floor(phrasesObj.length*Math.random())];
    var phraseContainer = document.getElementById('js-phrase');
    phraseContainer.innerText = phraseObj.phrase;
    var signatureContainer = document.getElementById('js-author');
    if(phraseObj.signature){
      signatureContainer.innerText = phraseObj.signature;
    }
}
window.onload = init;
