'use strict';

var searchHotelBtn = document.querySelector('.search-hotels-form-btn');
var searchHotelForm = document.querySelector('.search-hotel-modal');
var filterHotelForm = document.querySelector('.filter-hotel');

if(filterHotelForm){
  var costFilterHotel = filterHotelForm.querySelectorAll('[type=text]');
}

if(searchHotelForm) {
  var startDate = searchHotelForm.querySelector('[name=start-date]');
  var allInputHotelForm = searchHotelForm.querySelectorAll('.search-hotel-input');
  var adultsAmount = searchHotelForm.querySelector('[name=adults-amount]');
  var childrenAmount = searchHotelForm.querySelector('[name=children-amount]');
}

var storageChildAmount = '';
var storageAdultAmount = '';
var isStorageSupp = true;

try {
  storageChildAmount = localStorage.getItem('children-amount');
  storageAdultAmount = localStorage.getItem('adult-amount');
} catch (err) {
  isStorageSupp = false;
}


if (searchHotelForm){
  searchHotelForm.classList.add('search-hotel-hidden');
  searchHotelForm.addEventListener('submit', function (evt) {
    var inputIsValid = true;
    for (var i = 0; i < allInputHotelForm.length; i++){
      if (!allInputHotelForm[i].value){
        inputIsValid = false;
        break;
      }
    }
    if (!inputIsValid) {
      evt.preventDefault();
    } else {
      localStorage.setItem('adult-amount', adultsAmount.value);
      localStorage.setItem('children-amount', childrenAmount.value);
    }

  });
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27){
      if (searchHotelForm.classList.contains('search-hotel-popup')){
        evt.preventDefault();
        searchHotelForm.classList.remove('search-hotel-popup');
        searchHotelForm.classList.add('search-hotel-hidden');
      }
    }
  });
}

if (searchHotelBtn) {
  searchHotelBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    searchHotelForm.classList.toggle('search-hotel-popup');
    searchHotelForm.classList.toggle('search-hotel-hidden');
    startDate.focus();
    if (isStorageSupp) {
      if (storageChildAmount) {
        childrenAmount.value = storageChildAmount;
      }
      if (storageAdultAmount) {
        adultsAmount.value = storageAdultAmount;
      }
    }
  });
}

if(filterHotelForm) {
  filterHotelForm.addEventListener('submit', function (evt) {
    var inputCostIsValid = true;
    for (var i = 0; i < costFilterHotel.length; i++) {
      if (!allInputHotelForm[i].value) {
        inputCostIsValid = false;
        break;
      }
    }
    if (!inputCostIsValid) {
      evt.preventDefault();
    }
  });
}

