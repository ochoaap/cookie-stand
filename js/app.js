'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieTable = document.getElementById('cookie-table');
var grandTotalArray = [];
var totalOfTotals = 0;
var getStoresArray = [];
var cookieHours = document.getElementById('cookie-table');
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
    this.getCust();
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.avgCookies));
      this.totalPerDay += Math.floor(this.customerPerHour[i] * this.avgCookies);
    }
  },
  render: function () {
    this.getCookies();
    var parentElement = document.getElementById('seattle');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]}; ${this.cookiesPerHour[i]} cookies`;
      parentElement.appendChild(li);
    }
  }
};

// received this function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getcustvalue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}

// constructor

function Cities(name, min, max, avgCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
  this.totalPerDay = 0;
  getStoresArray.push(this);
  this.getCust = function () {

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
  };

  this.getCookies = function () {
  getCookies: function () {

    this.getCust();
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.avgCookies));
      this.totalPerDay += Math.floor(this.customerPerHour[i] * this.avgCookies);
    }
  };
  this.render = function () {
    this.getCookies();
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);
  },
  render: function () {
    this.getCookies();
    var tParentElement = document.getElementById('tokyo');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]}; ${this.cookiesPerHour[i]} cookies`;
      tParentElement.appendChild(li);
    }
  }
};

// received this function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getcustvalue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}
// dubai

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
    this.getCust();
    for (var i = 0; i < hours.length; i++) {
      td = document.createElement('td');
      td.textContent = this.cookiesPerHour[i];
      tr.appendChild(td);
    }
    td = document.createElement('td');
    td.textContent = this.totalPerDay;
    tr.appendChild(td);
    cookieTable.appendChild(tr);

  };
}

var seattleCons = new Cities('Seattle', '23', '65', '6.3');
var tokyoCons = new Cities('Tokyo', '3', '24', '1.2');
var dubaiCons = new Cities('Dubai', '11', '38', '3.7');
var parisCons = new Cities('Paris', '20', '38', '2.3');
var limaCons = new Cities('Lima', '2', '16', '2.6');

function renderHeader() {
  var th1 = document.createElement('th');
  cookieHours.appendChild(th1);
  for (var j = 0; j < hours.length; j++) {
    var th = document.createElement('th');
    th.textContent = `${hours[j]}`;
    cookieHours.appendChild(th);

  }

  var total = document.createElement('th');
  total.textContent = 'Total';
  cookieHours.appendChild(total);
}

function renderFooter() {
  var th1 = document.createElement('th');
  th1.textContent= 'Totals';
  cookieHours.appendChild(th1);
  for (var j = 0; j < hours.length; j++) {
    var th = document.createElement('th');
    th.textContent = `${grandTotalArray[j]}`;
    cookieHours.appendChild(th);
  },
  render: function () {
    this.getCookies();
    var dParentElement = document.getElementById('dubai');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]}; ${this.cookiesPerHour[i]} cookies`;
      dParentElement.appendChild(li);
    }
  }
};

// received this function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getcustvalue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}



// Paris

var paris = {
  name: 'paris',
  min: 20,
  max: 38,
  avgCookies: 2.3,
  customerPerHour: [],
  cookiesPerHour: [],
  totalPerDay: 0,
  getCust: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customerPerHour.push(getcustvalue(this.min, this.max));
    }
  },

  getCookies: function () {
    this.getCust();
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.avgCookies));
      this.totalPerDay += Math.floor(this.customerPerHour[i] * this.avgCookies);
    }
  },
  render: function () {
    this.getCookies();
    var pParentElement = document.getElementById('paris');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]}; ${this.cookiesPerHour[i]} cookies`;
      pParentElement.appendChild(li);
    }
  }
};

// received this function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getcustvalue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}



  }

  var total = document.createElement('th');
  total.textContent = totalOfTotals;
  cookieHours.appendChild(total);
}

function getTotals() {
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < getStoresArray.length; j++) {
      hourlyTotal += getStoresArray[j].cookiesPerHour[i];
    }
    grandTotalArray.push(hourlyTotal);
    totalOfTotals += hourlyTotal;
  }
}

// exacutable code
renderHeader();
seattleCons.render();
tokyoCons.render();
dubaiCons.render();
parisCons.render();
limaCons.render();
getTotals();
renderFooter();

// Lima

var lima = {
  name: 'lima',
  min: 2,
  max: 14,
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
    this.getCust();
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.avgCookies));
      this.totalPerDay += Math.floor(this.customerPerHour[i] * this.avgCookies);
    }
  },
  render: function () {
    this.getCookies();
    var lParentElement = document.getElementById('lima');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours[i]}; ${this.cookiesPerHour[i]} cookies`;
      lParentElement.appendChild(li);
    }
  }
};

// received this function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getcustvalue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
