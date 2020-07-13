// Declare variables
let id = 0;
const outputDescription = document.getElementById("output_description");
const addToListBtn = document.getElementById("add_to_list_btn");
const destination = document.getElementById("destination_name");
const locationName = document.getElementById("location_name");
const imgURL = document.getElementById("photo_path");
const description = document.getElementById("destination_description");
const stockPhoto =
  "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

// Add wishlist component when user submits form
document
  .getElementById("form")
  .addEventListener("submit", addWishListComponent);

// Input getters
function getDestination() {
  return destination.value;
}
function getLocationName() {
  return locationName.value;
}
function getImgURL() {
  let result;
  if (imgURL.value !== null && imgURL.value !== "") {
    result = imgURL.value;
  } else {
    result = stockPhoto;
  }
  return result;
}
function getDescription() {
  if (description.value !== null) {
    if (description.value.length > 70) {
      return description.value.substring(0, 70) + "...";
    } else {
      return description.value;
    }
  }
}

// Functions to create and maintain wishlist components
function addWishListComponent(event) {
  event.preventDefault();
  // id is used to create custom id for buttons to access their parent nodes
  id++;
  outputDescription.textContent = "My WishList";
  let listItem = document.createElement("div");
  listItem.setAttribute("class", "test_container");

  let img = document.createElement("img");
  img.setAttribute("class", "container_img");
  img.setAttribute("src", getImgURL());
  img.setAttribute("alt", "");
  listItem.appendChild(img);

  let h3 = document.createElement("h3");
  h3.setAttribute("class", "destination_heading");
  h3.textContent = getDestination();
  listItem.appendChild(h3);

  let p1 = document.createElement("p");
  p1.setAttribute("class", "location_paragraph");
  p1.textContent = getLocationName();
  listItem.appendChild(p1);

  let p2 = document.createElement("p");
  p2.setAttribute("class", "description_paragraph");
  p2.textContent = getDescription();
  listItem.appendChild(p2);

  let btn1 = document.createElement("button");
  btn1.setAttribute("class", "yellow_btn inline_btn");
  btn1.setAttribute("id", "eb" + id);
  btn1.textContent = "Edit";
  listItem.appendChild(btn1);
  btn1.addEventListener("click", editWishListComponent);

  let btn2 = document.createElement("button");
  btn2.setAttribute("class", "red_btn inline_btn");
  btn2.setAttribute("id", "db" + id);
  btn2.textContent = "Delete";
  listItem.appendChild(btn2);
  btn2.addEventListener("click", deleteWishListComponent);

  //last thing we do is append div to outputContainer
  let listItemContainer = document.getElementById("list_item_container");
  listItemContainer.appendChild(listItem);
}

function editWishListComponent(event) {
  event.preventDefault();
  // Get parent node
  let destinationDiv = document.getElementById(event.target.id).parentNode;

  // Update destination name
  let newDestination = prompt("Enter new name");
  if (newDestination !== "") {
    destinationDiv.childNodes.item(1).textContent = newDestination;
  }

  // Update location
  let newLocation = prompt("Enter new location");
  if (newLocation !== "") {
    destinationDiv.childNodes.item(2).textContent = newLocation;
  }

  // Update photo URL
  let newImgURL = prompt("Enter new photo URL");
  if (newImgURL !== "") {
    destinationDiv.childNodes.item(0).setAttribute("src", newImgURL);
  }
}

function deleteWishListComponent(event) {
  event.preventDefault();
  let destinationDiv = document.getElementById(event.target.id).parentNode;
  destinationDiv.parentNode.removeChild(destinationDiv);
}
