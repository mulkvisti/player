new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          artist: "Cornerstone",
          name: "Arctic Monkeys",
          cover: "https://github.com/mulkvisti/player/blob/main/img/1.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/1.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=LIQz6zZi7R0",
          favorited: false
        },
        {
          artist: "Come as You Are",
          name: "Evan Peters",
          cover: "https://github.com/mulkvisti/player/blob/main/img/2.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/2.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=jXX--sSjs1c&t=24s",
          favorited: false
        },
        {
          artist: "Accidentally In Love",
          name: "Counting Crows",
          cover: "https://github.com/mulkvisti/player/blob/main/img/3.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/3.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=vnBec1gpXSM",
          favorited: false
        },
        {
          artist: "Falling for Ya",
          name: "Teen Beach Movie",
          cover: "https://github.com/mulkvisti/player/blob/main/img/4.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/4.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=pJsze1Nx-bg",
          favorited: false
        },
        {
          artist: "Sand: A Star Wars Story",
          name: "Anakin",
          cover: "https://github.com/mulkvisti/player/blob/main/img/5.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/5.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=_60Jfwsylb8&t=9s",
          favorited: false
        },
        {
          artist: "Aqui Tem Promoção",
          name: "Fozzie",
          cover: "https://github.com/mulkvisti/player/blob/main/img/6.png?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/6.mp3?raw=true",
          url: "https://www.youtube.com/shorts/Tc6fw0hnZkc",
          favorited: false
        },
        {
          artist: "Vejo Enfim a Luz Brilhar",
          name: "Enrolados",
          cover: "https://github.com/mulkvisti/player/blob/main/img/7.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/7.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=sRITrFmTT3s",
          favorited: false
        },
        {
          artist: "Verdadeiro Beijo de Amor",
          name: "Encantada",
          cover: "https://github.com/mulkvisti/player/blob/main/img/8.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/8.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=o2a5Rr7bSTo",
          favorited: false
        },
        {
          artist: "Acorda Amor",
          name: "Chico Buarque",
          cover: "https://github.com/mulkvisti/player/blob/main/img/9.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/9.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=2fGXPgVoV7A",
          favorited: false
        },
        {
          artist: "Homem ou Muppet",
          name: "Marshall",
          cover: "https://github.com/mulkvisti/player/blob/main/img/10.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=UlqRvh_KEKw&t=19s",
          favorited: false
        },
        {
          artist: "Life On Mars",
          name: "Jessica Lange",
          cover: "https://github.com/mulkvisti/player/blob/main/img/11.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/11.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=2zX0lxiM8Xo",
          favorited: false
        },
        {
          artist: "Filha da Terra e do Mar",
          name: "Pequena Sereia II",
          cover: "https://github.com/mulkvisti/player/blob/main/img/12.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/12.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=LCfrlHJ0lN8&t=86s",
          favorited: false
        },
        {
          artist: "Like Me",
          name: "Teen Beach Movie",
          cover: "https://github.com/mulkvisti/player/blob/main/img/13.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/13.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=uL4ntL58hfk",
          favorited: false
        },
        {
          artist: "Eu Vou Te Dar O Que Você Quiser",
          name: "Muppets",
          cover: "https://github.com/mulkvisti/player/blob/main/img/14.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/14.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=6fJzPI1Np2w",
          favorited: false
        },
        {
          artist: "Surf Crazy",
          name: "Teen Beach Movie",
          cover: "https://github.com/mulkvisti/player/blob/main/img/15.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/15.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=83KB-BM5lXI",
          favorited: false
        },
        {
          artist: "Gods & Monsters",
          name: "Jessica Lange",
          cover: "https://github.com/mulkvisti/player/blob/main/img/16.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/16.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=4tCuf3SGHTU",
          favorited: false
        },
        {
          artist: "A Coisa Principal",
          name: "Temos Que Dizer",
          cover: "https://github.com/mulkvisti/player/blob/main/img/17.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/17.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=REJjUB9Bc90&t=11s",
          favorited: false
        },
        {
          artist: "Veruca Salt",
          name: "A Sem Noção",
          cover: "https://github.com/mulkvisti/player/blob/main/img/18.jpg?raw=true",
          source: "https://github.com/mulkvisti/player/blob/main/mp3/18.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=n1ShT0caa2U&t=19s",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
