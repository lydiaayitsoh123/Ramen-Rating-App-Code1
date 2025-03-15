const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517798/preview", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 3, comment: "No comment available" },
    { id: 4, name: "Sushi Ramen", restaurant: "Kakwacha", image: "https://moringa.instructure.com/courses/967/files/517797/preview", rating: 3, comment: "yummy!" }
    

];

function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = ""; 

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image; 
        img.alt = ramen.name; 
        img.addEventListener("click", () => handleClick(ramen));
        menu.appendChild(img); 
    });
}

function handleClick(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment || "No comment available";
}


function addSubmitListener() {
    document.getElementById("new-ramen-form").addEventListener("submit", function(event) {
        event.preventDefault(); 
        
    
        const newRamen = {
            id: ramens.length + 1, 
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value || "No comment available"
        };

        
        ramens.push(newRamen); 

        
        displayRamens(); 
        
        
        alert(`🎉 Successfully added ${newRamen.name} from ${newRamen.restaurant}!`);

        
        this.reset(); 
    });
}


document.addEventListener("DOMContentLoaded", () => {
    displayRamens();
    addSubmitListener();
});
