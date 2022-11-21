"use strict";
//imports
import { v4 as uuidv4 } from "uuid";

// selectors
const shelfNameInput = document.getElementById("shelf-name-input");
const addShelfButton = document.getElementById("add-shelf-button");
const shelvesList = document.getElementById("shelves-list");

// global variables
const shelfList = [];

// functions

// a function to add items to the shelf array
// and update the DOM once it has been updated
const addShelfElement = function () {
  shelfList.push({
    shelfId: uuidv4(),
    shelfName: shelfNameInput.value,
  });
  createShelves();
};

// a function for adding each shelf item in the array to the page
const createShelves = function () {
  shelvesList.innerHTML = shelfList.map(formatShelfElement).join("");
};

// a function for formatting each shelf item
const formatShelfElement = function (shelf) {
  return `
    <h2 id="${shelf.shelfId}">
      ${shelf.shelfName}
    </h2>
    <i class="fa-solid fa-trash-can" id="delete-shelf-button"></i>
  `;
};

// a function to delete a shelf from the shelf list and update the DOM
const deleteShelfElement = function (event) {
  if (event.target.id === "delete-shelf-button") {
    const shelfId = event.target.previousElementSibling.id;
    // use findIndex() to find the index of the element we want to delete
    let shelfIndex = shelfList.findIndex((element) => {
      return element.id === shelfId;
    });
    // use splice() to remove the element
    shelfList.splice(shelfId, 1);
    // use createShelves() to update the shelves list
    createShelves();
  }
};

// Event Listeners
document.addEventListener("DOMContentLoaded", createShelves);
addShelfButton.addEventListener("click", addShelfElement);
shelvesList.addEventListener("click", deleteShelfElement);
