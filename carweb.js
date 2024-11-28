const cars = [
    
        { name: 'Toyota Camry', model: '2023', price: '₨ 8,250,000', category: 'sedan', image: 'images/Toyota Camry.avif', description: 'A reliable sedan with great fuel efficiency.', specs: ['4 doors', '200 hp', 'Automatic'] },
        { name: 'Ford Mustang', model: '2022', price: '₨ 11,000,000', category: 'coupe', image: 'images/ford mustang.png', description: 'A sports car with impressive performance.', specs: ['2 doors', '450 hp', 'Manual'] },
        { name: 'BMW X5', model: '2024', price: '₨ 16,500,000', category: 'suv', image: 'images/BMW x5.jpg', description: 'A luxury SUV with all the modern features.', specs: ['4 doors', '300 hp', 'Automatic'] },
        { name: 'Honda Civic', model: '2023', price: '₨ 6,875,000', category: 'sedan', image: 'images/Honda Civic.png', description: 'A compact sedan with great fuel economy.', specs: ['4 doors', '180 hp', 'Automatic'] },
        { name: 'Chevrolet Corvette', model: '2022', price: '₨ 22,000,000', category: 'sports', image: 'images/chevroletcorvette.png', description: 'A high-performance sports car.', specs: ['2 doors', '500 hp', 'Manual'] },
        { name: 'Tesla Model X', model: '2024', price: '₨ 33,000,000', category: 'suv', image: 'images/tesla x.jpg', description: 'An all-electric SUV with futuristic features.', specs: ['4 doors', '670 hp', 'Automatic'] },
        { name: 'Audi A6', model: '2023', price: '₨ 15,125,000', category: 'sedan', image: 'images/Audi A6.png', description: 'A luxury sedan offering superior comfort and technology.', specs: ['4 doors', '250 hp', 'Automatic'] },
        { name: 'Porsche 911', model: '2023', price: '₨ 27,500,000', category: 'sports', image: 'images/proche.png', description: 'A legendary sports car with outstanding performance.', specs: ['2 doors', '500 hp', 'Manual'] },
        { name: 'Jeep Wrangler', model: '2024', price: '₨ 11,000,000', category: 'suv', image: 'images/Jeep.png', description: 'A rugged and durable SUV for off-road adventures.', specs: ['4 doors', '285 hp', 'Manual'] },
        { name: 'Honda Accord', model: '2023', price: '₨ 8,800,000', category: 'sedan', image: 'images/honda accord.jpg', description: 'A midsize sedan with reliability and comfort.', specs: ['4 doors', '190 hp', 'Automatic'] },
        { name: 'Lamborghini Huracan', model: '2022', price: '₨ 68,750,000', category: 'sports', image: 'images/lambo hura.png', description: 'A luxury supercar with unmatched performance.', specs: ['2 doors', '640 hp', 'Manual'] },
        { name: 'Mercedes-Benz G-Class', model: '2024', price: '₨ 41,250,000', category: 'suv', image: 'images/M Benz.png', description: 'A luxury SUV with iconic design and power.', specs: ['4 doors', '577 hp', 'Automatic'] }
    
    
];

function renderCards(filteredCars) {
    const productSection = document.getElementById('product-section');
    productSection.innerHTML = ''; 

    if (filteredCars.length === 0) {
        productSection.innerHTML = '<p>No products found matching your search.</p>';
    } else {
        filteredCars.forEach(car => {
            const card = document.createElement('div');
            card.classList.add('product-card');

            card.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <h3>${car.name}</h3>
                <p>Model: ${car.model}</p>
                <p class="price">${car.price}</p>
                <button class="view-more-btn" onclick="viewMore('${car.name}')">View More</button>
            `;

            productSection.appendChild(card);
        });
    }
}

function viewMore(carName) {
    const car = cars.find(c => c.name === carName);
    const carDetails = `
        Name: ${car.name}
        Model: ${car.model}
        Price: ${car.price}
        Category: ${car.category}
        Description: ${car.description}
        Specifications: ${car.specs.join(', ')}
    `;
    
    alert(carDetails);
}



function filterByCategory(category) {
    const filteredCars = category === 'all' ? cars : cars.filter(car => car.category === category);
    renderCards(filteredCars);
}

function searchCars() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchTerm));
    renderCards(filteredCars);
}

renderCards(cars);
