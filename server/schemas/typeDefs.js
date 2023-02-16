const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    numberOfPets: Int
    location: String
    listPets: [Pet]!
    posts: [Post]!
    friends: Int
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Pet {
    _id: ID
    petName: String
    petAge: Int
    petType: String
    petGender: String
    comments: [Comment]!
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
    posts(username:String): [Post]
    post(postID: ID!): Post
  }

  type Mutation {
    login(email:String!, password:String!): Auth
    addUser(email:String!, username:String!, password:String!): Auth
    addPost(postText: String!): Post
    addFriend(username: String!, email: String!, password: String!): Auth
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;


module.exports = typeDefs;
