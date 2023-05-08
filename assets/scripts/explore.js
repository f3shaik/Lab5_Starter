// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const select = document.getElementById("voice-select");
  var voices = [];
  var button = document.getElementsByTagName("button")[0];
  var text = document.getElementById("text-to-speak");
  var img = document.querySelector("img");

  function addVoices() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-name', voices[i].name);
      select.appendChild(option);
    }
  }

  addVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = addVoices;
  }

  button.addEventListener('click', function() {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selVoice = select.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selVoice) {
        utterThis.voice = voices[i];
        break;
      }
    }
    utterThis.addEventListener('start', function() {
      img.src = "assets/images/smiling-open.png";
    });
    utterThis.addEventListener('end', function(){
      img.src = "assets/images/smiling.png";
    })
    synth.speak(utterThis);
  });
}