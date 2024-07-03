document.addEventListener('DOMContentLoaded', function () {
    // Array of background images
    const backgroundImages = [
        './imagess/chewing-gum-bg.jpg',
        './imagess/mfal-bg.webp',
        './imagess/we-young-bg.jpeg',
        './imagess/go-bg.jpg',
        './imagess/we-go-up-bg.jpeg',
        './imagess/boom-bg.jpeg',
        './imagess/ridin-bg.jpg',
        './imagess/hot-sauce-bg.webp',
        './imagess/hello-future-bg.jpg',
        './imagess/glitch-mode-bg.jpg',
        './imagess/beatbox-bg.jpg',
        './imagess/candy-bg.jpg',
        './imagess/bfe-bg.webp',
        './imagess/broken-melodies-bg.jpg',
        './imagess/istj-bg.jfif',
        './imagess/poison-bg.png',
        './imagess/smoothie-bg.webp'
    ];

    // Function to change background image and content
    function changeBgAndContent(index) {
        // Change background image
        const banner = document.querySelector('.banner');
        banner.style.background = `url(${backgroundImages[index]}) no-repeat center center/cover`;

        // Change active content based on index
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => content.classList.remove('active'));
        
        switch (index) {
            case 0:
                changeContentJisung();
                break;
            case 1:
                changeContentMarkMfal();
                break;
            case 2:
                changeContentWeYoung();
                break;
            case 3:
                changeContentGo();
                break;
            case 4:
                changeContentWeGoUp();
                break;
            case 5:
                changeContentBoom();
                break;
            case 6:
                changeContentRidin();
                break;
            case 7:
                changeContentHotSauce();
                break;
            case 8:
                changeContentHelloFuture();
                break;
            case 9:
                changeContentGlitchMode();
                break;
            case 10:
                changeContentBeatbox();
                break;
            case 11:
                changeContentCandy();
                break;
            case 12:
                changeContentBestFriendEver();
                break;
            case 13:
                changeContentBrokenMelodies();
                break;
            case 14:
                changeContentIstj();
                break;
            case 15:
                changeContentPoison();
                break;
            case 16:
                changeContentSmoothie();
                break;
        }

        contents[index].classList.add('active');
    }

    function changeContentJisung() {
        const content = document.querySelector('.content.jisung');
        content.innerHTML = `
           <img src="/banner/cg banner.png" alt="" class="movie-title">
        <h4>
            <span>2016</span><span><i>7+</i></span>
            <span>3m 21s</span><span>NCT DREAM</span>
        </h4>
        <p>
            <h3>Aug 24, 2016</h3>
            <h5>NCT (Neo Culture Technology)’s teenage boy team “NCT DREAM” has its their debut single “Chewing Gum”.
            Listen and download on iTunes & Apple Music, Spotify, and Google Play Music </h5>
            <h6>NCT DREAM 엔시티 드림 'Chewing Gum' MV ℗ S.M.Entertainment</h6>
        </p>
        <div class="button">
            <a href="#"><i class="fa fa-play" aria-hidden="true"></i> watch</a>
            <a href="#"><i class="fa fa-plus" aria-hidden="true"></i> my list</a>
        </div>
    `;
}

    // Function to change content for Mark Mfal
    function changeContentMarkMfal() {
        const content = document.querySelector('.content.markmfal');
        content.innerHTML = `
           <img src="/banner/mfal banner.png" alt="" class="movie-title">
        <h4>
            <span>2017</span><span><i>7+</i></span>
            <span>3m 27s</span><span>NCT DREAM</span>
        </h4>
        <p>
            <h3>Aug 24, 2017</h3>
            <h5>NCT DREAM's 1st single “The First” has been released. 
                Listen and download on iTunes & Apple Music, Spotify, and Google Play Music </h5>
            <h6>NCT DREAM 엔시티 드림 '마지막 첫사랑 (My First and Last)' MV ℗ S.M.Entertainment</h6>
        </p>
        <div class="button">
            <a href="#"><i class="fa fa-play" aria-hidden="true"></i> watch</a>
            <a href="#"><i class="fa fa-plus" aria-hidden="true"></i> my list</a>
        </div>
    `;
}
