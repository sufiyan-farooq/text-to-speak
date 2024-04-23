

function listen(){
    let speech = new SpeechSynthesisUtterance();
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
}