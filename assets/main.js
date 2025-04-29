
const form = document.getElementById('adForm');
const loadingDiv = document.getElementById('loading');
const popupDiv = document.getElementById('popup');
const videoSection = document.getElementById('videoSection');
const player = document.getElementById('yourVideoPlayer');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    loadingDiv.style.display = 'block';
    form.style.display = 'none';

    setTimeout(() => {
        loadingDiv.style.display = 'none';
        popupDiv.style.display = 'block';
    }, 5000);
});

function hidePopup() {
    popupDiv.style.display = 'none';
    videoSection.style.display = 'block';
    player.src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
}
