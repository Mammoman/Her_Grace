document.addEventListener("DOMContentLoaded", function() {

    initializeVideoModal();
});

function initializeVideoModal() {
    const videoModal = document.getElementById('video-modal');
    const videoButton = document.getElementById('video-button');
    const videoCloseButton = document.getElementById('video-close-button');


    if (videoModal && videoButton && videoCloseButton) {
        videoButton.addEventListener('click', function() {
            videoModal.style.display = 'block';
        });

        videoCloseButton.addEventListener('click', function() {
            videoModal.style.display = 'none';
        });
    }
}


function showDetails(imageId) {
    var modal = document.getElementById(imageId);
    modal.style.display = "block";

    if (imageId === 'video-modal') {
        const videoModal = document.getElementById('video-modal');
        videoModal.style.display = 'block';
    }
}


function closeModal(imageId) {
    var modal = document.getElementById(imageId);
    modal.style.display = "none";
    
    if (imageId === 'video') {
        const videoModal = document.getElementById('video-modal');
        videoModal.style.display = 'none';
    }
}

window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};

function showVideo() {
    showDetails('video');
}


function redirectToNextPage() {
    window.location.href = '/Main.html';
}
