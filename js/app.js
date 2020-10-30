'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieTable = document.getElementById('cookie-table');
var grandTotalArray = [];
var totalOfTotals = 0;
var getStoresArray = [];
var cookieHours = document.getElementById('cookie-table');
var myForm = document.getElementById('cookiestore');
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
    for (var i = 0; i < hours.length; i++) {
      this.customerPerHour.push(getcustvalue(this.min, this.max));
    }
  };
  this.getCookies = function () {
    this.totalPerDay = 0;
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
new Cities('Seattle', '23', '65', '6.3');
new Cities('Tokyo', '3', '24', '1.2');
new Cities('Dubai', '11', '38', '3.7');
new Cities('Paris', '20', '38', '2.3');
new Cities('Lima', '2', '16', '2.6');
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
  th1.textContent = 'Totals';
  cookieHours.appendChild(th1);
  for (var j = 0; j < hours.length; j++) {
    var th = document.createElement('th');
    th.textContent = `${grandTotalArray[j]}`;
    cookieHours.appendChild(th);
  }
  var total = document.createElement('th');
  total.textContent = totalOfTotals;
  cookieHours.appendChild(total);
}
function getTotals() {
  grandTotalArray = [];
  totalOfTotals = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < getStoresArray.length; j++) {
      hourlyTotal += getStoresArray[j].cookiesPerHour[i];
    }
    grandTotalArray.push(hourlyTotal);
    totalOfTotals += hourlyTotal;
  }
}
function handleSubmit(event) {
  event.preventDefault();
  var storeName = event.target.cookiestorename.value;
  var maxCust = event.target.maxCust.value;
  var minCust = event.target.minCust.value;
  var perHour = event.target.perHour.value;
  new Cities(storeName, minCust, maxCust, perHour);
  var table = document.getElementById('cookie-table');
  table.innerHTML = '';
  renderTable();
}
myForm.addEventListener('submit', handleSubmit);
function renderTable() {
  renderHeader();
  for (var i = 0; i < getStoresArray.length; i++) {
    getStoresArray[i].render();
  }
  getTotals();
  renderFooter();
}
renderTable();
