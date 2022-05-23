# eCommerce Site

## Description
A webpage showing a range of products and offers a user can browse, favourite and add to a cart[wip].

![](./sitess.png)

### How to install/run the project:
The project can be cloned to your local machine and accessed via `npm start`, alternatively it should be available hosted on github pages at `https://jesse-dejong.github.io/ecommerce/`.

### Implementation:
This implementation utilises the React framework and component structure to parse the database of products from Firebase/Firestore and dynamically generate its selection. This allows for easy scaling as any future products will inherit the structure and styling of the existing page elements and operates very well in tandem with the cloud database.

### Future goals/extensions:
- Make it prettier!
- Implement the MVP Bonus =>
Using Firestore and react, create a cart system. Create a cart page in your react app.
Add logic to prevent users from adding items to the cart that are no longer in stock. You 
will have to check the current cart and the product quantity Cart page should have the 
following:
• List of products in the cart
• ability to change the number of products in the cart
• ability to remove items from the cart

### MVP:
Two pages:
- Home Page
    - Carousel of featured products
    - Grid of products
-  Product Page (with id parameter) 
    - like a product page on another site, allows you to add to a cart and select product variants
- All products should be stored in Firestore. You should hold the following information:
    - quantity
    - variants (could be colours, sizes, etc.)
    - price per unit
    - name
    - image URL
    - favourited or not (Boolean)
- All data should be stored in Firestore and fetched by the front-end. There should be NO 
static product data in the react application.
Make sure your site is scoped to one category of products

### License:
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.