// expose.js



function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const hornImg = document.getElementsByTagName("img")[0];
  const sound = document.getElementsByTagName("audio")[0];
  const volume = document.getElementById("volume");
  const volumeImg = document.getElementsByTagName("img")[1];
  const button = document.querySelectorAll("button")[0];
  const confetti = new JSConfetti();

  hornSelect.addEventListener("change", (event) => {
    switch(event.target.value) {
      case "air-horn":
        hornImg.src = 'assets/images/air-horn.svg';
        sound.src = 'assets/audio/air-horn.mp3';
        hornImg.alt = 'Air Horn';
        break;
      case "car-horn":
        hornImg.src = 'assets/images/car-horn.svg';
        sound.src = 'assets/audio/car-horn.mp3';
        hornImg.alt = 'Car Horn';
        break;
      case "party-horn":
        hornImg.src = 'assets/images/party-horn.svg';
        sound.src = 'assets/audio/party-horn.mp3';
        hornImg.alt = 'Party Horn';
        break;
      default:
        hornImg.src = 'assets/images/no-image.png';
        hornImg.alt = 'No image';
        break;
    }
  });

  volume.addEventListener("input", (event) => {
    sound.volume = volume.value / 100;
    switch(true) {
      case (sound.volume == 0):
        volumeImg.src = "assets/icons/volume-level-0.svg";
        volumeImg.alt = 'Volume Level 0';
        break;
      case (sound.volume < 0.33):
        volumeImg.src = "assets/icons/volume-level-1.svg";
        volumeImg.alt = 'Volume Level 1';
        break;
      case (sound.volume < 0.67):
        volumeImg.src = "assets/icons/volume-level-2.svg";
        volumeImg.alt = 'Volume Level 2';
        break;
      default:
        volumeImg.src = "assets/icons/volume-level-2.svg";
        volumeImg.alt = 'Volume Level 3';
        break;
    }
  });

  button.addEventListener('click', (event) => {
    if (hornImg.alt == 'Party Horn') {
      confetti.addConfetti();
    }
    sound.play();
  });
}

window.addEventListener('DOMContentLoaded', init);