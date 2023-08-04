Vue.createApp({
  data() {
    return {
      x: null,
      y: null,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    handleMouseMove(event) {
      const deadSpot = document.querySelector(".dead-spot");
      if (deadSpot && deadSpot.contains(event.target)) {
        return (this.x = null), (this.y = null);
      }
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    removeFruit(index) {
      this.fruitBasket.splice(index, 1);
    },
  },
}).mount("#app");
