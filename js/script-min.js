"use strict";var searchHotelBtn=document.querySelector(".search-hotels-form-btn"),searchHotelForm=document.querySelector(".search-hotel-modal"),filterHotelForm=document.querySelector(".filter-hotel");if(filterHotelForm)var costFilterHotel=filterHotelForm.querySelectorAll("[type=text]");if(searchHotelForm)var startDate=searchHotelForm.querySelector("[name=start-date]"),allInputHotelForm=searchHotelForm.querySelectorAll(".search-hotel-input"),adultsAmount=searchHotelForm.querySelector("[name=adults-amount]"),childrenAmount=searchHotelForm.querySelector("[name=children-amount]");var storageChildAmount="",storageAdultAmount="",isStorageSupp=!0;try{storageChildAmount=localStorage.getItem("children-amount"),storageAdultAmount=localStorage.getItem("adult-amount")}catch(e){isStorageSupp=!1}searchHotelForm&&(searchHotelForm.classList.add("search-hotel-hidden"),searchHotelForm.addEventListener("submit",function(e){for(var t=!0,o=0;o<allInputHotelForm.length;o++)if(!allInputHotelForm[o].value){t=!1;break}t?(localStorage.setItem("adult-amount",adultsAmount.value),localStorage.setItem("children-amount",childrenAmount.value)):e.preventDefault()}),window.addEventListener("keydown",function(e){27===e.keyCode&&searchHotelForm.classList.contains("search-hotel-popup")&&(e.preventDefault(),searchHotelForm.classList.remove("search-hotel-popup"),searchHotelForm.classList.add("search-hotel-hidden"))})),searchHotelBtn&&searchHotelBtn.addEventListener("click",function(e){e.preventDefault(),searchHotelForm.classList.toggle("search-hotel-popup"),searchHotelForm.classList.toggle("search-hotel-hidden"),startDate.focus(),isStorageSupp&&(storageChildAmount&&(childrenAmount.value=storageChildAmount),storageAdultAmount&&(adultsAmount.value=storageAdultAmount))}),filterHotelForm&&filterHotelForm.addEventListener("submit",function(e){for(var t=!0,o=0;o<costFilterHotel.length;o++)if(!allInputHotelForm[o].value){t=!1;break}t||e.preventDefault()});
