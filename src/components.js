// NOTE We're setting up another template called foodCard
// NOTE - A function which take 5 parameters
// which generates and returns the HTML string that represents the food card or prouduct item
let foodCard = (desc, id, imageURL, name, price) => {
  //NOTE We have a div with a class of "product-item" inside another div with the class of "container"
  // Inside the product-item div, there are seperate divs,
  // one for the page title and another for the description, as well as an image element.
  // We use the string templates to set the name and price of the item, as well as the
  // URL of the image and the item description

  return `<section class="page-section">
    <div class="container">
        <div class="product-item">
            <div class="product-item-title d-flex">
                <div class="bg-faded p-5 d-flex ms-auto rounded">
                    <h2 class="section-heading mb-0">
                        <span class="section-heading-upper">${name}</span>
                        <span class="section-heading-lower">$${price}</span>
                    </h2>
                </div>
            </div>
            <img  class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="${imageURL}" alt="..." />
            <div class="product-item-description d-flex me-auto">
                <div class="bg-faded p-5 rounded">
                    <p class="mb-0">${desc}.</p>
                </div>
                <br/>
                <button type="button" class="btn btn-primary" onclick='sendOrder(${JSON.stringify(
                  { desc, id, imageURL, name, price }
                )},this)'>Order</button>
            </div>
        </div>
    </div>
</section>`;
};
// NOTE - A function that takes 3 parameters which generates and returns an HTML string that represents an order card or the product item
let orderCard = (name, price, imageURL) => {
  return `<section class="page-section">
    <div class="container">
        <div class="product-item">
            <div class="product-item-description d-flex">
                <div class="bg-faded p-5 d-flex ms-auto rounded">
                    <h2 class="section-heading mb-0">
                    <span class="section-heading-upper">${name}</span>
                    <span class="section-heading-lower">$${price}</span>
                    </h2>
                </div>
            </div>
        </div>
        <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="${imageURL}" alt="..." />
    </div>
</section>`;
};
