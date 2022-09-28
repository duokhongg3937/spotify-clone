
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let newIndex;

const songList = $('.playlist__list');
const playerSongBody = $('.player__song-body');
const playlistContainer = $('.playlist__container');
const topGenresContainer = $('.top-genres__container');
const topGenresSection = $('.top-genres-section');

const audio = $('#audio');
const player = $('.app__player');
const cdThumb = $('.thumb-img');
const trackTime = $('.tracktime');
const durationTime = $('.duration-time');
const progress = $('.progress');
const progressTrack = $('.progress__track');
const progressTrackUpdate = $('.progress__track-update');

const playBtn = $('.btn-toggle-play');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');

const songAnimateTitle = $('.player__title-animate');
const playerSongTitle = $('.player__song-title');
const titleItems = Array.from($$('.title-item'));
const titleItem = $('.title-item');
const authorItem = $('.author-item');
const headerBg = $('.app__header-bg');


const app = {
    // variebles for those functions below
    currentIndex: 0,
    currentPlaylistIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isSeeking: false,
    slideTitleWidth: 0,

    topGenres: [
        {
            heading: 'Pop',
            path: 'https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3',
            bgColor: '#8D67AB'
        },
        {
            heading: 'Hip-Hop',
            path: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
            bgColor: '#BA5D07'
        }
    ],
    playlists: [
        {
            heading: 'Podcasts',
            path: './assets/image/user.png',
            bgColor: '#27856A'
        },
        {
            heading: 'Made For You',
            path: 'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/296428206_3284721445185818_8289456726465626247_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=apPvP4vYwAQAX8NhvDI&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT-TwY0jLwK9bMXmpdGXFB1wb7RYYkymXvjVQHeV364yNQ&oe=6310498E',
            bgColor: '#1E3264'
        },
        {
            heading: 'Charts',
            path: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/282376488_709842633620728_9000380795079986928_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=viz0KJeHFU0AX92ce62&_nc_ht=scontent.fsgn5-14.fna&oh=03_AVLLsHsAQoHnxMwg4G2KaWPGWowkAxUYkONns0ktFdjmJA&oe=63321FFD',
            bgColor: '#BA5D07'
        },
        {
            heading: 'New Releases',
            path: './assets/image/pic4.jpg',
            bgColor: '#E8115B'
        },
        {
            heading: 'Live Events',
            path: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/281495907_768874707812558_3314133379881533415_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RS-PFWgwahkAX9aExUs&_nc_ht=scontent.fsgn5-5.fna&oh=03_AVJxW0kBDDrUJ6bnB0rce7N8GR1pZnyD68zGPQ75ZzzEDA&oe=63300F0E',
            bgColor: '#B49BC8'
        },
        {
            heading: 'Discover',
            path: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
            bgColor: '#8D67AB'
        },
        {
            heading: 'Vietnamese Music',
            path: './assets/image/user.png',
            bgColor: '#8C1932'
        },
        {
            heading: 'Ambient',
            path: './assets/image/user.png',
            bgColor: '#477D95'
        },
        {
            heading: 'Kids & Family',
            path: './assets/image/user.png',
            bgColor: '#8D67AB'
        },
        {
            heading: 'Radar',
            path: './assets/image/user.png',
            bgColor: '#9CF0E1'
        },
        {
            heading: 'Indie',
            path: './assets/image/user.png',
            bgColor: '#DC148C'
        },
        {
            heading: 'Trending',
            path: './assets/image/user.png',
            bgColor: '#777777'
        },
        {
            heading: 'Sleep',
            path: './assets/image/user.png',
            bgColor: '#1E3264'
        },
        {
            heading: 'Workout',
            path: './assets/image/user.png',
            bgColor: '#FFC864'
        }
    ],
    songs: [
        [{
            name: 'Ái nộ',
            singer: 'Masew',
            path: './assets/songs/song1.mp3',
            image: './assets/image/pic1.jpg'
        },
        {
            name: 'Em khác gì hoa',
            singer: 'Lil Zpoet',
            path: './assets/songs/song2.mp3',
            image: './assets/image/pic2.jpg'
        },
        {
            name: 'Ánh sao và bầu trời',
            singer: 'Masew',
            path: './assets/songs/song4.mp3',
            image: './assets/image/pic4.jpg'
        },
        {
            name: 'Vì anh đâu có biết',
            singer: 'Vũ.',
            path: './assets/songs/song3.mp3',
            image: './assets/image/pic3.jpg'
        },
        {
            name: 'đứa nào làm em buồn?',
            singer: 'Phúc Du, Hoàng Dũng',
            path: './assets/songs/song5.mp3',
            image: './assets/image/pic5.jfif'
        },
        {
            name: 'Có em',
            singer: 'Madihu, Low G',
            path: './assets/songs/song6.mp3',
            image: './assets/image/pic6.jfif'
        },
        {
            name: 'bao tiền một mớ bình yên?',
            singer: '14 Casper, Bon Nghiêm',
            path: './assets/songs/song7.mp3',
            image: './assets/image/pic7.jfif'
        },
        {
            name: 'từ thích thích thành thương thương',
            singer: 'AMEE, Hoàng Dũng',
            path: './assets/songs/song8.mp3',
            image: './assets/image/pic8.jfif'
        },
        {
            name: 'hai mươi hai (22)',
            singer: 'Hứa Kim Tuyền, AMEE',
            path: './assets/songs/song9.mp3',
            image: './assets/image/pic9.jfif'
        },
        ],
        [{
            name: 'Ái nộ',
            singer: 'Masew',
            path: './assets/songs/song1.mp3',
            image: './assets/image/pic1.jpg'
        },
        {
            name: 'Em khác gì hoa',
            singer: 'Lil Zpoet',
            path: './assets/songs/song2.mp3',
            image: './assets/image/pic2.jpg'
        },
        {
            name: 'Ánh sao và bầu trời',
            singer: 'Masew',
            path: './assets/songs/song4.mp3',
            image: './assets/image/pic4.jpg'
        },
        {
            name: 'Vì anh đâu có biết',
            singer: 'Vũ.',
            path: './assets/songs/song3.mp3',
            image: './assets/image/pic3.jpg'
        }],
        []
    ],

    renderSong: function () {
        // render danh sách bài hát 
        const songsHtmls = this.songs[this.currentPlaylistIndex].map((song, index) => {
            return `
        <div class="playlist__list-song index-${index} ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
            <span class="playlist__song-index">${index + 1}</span>
            <div class="playlist__song-info">
                <div class="playlist__song-thumb" style="background: url('${song.image}') no-repeat center center / cover">
                    <div class="thumb--animate">
                        <div class="thumb--animate-img" style="background: url('./assets/image/icon-playing.gif') no-repeat 50% / contain;"></div>
                    </div>
                    <div class="play-song--actions">
                        <div class="control-btn btn-toggle-play btn--play-song">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="playlist__song-body">
                    <span class="playlist__song-title">${song.name}</span>
                    <p class="playlist__song-author">${song.singer}</p>
                </div>
            </div>
            <span class="playlist__song-time">4:30</span>
            <div class="playlist__song-option">
                <div class="playlist__song-btn btn--mic">
                    <i class="fa-solid fa-microphone"></i>
                </div>
                <div class="playlist__song-btn btn--heart">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <div class="playlist__song-btn btn--options">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </div>
        `
        });
        songList.innerHTML = songsHtmls.join('');
    },
    alternateActiveSong: function () {
        const activeSong = $('.playlist__list-song.active');
        const alternateSong = $(`.playlist__list-song.index-${this.currentIndex}`);
        activeSong.classList.remove('active');
        alternateSong.classList.add('active');
    },
    render: function () {
        // render top genres ra giao diện từ array topGenres
        const topGenresHtmls = this.topGenres.map((topGenre, index) => {
            return `
                <div class="playlist__item" style="background-color: ${topGenre.bgColor};" data-index="${index}">
                    <h3 class="playlist__heading">${topGenre.heading}</h3>
                    <img src="${topGenre.path}" alt="" class="playlist__img">
                    <div class="playlist__btn-play-all">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>
            `
        });
        topGenresContainer.innerHTML = topGenresHtmls.join('');

        // render các album bài hát ra giao diện từ array playlists
        const playlistHtmls = this.playlists.map(playlist => {
            return `
                <div class="playlist__item" style="background-color: ${playlist.bgColor};">
                    <h3 class="playlist__heading">${playlist.heading}</h3>
                    <img src="${playlist.path}" alt="" class="playlist__img">
                    <div class="playlist__btn-play-all">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>
            `
        });
        playlistContainer.innerHTML = playlistHtmls.join('');
        this.renderSong();
    },

    handleEvents: function () {
        const _this = this;

        // xử lí cd quay / dừng
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();

        // xử lí khi click nút play
        playBtn.onclick = () => {
            if (!_this.isPlaying) {
                audio.play();
            }
            else {
                audio.pause();
            }
        }

        // xử lí khi song được play
        audio.onplay = () => {
            _this.isPlaying = true;
            player.classList.add('playing');
            songList.classList.add('playing');
            cdThumbAnimate.play();
            _this.titleAnimate(titleItems[0]).play();
            _this.titleAnimate(titleItems[1]).play();
        }

        // xử lí khi song bị pause
        audio.onpause = () => {
            _this.isPlaying = false;
            player.classList.remove('playing');
            songList.classList.remove('playing');
            cdThumbAnimate.pause();
        }

        // xử lí khi tua song
        progress.onchange = (e) => {
            audio.currentTime = e.target.value * audio.duration / 100;
        }

        // xử lí khi tiến độ bài hát thay đổi
        audio.ontimeupdate = (e) => {
            if (audio.duration) {
                if (!_this.isSeeking) {
                    const progressPercent = Math.round(audio.currentTime / audio.duration * 100);
                    progressTrackUpdate.style.width = progressPercent + '%'
                    progress.value = progressPercent;
                    trackTime.innerHTML = this.audioCalTime(audio.currentTime);
                    durationTime.innerHTML = this.audioCalTime(audio.duration);
                } else {
                    progress.onchange = (e) => {
                        audio.currentTime = e.target.value * audio.duration / 100;
                    }
                }
            }
        }

        // xử lí khi tua bài hát
        function currentTime() {
            if (_this.isSeeking) {
                let seekTime;
                progress.oninput = (e) => {
                    seekTime = e.target.value * audio.duration / 100;
                    progressTrackUpdate.style.width = e.target.value + '%';
                    trackTime.innerHTML = _this.audioCalTime(seekTime);
                }
            }
        }
        progress.onmousemove = currentTime;
        progress.addEventListener('touchmove', currentTime);
        function seekStart() {
            if (audio.duration) {
                _this.isSeeking = true;
            }
        }
        function seekEnd() {
            _this.isSeeking = false;
        }
        progress.addEventListener('mousemove', seekStart);
        progress.onmousedown = seekStart;
        progress.onmouseup = seekEnd;
        progress.ontouchstart = seekStart;
        progress.ontouchend = seekEnd;


        // xử lí khi click next
        nextBtn.onclick = () => {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            _this.alternateActiveSong();
            audio.play();
        }

        // xử lí khi click prev
        prevBtn.onclick = () => {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            _this.alternateActiveSong();
            audio.play();
        }

        // xử lí bật tắt random song
        randomBtn.onclick = () => {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active', _this.isRandom);
        }

        // xử lí bật tắt repeat song
        repeatBtn.onclick = () => {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        // xử lí next song khi audio ended
        audio.onended = () => {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        }

        songList.onclick = (e) => {
            const songNode = e.target.closest('.playlist__list-song:not(.active)');
            const micNode = e.target.closest('.btn--mic');
            const heartNode = e.target.closest('.btn--heart');
            const optionsNode = e.target.closest('.btn--options');
            if (songNode && !micNode && !heartNode && !optionsNode) {
                _this.currentIndex = Number(songNode.dataset.index);
                _this.loadCurrentSong();
                _this.alternateActiveSong();
                audio.play();
            }
        }

        topGenresSection.onclick = (e) => {
            const item = e.target.closest('.playlist__item');
            console.log(item);
            if (item) {
                _this.currentPlaylistIndex = Number(item.dataset.index);
                _this.currentIndex = 0;
                _this.renderSong();
                _this.loadCurrentSong();
                audio.play();
            }
            $('.app__container').scrollTop = 0;
        }
    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentPlaylistIndex][this.currentIndex];
            }
        })
    },

    // tải thông tin bài hát hiện tại vào player và audio
    loadCurrentSong: function () {
        titleItems.forEach(item => {
            item.innerText = this.currentSong.name;
        });
        authorItem.innerText = this.currentSong.singer;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        headerBg.style.backgroundImage = `url('${this.currentSong.image}')`;
        this.setPlayerInfoWidth();
        audio.src = this.currentSong.path;
    },

    // thao tác chuyển bài hát theo yêu cầu user
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs[this.currentPlaylistIndex].length) this.currentIndex = 0;
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) this.currentIndex = this.songs[this.currentPlaylistIndex].length - 1;
        this.loadCurrentSong();
    },
    playRandomSong: function () {
        do {
            newIndex = Math.floor(Math.random() * this.songs[this.currentPlaylistIndex].length);
        } while (newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    // thiết lập width cho tiêu đề bài hát hiện tại
    setPlayerInfoWidth: function () {
        playerSongTitle.style.width = songAnimateTitle.offsetWidth / 2 + 'px';
        this.slideTitleWidth = playerSongTitle.offsetWidth;
    },

    // chuyển động của title
    titleAnimate(title) {
        const titleAnimate = title.animate([
            { transform: 'translate(0px)' },
            { transform: `translateX(-${this.slideTitleWidth}px)` }
        ], {
            duration: 21 * this.slideTitleWidth,
            iterations: Infinity
        })
        titleAnimate.pause();
        return titleAnimate;
    },

    // hàm chuyển time về dạng mm:ss
    audioCalTime: function (time) {
        let min, sec;
        if (time) {
            min = Math.floor(time / 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            sec = Math.floor(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        } else {
            min = (0).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            sec = (0).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        }
        return `${min}:${sec}`;
    },

    start: function () {
        // định nghĩa các thuộc tính của object
        this.defineProperties();

        // lắng nghe và xử lí các sự kiện
        this.handleEvents();

        // tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // render ra giao diện
        this.render();
    }
}

app.start();
