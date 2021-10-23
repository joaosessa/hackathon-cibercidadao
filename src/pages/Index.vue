<template>
  <Layout>
    <v-container>
      <v-tabs v-model="tab" centered>
        <v-tab>Categoria 1</v-tab>
        <v-tab>Categoria 2</v-tab>
        <v-tab>Categoria 3</v-tab>
      </v-tabs>
    
      <v-row>
        <v-card
          v-for="edge in $page.articles.edges" :key="edge.node.id"
          max-width="344"
          class="mt-5 mx-1"
        >
          <v-card-text>
            <p class="text-h4 text--primary">
              {{ edge.node.title }}
            </p>
            <p>{{ edge.node.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="blue lighten-1"
            >
              Ler mais...
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  articles: allArticle {
    edges {
      node {
        id
        title
        description
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
    return {
      tab: 0
    }
  },
  watch: {
    tab(val) {
      if (tab === 0) {
        this.showAllEvents()
      } else {
        this.showEventsByType()
      }
    }
  },
  methods: {
    showAllEvents() {
      console.log("all")
    },
    showEventsByType() {
      console.log("type")
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
