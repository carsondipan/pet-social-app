const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    numberOfPets: Int
    location: String
    listPets: [Pet]
    posts: String
    friends: Int

  }

  type Pet {
    _id: ID
    petName: String
    petAge: Int
    petType: String
    petGender: String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    searchUsers(term: String!): [User]!
    me: User
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
