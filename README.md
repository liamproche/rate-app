# rate-app

CONCEPT- Rate anything app 

TECHNOLOGIES- Full-Stack Application, Postgre, Express.js, React, React Bootstrap (PERN Stack!)

MODELS:
-USER
    -username(unique) - cannot edit
    -name(display) - can edit
    -password - can edit
    -timestamp - cannot edit

-POST(Thing to rate)
    -Photo url
    -Thing name
    -Comment on thing (this should be brief)
    -User that created it
    -Timestamp
    -Rating

-COMMENT
    -Body
    -User that created it
    -Thing it belongs to
    -Timestamp


USER STORIES
-If there are no items in the db, the user should see a message stating there are no items in the db and be prompted to create an account to start rating things
-When a user accesses the site they should see a page displaying a random assortment of items from the db. These should be paginated. 
-The items should look like little boxes in a grid formation with the item photo, name, brief description and current rating displayed in stars



FEATURES
-Photo Upload (Cloudinary)
-JWT User authentication

