// import { HttpLink } from "apollo-link-http";
// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";

// export default new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: "https://bwl-has-pixelart.herokuapp.com/v1/graphql"
//   })
// });


import { WebSocketLink } from "apollo-link-ws";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new WebSocketLink({
    uri: "wss://bwl-has-pixelart.herokuapp.com/v1/graphql",
    options: {
      reconnect: true
    }
  })
});