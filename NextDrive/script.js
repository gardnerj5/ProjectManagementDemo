// Sample car data with placeholder image URLs
var cars = [
    { make: "Toyota", model: "Camry", year: 2020, price: 25000, mileage: 30000, image: "https://www.cars.com/i/large/in/v2/stock_photos/36f04758-5aab-42bc-912c-8e3420db060d/d5c9cc6a-43e6-4128-9154-17ff7f67955b.png" },
    { make: "Honda", model: "Accord", year: 2019, price: 27000, mileage: 25000, image: "https://mystrongad.com/BRH_BrannonHonda/BRH_Interactive/Accord/2019/2019-Accord-Crystal-Black-Pearl.png" },
    { make: "Ford", model: "F-150", year: 2021, price: 35000, mileage: 15000, image: "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3116/" },
    { make: "Tesla", model: "Model S", year: 2022, price: 80000, mileage: 10000, image: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/50747/2022-Tesla-Model%20S-front_50747_032_2400x1800_PPSW.png" },
    { make: "Chevrolet", model: "Camaro", year: 2018, price: 40000, mileage: 20000, image: "https://edgecast-img.yahoo.net/mysterio/api/0DF31EEB3F81328E065798C5D95022D64A53719054FFF0FB1117F8ED734024FB/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC60CHC021A021001.jpg" },
    { make: "BMW", model: "X5", year: 2020, price: 60000, mileage: 18000, image: "https://www.cars.com/i/large/in/v2/stock_photos/87d4aa58-73fc-4589-940e-ac591afe1ebe/c6bd19b4-fd98-4670-9614-3e49408dfd3a.png" },
    { make: "Audi", model: "A4", year: 2019, price: 45000, mileage: 22000, image: "https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/model-years/15099-2023-audi-a4" },
    { make: "Mercedes-Benz", model: "C-Class", year: 2021, price: 55000, mileage: 12000, image: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/c-class/class-page/series/2024-C-SEDAN-CT-1-6-01-DR.jpg" },
    { make: "Toyota", model: "Prius", year: 2022, price: 20000, mileage: 10000, image: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/50522/2022-Toyota-Prius-front_50522_032_2400x1800_1F7.png" },
    { make: "Honda", model: "Civic", year: 2018, price: 15000, mileage: 30000, image: "https://edgecast-img.yahoo.net/mysterio/api/7280042232693BA9BB1678F0AD0DBCD168066E2C41DE31BD543CA3C7071083BB/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC80HOC022A121001.jpg" },
    { make: "Ford", model: "GT", year: 2024, price: 700000, mileage: 1000, image: "https://image.cnbcfm.com/api/v1/image/107129255-1664912148718-2022_Ford_GT_LM_Edition_-_Front_in_Blue.jpg?v=1664964001&w=1920&h=1080" },
    { make: "Tesla", model: "Model X", year: 2020, price: 100000, mileage: 5000, image: "https://www.motortrend.com/uploads/sites/5/2020/06/2020-tesla-model-x-2.png" },
    { make: "Chevrolet", model: "Cruise", year: 2015, price: 10000, mileage: 100000, image: "https://media.chevrolet.com/dld/content/dam/Media/images/US/Vehicles/Chevrolet/Cars/Cruze/2015/Product/2015-Chevrolet-CruzeLTZ-001.jpg"},
    { make: "BMW", model: "i8", year: 2020, price: 120000, mileage: 8000, image: "https://edgecast-img.yahoo.net/mysterio/api/755BA9410AFA2DC2CBB66700E7CE40399442E031846E1D027F880A499790591E/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC90BMC681A021001.jpg" },
    { make: "Audi", model: "A6", year: 2014, price: 15000, mileage: 146000, image: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/9033/2014-Audi-A6-front_9033_032_1811x732_L8L8_cropped.png" },
    { make: "Mercedes-Benz", model: "A-Class", year: 2022, price: 70000, mileage: 1000, image: "https://www.motortrend.com/uploads/sites/10/2021/12/2022-mercedes-benz-a-class-a220-sedan-angular-front.png" },
    { make: "Lamborghini", model: "Adventador", year: 2022, price: 300000, mileage: 1000, image: "https://cdn-ds.com/blogs-media/sites/94/2021/12/28113104/2022-Lamborghini-Aventador-A_o.jpg" },
    { make: "Ferrari", model: "LaFerrari", year: 2015, price: 1000000, mileage: 5000, image: "https://cdn.ferrari.com/cms/network/media/img/resize/5ddb97392cdb32285a799dfa-laferrari-2013-share?width=1080" },
    { make: "Porche", model: "911", year: 2024, price: 400000, mileage: 1000, image: "https://files.porsche.com/filestore/image/multimedia/none/911-tus-modelimage-sideshot/model/930894f1-6214-11ea-80c8-005056bbdc38/porsche-model.png" },
    { make: "Tesla", model: "CyberTruck", year: 2023, price: 100000, mileage: 1000, image: "https://www.topgear.com/sites/default/files/news-listicle/image/2024/02/Tesla%20Cybertruck.jpeg" },
    
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

function filterCars() {
    
    var makeFilter = document.getElementById("makeFilter").value;
    var modelFilter = document.getElementById("modelFilter").value;
    var yearFilter = document.getElementById("yearFilter").value;
    var priceMin = parseInt(document.getElementById("priceMin").value) || 0;
    var priceMax = parseInt(document.getElementById("priceMax").value) || Infinity;
    var mileageMin = parseInt(document.getElementById("mileageMin").value) || 0;
    var mileageMax = parseInt(document.getElementById("mileageMax").value) || Infinity;
    
    var filteredCars = cars.filter(function(car) {
        var passMake = makeFilter === "" || car.make === makeFilter;
        var passModel = modelFilter === "" || car.model === modelFilter;
        var passYear = yearFilter === "" || car.year.toString() === yearFilter;
        var passPrice = car.price >= priceMin && car.price <= priceMax;
        var passMileage = car.mileage >= mileageMin && car.mileage <= mileageMax;
        
        return passMake && passModel && passYear && passPrice && passMileage;
    });
    
    displayCars(filteredCars);
}





// Add event listeners for all filter inputs
document.getElementById("makeFilter").addEventListener("change", filterCars);
document.getElementById("modelFilter").addEventListener("change", filterCars);
document.getElementById("yearFilter").addEventListener("change", filterCars);
document.getElementById("priceMin").addEventListener("input", filterCars);
document.getElementById("priceMax").addEventListener("input", filterCars);
document.getElementById("mileageMin").addEventListener("input", filterCars);
document.getElementById("mileageMax").addEventListener("input", filterCars);
document.getElementById("sortBy").addEventListener("change", filterCars);
document.getElementById("sortOrder").addEventListener("change", filterCars);


// Function to display compared car details
function displayComparedCars(carIndices) {
    var compareContainer = document.getElementById("compareContainer");
    compareContainer.innerHTML = ""; // Clear previous content
    
    var referenceCar = cars[carIndices[0]]; // First car in comparison
    
    carIndices.forEach(function(index, i) {
        var car = cars[index];
        var comparisonIndex = (i === 0) ? 1 : 0; // Get the index for comparison
        
        var comparisonCar = cars[carIndices[comparisonIndex]]; // Car for comparison
        
        var carDetails = document.createElement("div");
        carDetails.classList.add("car-details");
        
        carDetails.innerHTML = "<img src='" + car.image + "' class='car-image'>" + // Add car image
        "<h2>" + car.make + " " + car.model + "</h2>" +
        "<p><strong>Year:</strong> <span class='" + (car.year > comparisonCar.year ? "highlight-green" : "highlight-red") + "'>" + car.year + "</span></p>" +
        "<p><strong>Price:</strong> <span class='" + (car.price < comparisonCar.price ? "highlight-green" : "highlight-red") + "'>$" + car.price.toLocaleString() + "</span></p>" +
        "<p><strong>Mileage:</strong> <span class='" + (car.mileage < comparisonCar.mileage ? "highlight-green" : "highlight-red") + "'>" + car.mileage.toLocaleString() + " miles</span></p>";
        
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
    moreInfoContent.innerHTML = "<img src='" + car.image + "' class='car-image'>" + // Add car image
    "<h2>" + car.make + " " + car.model + "</h2>" +
    "<strong>Year:</strong> " + car.year + "<br>" +
    "<strong>Price:</strong> $" + car.price.toLocaleString() + "<br>" +
    "<strong>Mileage:</strong> " + car.mileage.toLocaleString() + " miles<br>" +
    "<button class='purchase-btn'>Purchase car</button>"; // Changed to button
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

document.getElementById('showFiltersBtn').addEventListener('click', function() {
    var filtersContainer = document.getElementById('filtersContainer');
    filtersContainer.classList.toggle('hidden');
});
document.getElementById('aboutBtn').addEventListener('click', function() {
    window.location.href = 'info.html'; // Redirect to the info.html page
});
document.getElementById('purchase-btn').addEventListener('click', function() {
    window.location.href = 'purchase.html'; // Redirect to the info.html page
});
//comment
