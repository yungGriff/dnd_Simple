const abilityInput = document.getElementById("abilityInput");
const searchButton = document.getElementById("searchButton");
const abilityResult = document.getElementById("abilityResult");

searchButton.addEventListener("click", () => {
    const abilityName = abilityInput.value.toLowerCase();
    if (abilityName) {
        searchAbility(abilityName);
    } else {
        abilityResult.innerHTML = "Please enter an ability score.";
    }
});

function searchAbility(abilityName) {
    abilityResult.innerHTML = "Searching...";

    axios.get(`https://www.dnd5eapi.co/api/ability-scores/${abilityName}`)
        .then(response => {
            const abilityData = response.data;
            abilityResult.innerHTML = `
                <h2>${abilityData.full_name}</h2>
                <p><strong>Description:</strong> ${abilityData.desc.join(', ')}</p>
            `;
        })
        .catch(error => {
            abilityResult.innerHTML = "Ability score not found.";
        });
}
