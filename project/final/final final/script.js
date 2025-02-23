let medicines = [
    { id: 1, name: "Paracetamol", price: 5, prescription: false },
    { id: 2, name: "Vitamin C", price: 8, prescription: false },
    { id: 3, name: "Amoxicillin", price: 15, prescription: true },
    // ... other medicines
];

window.onload = function() {
    let medicineList = document.getElementById("medicineGrid");
    
    medicines.forEach(medicine => {
        let medicineDiv = document.createElement("div");
        medicineDiv.className = "medicine-item";
        medicineDiv.innerHTML = `
            <h3>${medicine.name}</h3>
            <p>Price: $${medicine.price}</p>
            ${medicine.prescription ? "<p style='color:red;'>Prescription needed</p>" : ""}
            <button onclick="addToCart(${medicine.id})">Add to Cart</button>
        `;
        medicineList.appendChild(medicineDiv);
    });
    updateCartCount();
};

function addToCart(medicineId) {
    let medicine = medicines.find(m => m.id === medicineId);
    if (medicine.prescription && !confirm("This requires prescription. Confirm?")) return;
    
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
}

// Search/Filter Function
function filterMedicines() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = medicines.filter(medicine => {
        return medicine.name.toLowerCase().includes(searchText) ||
               medicine.category.toLowerCase().includes(searchText);
    });

    showMedicines(filtered);
}

// Keep existing cart functions the same
function addToCart(medicineId) { /* ... */ }
function updateCartDisplay() { /* ... */ }
function checkout() { /* ... */ }

// Start the app
showMedicines(); // Show all medicines initially


