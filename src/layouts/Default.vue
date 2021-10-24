<template>
  <v-app>
    <v-app-bar
      flat
      class="navBar"
      color="blue darken-1"
      height="100"
    > 

      <v-toolbar-title>
        <g-link style="color:#fff;text-decoration:none" to='/' > Guia Cidadão </g-link>
      </v-toolbar-title>

      <v-spacer />

      <img style="height:80px;" src="https://cdn.es.gov.br/images/logo/governo/brasao/right-white/Brasao_Governo_240.png" />

    </v-app-bar>

    <v-container>
        <v-row class="mt-15 px-3">
          <v-flex xs12 text-center class="mb-5">
            <h1 class="display-1">Central de Dúvidas</h1>
          </v-flex>
          <v-flex md6 offset-md-3 xs12>
            <v-text-field
              v-model="searchText"
              solo
              hide-details
              label="O que você procura?"
              prepend-inner-icon="mdi-magnify"
            />
          </v-flex>
        </v-row>
    </v-container>

    <v-main
      class="my-10 px-3"
    >
      <slot :searchText="searchText" />
    </v-main>

    <v-footer 
      color="pink darken-1 white--text"
      mt-5
    >
      <v-container>
      <p>Praça João Clímaco, 142 - Cidade Alta, Centro<br/>
      CEP: 29018-110 - Vitória / ES<br/>
      Tel.: (27) 3636-1024</p>
      </v-container>
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      searchText: ''
    }
  }
}
</script>
