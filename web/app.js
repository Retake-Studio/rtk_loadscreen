const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getColor = (average) => {
  const color1 = [153, 233, 242];;
  const color2 = [34, 139, 230];

  const t = average / 255;

  const r = Math.round((1 - t) * color1[0] + t * color2[0]);
  const g = Math.round((1 - t) * color1[1] + t * color2[1]);
  const b = Math.round((1 - t) * color1[2] + t * color2[2]);

  return `rgb(${r}, ${g}, ${b})`;
};

let turnOff = false;

document.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("./assets/logic.mp3");
  audio.volume = 0.1;

  const playButton = document.getElementById('playButton');

  playButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audio.pause();
      playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
  });

  const volumeSlider = document.getElementById('volumeSlider');

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value / 100;
    audio.volume = volume;
  });

  audio.play();

  const im1 = document.getElementById('im1');
  im1.style.visibility = 'hidden';

  const animateImages = () => {
    setTimeout(() => {
      im1.style.animation = 'rotate 2.0s';
    }, 1000);
  };
  
  async function getImages() {
    await delay(2350);
  }
  
  getImages()
    .then(() => {
      im1.style.visibility = 'visible';
      im1.style.top = '50%';
      im1.style.left = '50%';
      im1.style.animation = 'slide-in-top 2.0s';
      im1.style.transform = 'translate(-50%, -50%)';

      setInterval(() => {
        if (turnOff) return;
        im1.style.animation = '';
        im1.style.transform = 'translate(-50%, -50%)';

        animateImages();
      }, 3000);
    })
  .catch((error) => {
    console.error(error);
  });

  const bg = document.getElementById('bg');
  const soundBloc = document.getElementById('soundBlocs');
  window.addEventListener('message', (e) => {
    if (e.data.fullyLoaded) {
      console.log('fullyLoaded');
      bg.style.animation = 'slide-out-bottom 2.0s';
      soundBloc.style.animation = 'fadeOut 2.0s';
      audio.pause();
      setTimeout(() => {
        bg.style.display = 'none';
        soundBloc.style.display = 'none';
        audio.pause();
      }, 2000);
    }
  })
});