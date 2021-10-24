<template>
  <Layout>
    <v-container>
      <v-flex xs12 md10 offset-md-1 mb-10>
        <v-tabs
          v-model="tab"
          color="black"
          show-arrows
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab>
            Todos
          </v-tab>
          <v-tab>
            Saúde
          </v-tab>
          <v-tab>
            Educação
          </v-tab>
          <v-tab>
            Segurança
          </v-tab>
          <v-tab>
            Documentos
          </v-tab>
          <v-tab>
            Trânsito
          </v-tab>
          <v-tab>
            Saúde
          </v-tab>
          <v-tab>
            Educação
          </v-tab>
          <v-tab>
            Segurança
          </v-tab>
          <v-tab>
            Documentos
          </v-tab>
          <v-tab>
            Trânsito
          </v-tab>

        </v-tabs>
      </v-flex>
      

      <v-row>
        <v-flex x12 md6 lg4
          v-for="edge in $page.articles.edges" :key="edge.node.id"
        >
          <v-card class="mt-5 mx-1">
            <v-card-text>
              <p class="text-h4 text--primary">
                {{ edge.node.title }}
              </p>
              <p>{{ edge.node.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                depressed
                align-end
                color="blue lighten-1 white--text"
              >
                Ler mais...
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
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
