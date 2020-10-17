'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  customerPerHour: [],
  cookiesPerHour: [],
  totalPerDay: 0,
  getCust: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customerPerHour.push(getcustvalue(this.min, this.max));
    }
  },

  getCookies: function () {
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.avgCookies));
      this.totalPerDay += Math.floor(this.customerPerHour[i] * this.avgCookies);
    }
  },
};
seattle.getCust();
seattle.getCookies();

// received this function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getcustvalue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}
console.log(seattle);


var parentElement = document.getElementById('seattle');

var list = document.createElement('ul');
parentElement.appendChild(list);


for (var i = 0; i < hours.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${hours[i]}; ${seattle.cookiesPerHour[i]} cookies`;
  list.appendChild(li);
}

// Tokyo

var tokyo = {
  name: 'tokyo',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  customerPerHour: [],
  cookiesPerHour: [],
  totalPerDay: 0,
  getCust: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customerPerHour.push(getcustvalue(this.min, this.max));
    }
  },

  getCookies: function () {
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.avgCookies));
      this.totalPerDay += Math.floor(this.customerPerHour[i] * this.avgCookies);
    }
  },
};
tokyo.getCust();
tokyo.getCookies();

// received this function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getcustvalue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}
console.log(tokyo);


var parentElement = document.getElementById('tokyo');

var list = document.createElement('ul');
parentElement.appendChild(list);


for (var i = 0; i < hours.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${hours[i]}; ${seattle.cookiesPerHour[i]} cookies`;
  list.appendChild(li);
}

// Dubai

var dubai = {
  name: 'dubai',
  min: 11,
  max: 38,
  avgCookies: 3.7,
  customerPerHour: [],
  cookiesPerHour: [],
  totalPerDay: 0,
  getCust: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customerPerHour.push(getcustvalue(this.min, this.max));
    }
  },

  getCookies: function () {
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.avgCookies));
      this.totalPerDay += Math.floor(this.customerPerHour[i] * this.avgCookies);
    }
  },
};
dubai.getCust();
dubai.getCookies();

// received this function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getcustvalue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}
console.log(dubai);


var parentElement = document.getElementById('dubai');

var list = document.createElement('ul');
parentElement.appendChild(list);


for (var i = 0; i < hours.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${hours[i]}; ${seattle.cookiesPerHour[i]} cookies`;
  list.appendChild(li);
}


// Paris

var paris = {
  name: 'paris',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  customerPerHour: [],
  cookiesPerHour: [],
  totalPerDay: 0,
  getCust: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customerPerHour.push(getcustvalue(this.min, this.max));
    }
  },

  getCookies: function () {
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.avgCookies));
      this.totalPerDay += Math.floor(this.customerPerHour[i] * this.avgCookies);
    }
  },
};
paris.getCust();
paris.getCookies();

// received this function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getcustvalue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}
console.log(paris);


var parentElement = document.getElementById('paris');

var list = document.createElement('ul');
parentElement.appendChild(list);


for (var i = 0; i < hours.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${hours[i]}; ${seattle.cookiesPerHour[i]} cookies`;
  list.appendChild(li);
}

// lima

var lima = {
  name: 'lima',
  min: 2,
  max: 16,
  avgCookies: 4.6,
  customerPerHour: [],
  cookiesPerHour: [],
  totalPerDay: 0,
  getCust: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customerPerHour.push(getcustvalue(this.min, this.max));
    }
  },

  getCookies: function () {
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.avgCookies));
      this.totalPerDay += Math.floor(this.customerPerHour[i] * this.avgCookies);
    }
  },
};
lima.getCust();
lima.getCookies();

// received this function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getcustvalue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}
//console.log(tokyo);


var parentElement = document.getElementById('lima');

var list = document.createElement('ul');
parentElement.appendChild(list);


for (var i = 0; i < hours.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${hours[i]}; ${seattle.cookiesPerHour[i]} cookies`;
  list.appendChild(li);
}
