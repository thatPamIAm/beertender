# Beertender

[Beertender in action](https://youtu.be/0BCIqf0b2xM)

[![Beertender in action](http://i.imgur.com/WYqUilt.png)](https://youtu.be/0BCIqf0b2xM)

### Background

For the final project at Turing School of Software & Design, we were randomly assigned into groups to work with an already existing API from another student. We were tasked with the wire-framing, design, and build-out of the front-facing interface.

For this project, we were assigned an API that utilizes the [Open Beer DB](https://openbeerdb.com/) (all routes listed at end of of the README). We decided early on that our focus would be on creating a pleasing UI that would allow users to "swipe" random beers populated from the database, much like current dating apps Tinder and Bumble. Because of this, we made the decision to work with React Native for our front-end. As a group, we also strongly desired to work with React Native since it is not currently covered in the curriculum at Turing School.

### Reflection

This proved to be a challenging project to take on for a variety of different reasons. Much of our struggle during the early stage of this project was in learning brand new technologies (React Native and Expo XDE) and implementing this project with a pre-existing backend API. Beyond the initial setup/learning curve, we also ran into difficulties in working with our inherited backend. This was largely due to the many-to-many relationships that were set up in the inherited code  - they simply did not configure well with what we were looking to display on the front-end, which forced us to make three calls for a single beer to be displayed.

### Future Iterations

Although we made our MVP for this project, there is still much left to do.

Next phase will include:

- Rebuilding the BE from scratch utilizing the Brewery DB API since the previous API has not been updated in several years and was missing some features of the beers we wished to showcase.
- Change the database schema to account for what we are looking to display on the FE.
- Add features to help guide user with swiping left vs right (and what that entails).

### Database used

[Open Beer DB](https://openbeerdb.com/)

## Endpoints

- **[<code>GET</code> categories](https://byod-beers.herokuapp.com/api/v1/categories)**
- **[<code>GET</code> categories/:id](https://byod-beers.herokuapp.com/api/v1/categories/7)**
- **[<code>GET</code> styles](https://byod-beers.herokuapp.com/api/v1/styles)**
- **[<code>GET</code> styles/:id](https://byod-beers.herokuapp.com/api/v1/styles/25)**
- **[<code>GET</code> breweries](https://byod-beers.herokuapp.com/api/v2/breweries)**
- **[<code>GET</code> breweries/:id](https://byod-beers.herokuapp.com/api/v2/breweries/250)**
- **[<code>GET</code> breweries/:id/beers](https://byod-beers.herokuapp.com/api/v2/breweries/14/beers)**
- **[<code>GET</code> beers](https://byod-beers.herokuapp.com/api/v2/beers)**
- **[<code>GET</code> beers/:id](https://byod-beers.herokuapp.com/api/v2/beers/300)**
- **[<code>GET</code> beers?category](https://byod-beers.herokuapp.com/api/v2/beers?category=North%20American%20Ale)**
- **[<code>GET</code> beers?style](https://byod-beers.herokuapp.com/api/v2/beers?style=American-Style%20Pale%20Ale)**

* All POST/PUT/DELETE/PATCH endpoints are protected by JWT's

- **[<code>POST</code> categories](https://byod-beers.herokuapp.com/api/v1/categories)**
- Allows the user to add a new beer category by passing though `name` in the request body.
- **[<code>POST</code> styles](https://byod-beers.herokuapp.com/api/v1/styles)**
- Allows the user to add a new beer style by passing though `name` and `category_id` in the request body.
- **[<code>POST</code> beers](https://byod-beers.herokuapp.com/api/v2/breweries)**
- Allows the user to add a new beer by passing though `name`, `cat_id` & `style_id` in the request body.
- **[<code>POST</code> breweries](https://byod-beers.herokuapp.com/api/v2/beers)**
- Allows the user to add a new brewery by passing though `name`, `address1`, `city`, `state`, `code` & `country` in the request body.
- **[<code>DELETE</code> categories/:id](https://byod-beers.herokuapp.com/api/v1/categories)**
- Allows the user to delete an existing beer category by passing though the beer category ID in the request body.
- **[<code>DELETE</code> beers/:id](https://byod-beers.herokuapp.com/api/v2/beers)**
- Allows the user to delete an existing beer by passing though the beer ID in the request body.
- **[<code>PATCH</code> styles/:id](https://byod-beers.herokuapp.com/api/v1/styles)**
- Allows the user to update an existing beer style by passing either `name` or beer `category_id` in the request body.
- **[<code>PATCH</code> breweries/:id](https://byod-beers.herokuapp.com/api/v2/breweries)**
- Allows the user to update an existing brewery by passing either `name`, `address1`, `city`, `state`, `code`, or `country` in the request body.
- **[<code>PUT</code> categories/:id](https://byod-beers.herokuapp.com/api/v1/categories)**
- Allows the user to update an existing beer category by passing `name` in the request body.
- **[<code>PUT</code> beers/:id](https://byod-beers.herokuapp.com/api/v2/beers)**
- Allows the user to update an existing beer style by passing `name`, `cat_id`, `style_id` & `brewery_id` in the request body.

## Tables

#### Categories

| id            | category_id   | name               |
| ------------- |--------------:| ------------------:|
| 1             | 1             | British Ale        |
| 2             | 2             | Irish Ale          |
| 3             | 3             | North American Ale |

#### Styles

| id            | style_id      | name                          | category_id   |
| ------------- |--------------:| -----------------------------:|--------------:|
| 1             | 1             | New Classic Style of Pale Ale | 1             |
| 2             | 2             | Ordinary Bitter               | 1             |
| 3             | 3             | English-Style India Pale Ale  | 1             |


#### Beers

| id            | beer_id       | name                          | cat_id        | style_id     | brewery_id   |
| ------------- |--------------:| -----------------------------:|--------------:|-------------:|-------------:|
| 1             | 1             | Hocus Pocus                   | 11            | 116          | 812          |
| 2             | 2             | Grimbergen Blonde             | null          | null         | 264          |
| 3             | 3             | Widdershins Barleywine        | null          | null         | 779          |


#### Breweries

| id   | brewery_id | name                        | address1          | city          | state      | code     |country  |
| -----|-----------:| ---------------------------:|------------------:|--------------:|-----------:|---------:|--------:|
| 1    | 1          | (512) Brewing Company       | 407 Radam, F200   | Austin        | Texas      | 78745    | US      |
| 2    | 2          | 21st Amendment Brewery Cafe | 563 Second Street | San Francisco | California | 94107    | US      |
| 3    | 3          | 3 Fonteinen Brouwerij       | Hoogstraat 2A     | Beersel       | null       | null     | Belgium |
