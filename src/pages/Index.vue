<template>
  <Layout>
    <v-container>
      <v-tabs v-model="tab" centered>
        <v-tab>Categoria 1</v-tab>
        <v-tab>Categoria 2</v-tab>
        <v-tab>Categoria 3</v-tab>
      </v-tabs>
    </v-container>

    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
        <p class="text-h4 text--primary">
          Título Artigo
        </p>
        <p>Descrição artigo...</p>
        <div class="text--primary">
          Preview do artigo preview do artigo preview do artigo...
        </div>
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
  </Layout>
</template>

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
