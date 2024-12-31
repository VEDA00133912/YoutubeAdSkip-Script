const observer = new MutationObserver(() => {
    const adBadge = document.querySelector('.ad-simple-attributed-string.ytp-ad-badge__text--clean-player.ytp-ad-badge__text--clean-player-with-light-shadow');
    if (adBadge) {
        console.log('広告をスキップします');
        const videoElement = document.querySelector('.html5-main-video');
        if (videoElement) {
            videoElement.currentTime += 999; 
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });
console.log('広告の監視を開始します');
