<template>
  <v-app>
    <v-carousel
      :continuous="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="150px"
      :show-arrows="false"
    >
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
        <v-icon tag="router-link" to="/home" class="mt-2 ml-2">mdi-arrow-left</v-icon>
      </v-carousel-item>
    </v-carousel>
    <v-list two-line>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <b>Martelo Tarumas</b>
          </v-list-item-title>
          <v-list-item-subtitle>154 denúncias</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card class="mx-auto" style="box-shadow:none;">
      <v-list-item>
        <v-list-item-avatar color="red">JS</v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            <b>Joseane Silva</b>
          </v-list-item-title>
          <v-list-item-subtitle>5 dias atrás</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>Ocorreu comigo uma situação chata hoje nessa empresa, isso bem deixou bem triste, sempre frequento a mesma</v-card-text>
    </v-card>
    <v-btn></v-btn>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'http://ancoramar.com.br/wp-content/uploads/2015/06/nosso_bar.jpg',
        },
        {
          src: 'http://gabrielabigarelli.com.br/wp-content/uploads/2017/09/comer-beber-e-desfrutar-side-restaurante-e-bar1-1024x768.jpg',
        },
        {
          src: 'http://ancoramar.com.br/wp-content/uploads/2015/06/nosso_bar.jpg',
        },
        {
          src: 'http://ancoramar.com.br/wp-content/uploads/2015/06/nosso_bar.jpg',
        },
      ],
    }
  },
}
</script>

<style>
</style>