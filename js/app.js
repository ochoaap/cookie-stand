'use strict';

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  randomCust: 0,
  avgPerCust: 0,
  cookiesPerHour: 0,
  totalPerDay: 0,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm'],

  getCust: function () {
    seattle.randomCust = customerPerDay(23,65);
  },
  getcookies: function() {
  cookiesPerHour = 
  }

};

function customerPerDay (min, max) {
  return Math.floor(Math.random() * (max - min + 1)
 + min);
}
function cookiesPerHour (customerPerDay, avgCookies)