import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Fruit {
    id: Int
    name: String
    price: Int
  }

  type Query {
    fruit(id: Int): Fruit,
    fruits: [Fruit]
  }
`
