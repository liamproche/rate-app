# rate-app
NAME
-Rate Anything?

CONCEPT- Rate Anything App 


TECHNOLOGIES- Full-Stack Application, Postgre, Express.js, React, React Bootstrap (PERN Stack!)

MODELS:
-USER
    -username(unique) - cannot edit
    -name(display) - can edit
    -password - can edit
    -thingsPosted = array of thingIds
    -thingsRated = array of thingIds
    -timestamp - cannot edit

-THING
    -Photo url
    -Thing name
    -Poster comment on thing (this should be brief)
    -User that created it
    -Timestamp
    -Comments = array of comments ids
    -Rating (default 0, can go negative)

-RATING
    -Number
    -UserId
    -ThingId

-COMMENT
    -Body
    -User that created it
    -Thing it belongs to
    -Timestamp

USER STORIES
-If there are no items in the db, the user should see a message stating there are no items in the db and be prompted to create an account to start creating things
-When a user accesses the site they should see: 
    -Nav
        -Login & Create Account Options (Upper-right)
        -Sort By (Upper-left dropdown menu)
    -Section displaying a random assortment of items from the db. These should be paginated.
        -Page numbers at the bottom (page x of y, option to jump pages)
    -User should be able to filter items displayed by:
        -Popular
        -Highest Rated
        -Lowest Rated
        -Recently rated?
        -Not recently rated?
-The items should look like little boxes in a grid formation with the item photo, name, brief description and current rating displayed
-There should be up and down arrows on either side of rating where the user can adjust the rating (These should look exactly like the upvote/downvote arrows from that episode of "The Orville")
    -When the user clicks the up arrow the rating should increase by one on the page and in the db
    -When the user clicks the down arrow the rating should decrease by one on the page and in the db
-There should also be an option to view comments which should take users to an individual thing component with comments listed
    -User should have to create an account to comment
-Log-in- When user logs in they should be taken back to the homepage except login/create account nav changed to My Things, Things I've Rated, Account Settings
-If a user clicks on "My Things" they should be taken to a show page with things they have posted with the option of clicking on a post to see individual thing detail page
    -Should user have option to rate own item? <--Yes. I think so, with option to update the rating later
-If a user clicks on "Things I've Rated" they should be taken to a show page with the things they've rated. The items should include the user's rating of the item with an option to edit the rating






FEATURES
-Photo Upload (Cloudinary)
-JWT User authentication

