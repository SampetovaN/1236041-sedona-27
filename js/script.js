'use strict';

var searchHotelBtn = document.querySelector('.search-hotels-form-btn');
var searchHotelForm = document.querySelector('.search-hotel');
var startDateCalendar = searchHotelForm.querySelector('.start-date-calendar');
var startDate = searchHotelForm.querySelector('[name=start-date]');
var endDate = searchHotelForm.querySelector('[name=end-date]');
var adultsAmount = searchHotelForm.querySelector('[name=adults-amount]');
var childrenAmount = searchHotelForm.querySelector('[name=children-amount]');
var storageChildAmount = '';
var storageAdultAmount = '';
var isStorageSupp = true;

try {
  storageChildAmount = localStorage.getItem('children-amount');
  storageAdultAmount = localStorage.getItem('adult-amount');
} catch (err) {
  isStorageSupp = false;
}

searchHotelForm.classList.add('search-hotel-hidden');
searchHotelBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchHotelForm.classList.toggle('search-hotel-popup');
  searchHotelForm.classList.toggle('search-hotel-hidden');
  startDateCalendar.focus();
  if (isStorageSupp) {
    if (storageChildAmount) {
      childrenAmount.value = storageChildAmount;
    }
    if (storageAdultAmount) {
      adultsAmount.value = storageAdultAmount;
    }
  }
});

searchHotelForm.addEventListener('submit', function (evt) {
  if (!startDate.value || !endDate.value || !adultsAmount.value || !childrenAmount.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem('adult-amount', adultsAmount.value);
    localStorage.setItem('children-amount', childrenAmount.value);
  }

});

