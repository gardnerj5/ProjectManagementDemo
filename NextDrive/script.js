// Sample car data with placeholder image URLs
var cars = [
    { make: "Toyota", model: "Camry", year: 2020, price: 25000, mileage: 30000, image: "https://via.placeholder.com/150" },
    { make: "Honda", model: "Accord", year: 2019, price: 27000, mileage: 25000, image: "https://via.placeholder.com/150" },
    { make: "Ford", model: "F-150", year: 2021, price: 35000, mileage: 15000, image: "https://via.placeholder.com/150" },
    { make: "Tesla", model: "Model S", year: 2022, price: 80000, mileage: 10000, image: "https://via.placeholder.com/150" },
    { make: "Chevrolet", model: "Camaro", year: 2018, price: 40000, mileage: 20000, image: "https://via.placeholder.com/150" },
    { make: "BMW", model: "X5", year: 2020, price: 60000, mileage: 18000, image: "https://via.placeholder.com/150" },
    { make: "Audi", model: "A4", year: 2019, price: 45000, mileage: 22000, image: "https://via.placeholder.com/150" },
    { make: "Mercedes-Benz", model: "C-Class", year: 2021, price: 55000, mileage: 12000, image: "https://via.placeholder.com/150" }
];

// Function to display cars
function displayCars(cars) {
    var carList = document.getElementById("carList");
    carList.innerHTML = ""; // Clear previous content

    cars.forEach(function(car, index) {
        var carDiv = document.createElement("div");
        carDiv.classList.add("car-row"); // Add class for styling
        carDiv.innerHTML = "<input type='checkbox' class='car-checkbox' data-index='" + index + "'>" + // Add checkbox
                           "<img src='" + car.image + "' class='car-image'>" +
                           "<div class='car-info'><strong>Make:</strong> " + car.make + "</div>" +
                           "<div class='car-info'><strong>Model:</strong> " + car.model + "</div>" +
                           "<div class='car-info'><strong>Year:</strong> " + car.year + "</div>" +
                           "<div class='car-info'><strong>Price:</strong> $" + car.price.toLocaleString() + "</div>" +
                           "<div class='car-info'><strong>Mileage:</strong> " + car.mileage.toLocaleString() + " miles</div>" +
                           "<button class='more-info-btn' data-index='" + index + "'>More Info</button>"; // Add More Info button

        carList.appendChild(carDiv);
    });

    // Add event listeners for "More Info" buttons
    var moreInfoBtns = document.querySelectorAll(".more-info-btn");
    moreInfoBtns.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            event.stopPropagation();
            var carIndex = parseInt(btn.getAttribute("data-index"));
            var car = cars[carIndex];
            displayMoreInfo(car);
        });
    });
}

// Initial display
displayCars(cars);

// Event listener for Compare button
var compareBtn = document.getElementById("compareBtn");
compareBtn.addEventListener("click", compareSelectedCars);

// Function to compare selected cars
function compareSelectedCars() {
    var checkedCheckboxes = document.querySelectorAll(".car-checkbox:checked");
    if (checkedCheckboxes.length === 2) {
        var carIndices = [];
        checkedCheckboxes.forEach(function(checkbox) {
            carIndices.push(parseInt(checkbox.getAttribute("data-index")));
        });

        // Display compare modal with compared cars
        displayComparedCars(carIndices);
    } else {
        alert("Please select exactly two cars to compare.");
    }
}

// Function to display compared car details
function displayComparedCars(carIndices) {
    var compareContainer = document.getElementById("compareContainer");
    compareContainer.innerHTML = ""; // Clear previous content

    carIndices.forEach(function(index) {
        var car = cars[index];
        var carDetails = document.createElement("div");
        carDetails.classList.add("car-details");
        carDetails.innerHTML = "<h2>" + car.make + " " + car.model + "</h2>" +
                                "<p><strong>Year:</strong> " + car.year + "</p>" +
                                "<p><strong>Price:</strong> $" + car.price.toLocaleString() + "</p>" +
                                "<p><strong>Mileage:</strong> " + car.mileage.toLocaleString() + " miles</p>";

        compareContainer.appendChild(carDetails);
    });

    // Show the compare modal
    var modal = document.getElementById("compareModal");
    modal.style.display = "block";
}

// More Info Modal
var modal = document.getElementById("moreInfoModal");
var moreInfoContent = document.getElementById("moreInfoContent");

// Event listener for "Close" button in the more info modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Event listener for clicking outside the more info modal to close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Function to display more info modal
function displayMoreInfo(car) {
    moreInfoContent.innerHTML = "<strong>Make:</strong> " + car.make + "<br>" +
                                "<strong>Model:</strong> " + car.model + "<br>" +
                                "<strong>Year:</strong> " + car.year + "<br>" +
                                "<strong>Price:</strong> $" + car.price.toLocaleString() + "<br>" +
                                "<strong>Mileage:</strong> " + car.mileage.toLocaleString() + " miles";
    modal.style.display = "block";
}

// Compare Modal
var compareModal = document.getElementById("compareModal");

// Event listener for closing the compare modal
var compareCloseBtn = compareModal.getElementsByClassName("close")[0];
compareCloseBtn.onclick = function() {
    compareModal.style.display = "none";
};

// Event listener for clicking outside the compare modal to close it
window.onclick = function(event) {
    if (event.target == compareModal) {
        compareModal.style.display = "none";
    }
};
