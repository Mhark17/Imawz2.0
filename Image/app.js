let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}
  const playlist = [
      './image/Music1.mp3',
      './image/Music2.mp3',
    ];

    const audio = document.getElementById('bg-music');
    let currentTrack = 0;

    function playTrack(index) {
      if (index >= playlist.length) index = 0;
      currentTrack = index;
      audio.src = playlist[currentTrack];
      audio.play().catch(err => {
        console.log('Playback error:', err);
      });
    }

    // Play next track on end
    audio.addEventListener('ended', () => {
      playTrack(currentTrack + 1);
    });

    // Listen for the first user click to start music
    function startMusic() {
      playTrack(currentTrack);
      // Remove the event listener so music starts only once
      document.body.removeEventListener('click', startMusic);
      document.body.removeEventListener('touchstart', startMusic);
      // Optional: remove the instruction text
      document.querySelector('h1').style.display = 'none';
    }

    document.body.addEventListener('click', startMusic);
    document.body.addEventListener('touchstart', startMusic); // for mobile devices