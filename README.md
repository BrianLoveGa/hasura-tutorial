
# Learning Objectives

* Explain GraphQL and Hasura ✔
* Set up a Hasura server ✔
* Create GraphQL queries and mutations ✔

# What is GraphQL

Well, according to its documentation, "GraphQL is a query language for APIs." Traditionally, with a REST API, you have all sorts of endpoints where you get access to different data or can change the data in some way. That can become pretty bulky pretty fast, and can also become a bottleneck if you're working with separate frontend and backend teams. GraphQL becomes really helpful as our apps evolve over time and need to display different data.

Sacha Grief wrote an awesome analogy in his article "So what’s this GraphQL thing I keep hearing about?".

> The old REST model is like ordering pizza, then getting groceries delivered, then calling your dry cleaner to get your clothes. Three shops, three phone calls.
> GraphQL on the other hand is like having a personal assistant: once you’ve given them the addresses to all three places, you can simply ask for what you want (“get me my dry cleaning, a large pizza, and two dozen eggs”) and wait for them to return.

GraphQL is also language agnostic, and it lives between your client and your data sources, so it's super flexible!

# What is Hasura

Hasura allows you to build a GraphQL backend at lightning speed -- you can just click buttons and make some pretty awesome things.

Hasura:

* Gives you an instant real time GraphQL API on a new or existing database.
* It comes with dashboard that helps you set up your API and database.
* You can react to changes in your database with web hooks, external APIs, or serverless functions on demand.
* You can also stitch together custom GraphQL APIs and other data sources into a unified GraphQL API.

# Get Hasura up and running

* Go to [this link](https://dashboard.heroku.com/new?button-url=https%3A%2F%2Fdocs.hasura.io%2F1.0%2Fgraphql%2Fmanual%2Fgetting-started%2Fheroku-simple.html&template=https%3A%2F%2Fgithub.com%2Fhasura%2Fgraphql-engine-heroku)!
* Pick a name for your app
* Click deploy

✨Magic✨

# Set up database

* Go to the data tab
* Add a table
* Add some columns
* Add some data

# GraphQL queries

When we use GraphQL we are going to write queries in order to interact with our data.

Queries look like this:

![example of query structure](https://miro.medium.com/max/3808/1*gLgBpni39kqad9C4QDOCVQ.png)

When we use GraphQL, we ask for specific fields on objects.

* The terms between the curly braces is called a selection set.
* Each piece of data that we are requesting is called a field.
* Each piece of data can return arrays and we can get fields from those arrays
* We can also add variables to our queries.

We do need to make sure we specify our data types and stick to them. The Scalar types in GraphQL are:

* Int
* Float
* String
* Boolean
* ID: A unique identifier used to re-fetch an object or as the key for cache.

We can also use *mutations* to update data in our GraphQL database, and *subscriptions* to subscribe to data updates with websockets.

## GraphiQL

We will also be using GraphiQL, which is an in-browser IDE for exploring GraphQL queries, it comes setup in Hasura!

# Drawing App

Let's set up our database for our [game]( https://quizzical-mclean-87c84c.netlify.com/) we're going to be building for the rest of the workshop.

*****

# Finale

With some type type here and add some code there and voila!

We have a live up and running version too.

[live site here](https://brianlovega.github.io/hasura-tutorial/)

Other users anywhere accessing the site can click and update a color at any time!
Pretty cool huh?
Check back tomorrow to see if it has changed!
This is all thanks to web sockets providing a live link from this rect front end to a free api for each of the squares created on Heroku with the amazing Hasura App. Give them a try at [HASURA FREE QUICK DEMO](https://docs.hasura.io/1.0/graphql/manual/getting-started/heroku-simple.html) And the amazing instruction skills of [Ali Spitell](https://hasura.io/community/hasura-realtime-graphql-workshop-with-ali)

Made by Brian Loveless [Portfolio Site](https://brianlovega.github.io/portfolio-improvements/)
