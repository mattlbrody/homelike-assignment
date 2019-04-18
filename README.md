# Homelike client for assignment

## Background information

### installation & run
1. start the server in the `../server` folder
1. start the client:
    - npm i
    - npm start

## What to do
1. Invest some time to refactor the current code and make it better
    - please also tell us what you did
1. Add webpack
1. Add information about owner to apartment view page
1. Add new page "Locations", show the apartments filtered by location
1. Add new page "search page", provide abilities to search by location and filter by [size, price, amenities, details, services]

**important**: _there is no need to change any "server" lines of code to complete this assignment_


Things I refactored:

## STRUCTURE CHANGES
- Moved ApolloProvider and Provider elements out of src/App.js and into src/index.js. I did this because it makes the App.js file easier to read and it's considered best practice.
- Removed the header tags and all it's child elements in the public/index.js file, then I created a Header component inside of the /src/views. 
- Removed the public/css/main.css file, and add the css to App.css, which I connected to App.js
- created ListingImage.js and ListingDetails.js components to store the JSX for those particular div and their children, which is used by both ApartmentTileView.js and ApartmentView.js. This shortends the total amount of code and makes it easier to update that particular part of the code.
- Added key={index} inside of the span in the ApartmentAmenityView since each unique item in a list needs a unique key
- Used conditional rendering in the ListingDetails.js file to show or hide the owner details based on the page being viewed
- added 'services' and 'details { rooms bedrooms floor bathrooms }' to apartmentsListActions.js's GraphQL query so the data is usable
- removed 'switch' from App.js since it's never used

## CLASSNAME CHANGES
- Removed the divs with the className '_3im4pDXrDfzNRT2AlvLfD6' and '_3Ts2_4uirKsrlm2Qb57Avw' because they were not doing anything
- Removed '_3ORDzmMDnpzTXIIXjJsRw7' as a className and added it's one property into 'Ok22VaqPDW9x1uaR46cRO', which name I changed to 'priceoverlay' so it's more descriptive.
- Changed '_17Hci6D5EewOTY42eIXhPy' to 'price-overlay-monat' so it's more descriptive.
- Consolidated the span with the text '/' and the span with the text 'monat', and changed their className to 'price-overlay-monat-text' from '_2GcdOjvYR400SpIsNOxzGK' to be more descriptive
- Removed the div containing '3-hUUH6d0vGND3vUzaybD0 Lsdn2hC-tehVod76x4HzK' because it was redundant
- Removed '_1NES5HH5UNUjUVK5_-d-AG' from the code and added it to the 
- Changed '_17om8IEGFeu2W2TBOJ6xQs' to 'apt-size-text'
- Changed 'f9YmKwMaSOdtYnk_Qz-iT' to 'amenities-container'
- Changed 'dVjtBg_ihJ63cZB8GwE0g' to 'amenities-text'
- Changed '_1h9l4w0vvX6d56ZnJ3NLod' to 'amenities-item'

## OTHER REQUESTED CHANGES
- Added the owner detail in the apartment view page via the ListingDetails.js file
- Created LocationsView.js and LocationsFilter.js to show the apartments filtered by location