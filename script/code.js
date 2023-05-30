let products = [
    {
        id: 1,
        name:"obese",
        description:"fat cigar",
        type:"Business",
        price:"1000000",
        image:"https://i.postimg.cc/yN5MmxJQ/fat-cigars.jpg"

    },
    {
        id: 2,
        name:"this is your ancestors",
        description:"old cigars",
        type:"Business",
        price:"1000000",
        image:"https://i.postimg.cc/nLvN9D9n/oldest-cigar-collection.jpg"

    },
    {
        id: 3,
        name:"rich taste",
        description:"special cigars",
        type:"Business",
        price:"1000000",
        image:"https://i.postimg.cc/Kv5zBJwH/special-cigars-collection.webp"

    }
];

let cigarsProduct = document.querySelector(".products");
products.forEach((cigars)=> {
    cigarsProduct.innerHTML += `
    <div class="col-4 cards-wrapper">
    <div class="images">
    <img src="${cigars.image}" style="width: 20rem;" loading="lazy" class="img-fluid">
    <h2>${cigars.name}</h2>
    <p>${cigars.type}</p>
    <p>${cigars.price}</p>
    <p>${cigars.description}</p>
    </div>
    <p class="price">${cigars.cost}</p>
    </div>
    `
})