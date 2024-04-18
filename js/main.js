const { createApp } = Vue;

createApp({
  data() {
    return {
      activeIndex: 0,

      slider: {
        images: [
          "./img/01.webp",
          "./img/02.webp",
          "./img/03.webp",
          "./img/04.webp",
          "./img/05.webp"
        ],
        titles: [
          `Marvel's Spiderman Miles Morale`,
          `Ratchet & Clank: Rift Apart`,
          "Fortnite",
          "Stray",
          "Marvel's Avengers"
        ],
        messages: [
          `Experience the rise of Miles Morales as the new hero
            masters incredible, explosive new powers to become his own
            Spider-Man.`,

          `Go dimension-hopping with Ratchet and Clank as they take
            on an evil emperor from another reality.`,

            "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",

            "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",

            "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
        ]
      }
    }
  },
  methods : {
    myBtnRight() {
      if (this.activeIndex < this.slider.images.length - 1) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0;
      }
    },
    myBtnLeft() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      } else {
        this.activeIndex = this.slider.images.length - 1;
      }
    }
  }
}).mount(`#app`);