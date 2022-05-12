# rate-app
NAME
-Rate Anything?
-Rate Things?

CONCEPT- Rate Anything App 

TECHNOLOGIES- Full-Stack Application, Postgre, Express.js, React, React Bootstrap (PERN Stack!)

MODELS:
-USER
    -username(unique) - cannot edit
    -name(display) - can edit
    -email - can edit
    -password - can edit
    -thingsPosted = array of thingIds
    -thingsRated = array of thingIds
    -Timestamp - cannot edit

-THING
    -Thing name
    -Poster comment on thing (this should be brief)
    -Photo url
    -UserId
    -Comments = array of commentIds
    -Rating (default 0, can go negative), aggregate of all ratings on thing
    -Timestamp

-RATING
    -Number
    -UserId
    -ThingId
    -Timestamp

-COMMENT
    -Body
    -UserId
    -ThingId
    -Timestamp

USER STORIES
-If there are no items in the db, the user should see a message stating there are no items in the db and be prompted to create an account to start creating things
-When a user accesses the site they should see: 
    -Nav
        -Login & Create Account Options (Upper-right)
        -Sort By (Upper-left dropdown menu)
    -Section displaying a random assortment of items from the db. These should be paginated.
        -Page numbers at the bottom (page x of y, option to jump pages)
    -User should be able to filter items displayed by
        -Popular (Most rated)
        -Highest Rated
        -Lowest Rated
        -Recently rated?
        -Not recently rated?
-The items should look like little boxes in a grid formation with the item photo, name and control panel with:
    -Option to uprate ("Orville" button)
    -Current Rating 
    -Option to downrate ("Orville" button)
-   -Details Icon which opens accordian showing:
        -When the thing was created
        -Username that created the thing (this should stay even if a user deletes their account)
        -Time that thing was created
        -Add comment field (at the top)
        -List of all the comments on the thing
-User should have to create an account to comment
-Log-in- When user logs in they should be taken back to the homepage except login/create account nav changed to My Things, Things I've Rated, Account Settings
-If a user clicks on "My Things" they should be taken to a show page with things they have posted with the option of clicking on a post to see individual thing detail page
    -Should user have option to rate own item? <--Yes. I think so, with option to update the rating later
-If a user clicks on "Things I've Rated" they should be taken to a show page with the things they've rated. The items control panel should show an option to "display my ratings" which should be a dropdown with "Your Ratings: UpRates: Number and DownRates: Number"
    -Options to uprate and downrate should still be enabled (user can rate a thing as many times as they want)
-If user clicks on edit account it should take them to an account edit page (or should this be a modal) where they can edit:
    -name (NOT username)
    -password
    -email
    -Should a user have the option to delete things they have created? If not, warning message before posting?
        -If yes, there should be a things I've posted link which takes user to "My things" show page with option to delete and popup modal confirming delete of thing
    -Delete Account Button with pop-up modal confirming delete... (Maybe 2 pop-up modals, the second one being really cheesey and tongue-in-cheek)
        -When user deletes account, do items get deleted?... (I think not)
        -Deleting account really deletes account, items stay
    






FEATURES
-Photo Upload (Cloudinary)
-JWT User authentication

