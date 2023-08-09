const mobileData = {
  Samsung: {
    GalaxyS21: {
      display: "6.2-inch AMOLED",
      camera: "12MP main, 64MP telephoto, 12MP ultrawide",
      battery: "4000mAh",
    },
    // ... other Samsung models
  },
  Apple: {
    iPhone12: {
      display: "6.1-inch Super Retina XDR",
      camera: "12MP dual",
      battery: "2815mAh",
    },
    // ... other Apple models
  },
  Google: {
    Pixel6: {
      display: "6.4-inch AMOLED",
      camera: "50MP main, 12MP ultrawide",
      battery: "4614mAh",
    },
    // ... other Google models
  },
};

const mobileCompaniesSelect = document.getElementById("mobileCompanies");
const mobileSpecsDiv = document.getElementById("mobileSpecs");

// Populate mobile companies dropdown
for (const company in mobileData) {
  const option = document.createElement("option");
  option.value = company;
  option.textContent = company;
  mobileCompaniesSelect.appendChild(option);
}

// Event listener for mobile companies selection
mobileCompaniesSelect.addEventListener("change", function () {
  const selectedCompany = mobileCompaniesSelect.value;
  if (selectedCompany) {
    const companyModels = mobileData[selectedCompany];
    let specsHTML = "<ul>";

    for (const model in companyModels) {
      const modelSpecs = companyModels[model];
      specsHTML += `<li><strong>${model}</strong>:
        Display: ${modelSpecs.display}<br>
        Camera: ${modelSpecs.camera}<br>
        Battery: ${modelSpecs.battery}</li>`;
    }

    specsHTML += "</ul>";
    mobileSpecsDiv.innerHTML = specsHTML;
  } else {
    mobileSpecsDiv.innerHTML = "";
  }
});


