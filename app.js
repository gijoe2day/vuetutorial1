new Vue({
  el: '#vue-app',
  data: {
    name: '',
    age: 35,
    website: 'www.marketplacecolombia.co',
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false,
    characters: ['joe', 'jay', 'jul', 'jim'],
    ninjas: [
      { name: 'Gio', age: 7 },
      { name: 'Vane', age: 8 },
      { name: 'Erne', age: 9 },
    ],
  },
  methods: {
    greet: function () {
      return `Goodmorning ` + this.name + ' your age is ' + this.age;
    },

    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    logName: function () {

    },

    logAge: function () {
      age = this.age;
    },
/*
    addToA: function () {
      console.log('addToA');
      return this.a + this.age;
    },

    addToB: function () {
      return this.b + this.age;
    },*/
  },

  computed: {
    addToA: function () {
      console.log('addToA');
      return this.a + this.age;
    },

    addToB: function () {
      return this.b + this.age;
    },

    compClass: function () {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
  },
});
