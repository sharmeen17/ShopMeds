let medicines = [
    {
        id: 1, name: "Paracetamol", price: 5, prescription: false,
        desc: "For fever and mild pain relief", uses: "Headache, Fever", sideEffects: "Rare"
    },
    {
        id: 2, name: "Vitamin C", price: 8, prescription: false,
        desc: "Immune system support", uses: "Vitamin deficiency", sideEffects: "None"
    },
    {
        id: 3, name: "Amoxicillin", price: 15, prescription: true,
        desc: "Antibiotic for infections", uses: "Bacterial infections", sideEffects: "Nausea"
    },
    {
        id: 4, name: "Ibuprofen", price: 7, prescription: false,
        desc: "Anti-inflammatory pain reliever", uses: "Pain, Inflammation", sideEffects: "Stomach upset"
    },
    {
        id: 5, name: "Cetirizine", price: 6, prescription: false,
        desc: "Antihistamine for allergies", uses: "Allergy relief", sideEffects: "Drowsiness"
    },
    {
        id: 6, name: "Omeprazole", price: 12, prescription: true,
        desc: "Reduces stomach acid", uses: "Acid reflux", sideEffects: "Headache"
    },
    {
        id: 7, name: "Aspirin", price: 10, prescription: false,
        desc: "Pain reliever and anti-inflammatory", uses: "Pain, Fever, Inflammation", sideEffects: "Stomach upset"
    },
    {
        id: 8, name: "Loratadine", price: 9, prescription: false,
        desc: "Antihistamine for allergy relief", uses: "Allergies, Hay fever", sideEffects: "Headache"
    },
    {
        id: 9, name: "Metformin", price: 20, prescription: true,
        desc: "Helps control blood sugar levels", uses: "Type 2 diabetes", sideEffects: "Nausea, Diarrhea"
    },
    {
        id: 10, name: "Simvastatin", price: 25, prescription: true,
        desc: "Lowers cholesterol levels", uses: "High cholesterol", sideEffects: "Muscle pain"
    },
    {
        id: 11, name: "Levothyroxine", price: 30, prescription: true,
        desc: "Thyroid hormone replacement", uses: "Hypothyroidism", sideEffects: "Weight loss, Anxiety"
    },
    {
        id: 12, name: "Gabapentin", price: 18, prescription: true,
        desc: "Used for nerve pain and seizures", uses: "Neuropathic pain, Seizures", sideEffects: "Dizziness, Fatigue"
    },
    {
        id: 13, name: "Ciprofloxacin", price: 22, prescription: true,
        desc: "Antibiotic for bacterial infections", uses: "Infections", sideEffects: "Nausea, Diarrhea"
    },
    {
        id: 14, name: "Fexofenadine", price: 11, prescription: false,
        desc: "Antihistamine for allergy relief", uses: "Allergies, Hay fever", sideEffects: "Drowsiness"
    },
    {
        id: 15, name: "Ranitidine", price: 14, prescription: false,
        desc: "Reduces stomach acid", uses: "Heartburn, GERD", sideEffects: "Headache"
    },
    {
        id: 16, name: "Clopidogrel", price: 28, prescription: true,
        desc: "Prevents blood clots", uses: "Heart disease", sideEffects: "Bleeding"
    },
    {
        id: 17, name: "Albuterol", price: 15, prescription: true,
        desc: "Bronchodilator for asthma", uses: "Asthma, COPD", sideEffects: "Tremors, Nervousness"
    },
    {
        id: 18, name: "Sertraline", price: 35, prescription: true,
        desc: "Antidepressant", uses: "Depression, Anxiety", sideEffects: "Nausea, Insomnia"
    },
    {
        id: 19, name: "Hydrochlorothiazide", price: 12, prescription: true,
        desc: "Diuretic for high blood pressure", uses: "Hypertension", sideEffects: "Dizziness"
    },
    {
        id: 20, name: "Amlodipine", price: 17, prescription: true,
        desc: "Calcium channel blocker", uses: "High blood pressure", sideEffects: "Swelling"
    },
    {
        id: 21, name: "Montelukast", price: 19, prescription: true,
        desc: "Used for asthma and allergies", uses: "Asthma, Allergies", sideEffects: "Headache"
    },
    {
        id: 22, name: "Dextromethorphan", price: 8, prescription: false,
        desc: "Cough suppressant", uses: "Cough relief", sideEffects: "Dizziness"
    },
    {
        id: 23, name: "Lisinopril", price: 24, prescription: true,
        desc: "ACE inhibitor for high blood pressure", uses: "Hypertension", sideEffects: "Cough"
    },
    {
        id: 24, name: "Tamsulosin", price: 21, prescription: true,
        desc: "Used for enlarged prostate", uses: "BPH", sideEffects: "Dizziness"
    },
    {
        id: 25, name: "Fluoxetine", price: 32, prescription: true,
        desc: "Antidepressant", uses: "Depression, OCD", sideEffects: "Nausea, Insomnia"
    },
];

let currentMedicineId = null;

window.onload = function () {
    let medicineList = document.getElementById("cardContainer");
    

    medicines.forEach(medicine => {
        let medicineDiv = document.createElement("div"); // Create a new div for each medicine
        medicineDiv.classList.add("medicineCard"); // Add class for styling
        medicineDiv.style.width = "200px"; // Set width for each card
        medicineDiv.style.border = "none"; 
        medicineDiv.style.padding = "10px"; 
        medicineDiv.style.borderRadius = "8px"; 
        medicineDiv.style.backgroundColor = "white";
        medicineDiv.style.display = "flex";
        medicineDiv.style.flexDirection = "column";
        medicineDiv.style.boxShadow = " 0 2px 5px rgba(0, 0, 0, 0.288)";
        // medicineDiv.style.justifyContent = "center";

       
        medicineDiv.innerHTML = `
            <h3>${medicine.name}</h3>
            <p>Price: $${medicine.price}</p>
            ${medicine.prescription ? "<p style='color:red;'>Prescription needed</p>" : ""}
           <div class="cardButtons">
                    <button class="blueButton" onclick="addToCart(${medicine.id})">Add to Cart</button>
                    <button class="blueButton">More info</button>
                </div>
        `;
        medicineList.appendChild(medicineDiv);
    });
    updateCartCount();
};


// function showMedicineDetails(medicineId) {
//     let medicine = medicines.find(m => m.id === medicineId);
//     currentMedicineId = medicineId;
//     document.getElementById("medicineModal").style.display = "block";
//     document.getElementById("medName").textContent = medicine.name;
//     document.getElementById("medDesc").textContent = medicine.desc;
//     document.getElementById("medPrice").textContent = medicine.price;
//     document.getElementById("medPrescription").innerHTML = medicine.prescription ?
//         "<span style='color:red;'>Prescription Required</span>" : "";
// }

// function closeModal() {
//     document.getElementById("medicineModal").style.display = "none";
// }

function addToCart(medicineId) {
    let medicine = medicines.find(m => m.id === medicineId);
    if ((medicine.prescription) && !confirm("This requires prescription. Confirm?")) return;

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(medicine);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    // closeModal();
    // alert("Added to cart!");

    // Show notification
    let notification = document.getElementById("notification");
    notification.style.display = "block";

    // Hide notification after 2 seconds
    setTimeout(() => {
        notification.style.display = "none";
    }, 2000);
    
    
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    document.getElementById("cartCount").textContent = cart.length;
}


function goToCart(){
    window.location = "/pages/cart.html"
}