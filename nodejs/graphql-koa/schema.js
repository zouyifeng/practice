const { graphql, buildSchema } = require('graphql') 

const mockDataBase = {
  1: {
    id: 1,
    avatar: 'avatar',
    name: 'name',
    isTop: true,
    content: 'content',
    publishDate: 'publishDate',
    commentNum: 10,
    praiseNum: 4
  },
  2: {
    id: 2,
    avatar: 'avatar',
    name: 'name',
    isTop: true,
    content: 'content',
    publishDate: 'publishDate',
    commentNum: 10,
    praiseNum: 4
  },
  3: {
    id: 3,
    avatar: 'avatar',
    name: 'name',
    isTop: true,
    content: 'content',
    publishDate: 'publishDate',
    commentNum: 10,
    praiseNum: 4
  },
}

const schema = buildSchema(`
  type Comment {
    id: Int
    avatar: String
    name: String
    isTop: Boolean
    content: String
    publishDate: String
    commentNum: Int
    praiseNum: Int
  }
  type Query {
    comment: [Comment]
  }
  type Mutation {
    praise(id: Int): Int
  }
`)

schema.getQueryType().getFields().comment.resolve = () => { 
  return Object.keys(mockDataBase).map(key => { 
    return mockDataBase[key]
  })
}

schema.getMutationType().getFields().praise.resolve = (args, {id}) => { 
  mockDataBase[id].praiseNum++
  return mockDataBase[id].praiseNum
}

module.exports = schema