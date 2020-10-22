'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieTable = document.getElementById('cookie-table');


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
  this.getCust = function () {
    for (var i = 0; i < hours.length; i++) {
      this.customerPerHour.push(getcustvalue(this.min, this.max));
    }
  };

  this.getCookies = function () {
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


var cookieHours = document.getElementById('cookie-table');
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

// var grandTotalArray = {
//   hours
//   cookieHours
// }

// for (var i = 0; i < hours.length; i++){
//   for (var j = 0; j < getCookies[i].length; i++){

//   }
// }


// exacutable code
seattleCons.render();
tokyoCons.render();
dubaiCons.render();
parisCons.render();
limaCons.render();

