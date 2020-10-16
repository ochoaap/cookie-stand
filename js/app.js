'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  customerPerHour: [],
  //randomCust: 0,
  //avgPerCust: 0,
  cookiesPerHour: [],
  totalPerDay: 0,
  getCust: function () {
    for(var i = 0; i < hours.length; i++) {
      this.customerPerHour.push(getcustvalue(this.min,this.max));
    }
  getCookies: function () {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(getCookvalue(this.customerPerHour,this.avgCookies));
    }
  }
  },
};
seattle.getCust();

// received this function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getcustvalue (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}
function getCookies ()

console.log(seattle)