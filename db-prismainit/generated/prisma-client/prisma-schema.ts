// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateTweet {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createTweet(data: TweetCreateInput!): Tweet!
  updateTweet(data: TweetUpdateInput!, where: TweetWhereUniqueInput!): Tweet
  updateManyTweets(data: TweetUpdateManyMutationInput!, where: TweetWhereInput): BatchPayload!
  upsertTweet(where: TweetWhereUniqueInput!, create: TweetCreateInput!, update: TweetUpdateInput!): Tweet!
  deleteTweet(where: TweetWhereUniqueInput!): Tweet
  deleteManyTweets(where: TweetWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  tweet(where: TweetWhereUniqueInput!): Tweet
  tweets(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tweet]!
  tweetsConnection(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TweetConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  tweet(where: TweetSubscriptionWhereInput): TweetSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tweet {
  id: ID!
  text: String!
  author: User
}

type TweetConnection {
  pageInfo: PageInfo!
  edges: [TweetEdge]!
  aggregate: AggregateTweet!
}

input TweetCreateInput {
  id: ID
  text: String!
  author: UserCreateOneWithoutTweetsInput
}

input TweetCreateManyWithoutAuthorInput {
  create: [TweetCreateWithoutAuthorInput!]
  connect: [TweetWhereUniqueInput!]
}

input TweetCreateWithoutAuthorInput {
  id: ID
  text: String!
}

type TweetEdge {
  node: Tweet!
  cursor: String!
}

enum TweetOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
}

type TweetPreviousValues {
  id: ID!
  text: String!
}

input TweetScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [TweetScalarWhereInput!]
  OR: [TweetScalarWhereInput!]
  NOT: [TweetScalarWhereInput!]
}

type TweetSubscriptionPayload {
  mutation: MutationType!
  node: Tweet
  updatedFields: [String!]
  previousValues: TweetPreviousValues
}

input TweetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TweetWhereInput
  AND: [TweetSubscriptionWhereInput!]
}

input TweetUpdateInput {
  text: String
  author: UserUpdateOneWithoutTweetsInput
}

input TweetUpdateManyDataInput {
  text: String
}

input TweetUpdateManyMutationInput {
  text: String
}

input TweetUpdateManyWithoutAuthorInput {
  create: [TweetCreateWithoutAuthorInput!]
  delete: [TweetWhereUniqueInput!]
  connect: [TweetWhereUniqueInput!]
  set: [TweetWhereUniqueInput!]
  disconnect: [TweetWhereUniqueInput!]
  update: [TweetUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TweetUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [TweetScalarWhereInput!]
  updateMany: [TweetUpdateManyWithWhereNestedInput!]
}

input TweetUpdateManyWithWhereNestedInput {
  where: TweetScalarWhereInput!
  data: TweetUpdateManyDataInput!
}

input TweetUpdateWithoutAuthorDataInput {
  text: String
}

input TweetUpdateWithWhereUniqueWithoutAuthorInput {
  where: TweetWhereUniqueInput!
  data: TweetUpdateWithoutAuthorDataInput!
}

input TweetUpsertWithWhereUniqueWithoutAuthorInput {
  where: TweetWhereUniqueInput!
  update: TweetUpdateWithoutAuthorDataInput!
  create: TweetCreateWithoutAuthorInput!
}

input TweetWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  author: UserWhereInput
  AND: [TweetWhereInput!]
}

input TweetWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  tweets(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tweet!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  tweets: TweetCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutTweetsInput {
  create: UserCreateWithoutTweetsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTweetsInput {
  id: ID
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  tweets: TweetUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneWithoutTweetsInput {
  create: UserCreateWithoutTweetsInput
  update: UserUpdateWithoutTweetsDataInput
  upsert: UserUpsertWithoutTweetsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTweetsDataInput {
  name: String
}

input UserUpsertWithoutTweetsInput {
  update: UserUpdateWithoutTweetsDataInput!
  create: UserCreateWithoutTweetsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  tweets_some: TweetWhereInput
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`