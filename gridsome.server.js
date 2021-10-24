// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(async actions => {
    const { data: articles } = await axios.get('http://localhost:1337/articles')
    const { data: categories } = await axios.get('http://localhost:1337/categories')

    const articleCollection = actions.addCollection({
      typeName: 'Article'
    })

    const categoryCollection = actions.addCollection({
      typeName: 'Category'
    })

    for (const article of articles) {
      articleCollection.addNode({
        id: article.id,
        title: article.title,
        description: article.description,
        category: article.categories[0].id
      })
    }

    for (const category of categories) {
      categoryCollection.addNode({
        id: category.id,
        name: category.name
      })
    }
  })
}