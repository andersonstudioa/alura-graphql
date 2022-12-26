const { ApolloServer, gql } = require('apollo-server')

const users = [
    {
        nome: "Ana",
        ativo: true,
    },
    {
        nome: "Marcia",
        ativo: false,
    },
]

//Criando o schema com linguagem chamada SDL - Schema Definition Language
//O tipo de objeto User está sendo definido por meio da função gql
const typeDefs = gql `
    type User {
        nome: String!
        ativo: Boolean!
        email: String
    }
`

const server = new ApolloServer({ typeDefs, resolvers})