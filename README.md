# Threads eCommerce API
  ![github-license](https://img.shields.io/badge/License-MIT-blue.svg)

  ## Description
  Threads eCommerce is a REST API tailored for use by ecommerce platforms. The user can perform a variety of CRUD operations by calling the endpoints specified in the Usage section.

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  To integrate this API with your project, download the repo and add the files to your project directory. 

  ## Usage
  The following endpoints can be called to perform GET, POST, UPDATE, and DELETE operations:  
  ``````
  * /api/categories
  * /api/products
  * /api/tags  
  ``````

  If you would like to perform a POST, UPDATE, or DELETE operation on one specific item, append its ID to the endpoint.   
  ``````
  Example: '/api/products/6'    
  ``````

  The body of a request should follow this format:  
  ``````
  {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }  
``````

  ## Questions
  [Elrond-Hubbard](https://github.com/Elrond-Hubbard)

  marsolomichael@gmail.com

  ## License
  This project falls under the [MIT](https://choosealicense.com/licenses/mit/) license.
