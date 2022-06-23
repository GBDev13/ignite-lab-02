import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4nktdpx07vk01yw5u4w37v3/master",
  cache: new InMemoryCache(),
});
