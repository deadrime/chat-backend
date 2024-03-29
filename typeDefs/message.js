const { gql } = require('apollo-server');

const Message = gql`
  type Message {
    id: ID!
    text: String!
    from: User!
    chatId: ID!
    chat: Chat!
    createdAt: Float
  }
`;

module.exports = Message;