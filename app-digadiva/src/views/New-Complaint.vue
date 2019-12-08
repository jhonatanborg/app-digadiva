<template>
  <v-app>
    <v-app-bar fixed absolute elevate-on-scroll style="background-color:#5f31ab;" dark>
      <v-btn icon tag="router-link" to="/home">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Nova Denúncia</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container class="mt-5">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-text-field
        class="pt-5 mt-5"
        v-model="local"
        required
        outlined
        flat
        color="purple darken-2"
        label="Local"
      ></v-text-field>
      <v-textarea
        v-model="description"
        required
        class
        color="purple darken-2"
        auto-grow
        label="Escreva aqui..."
        rows="4"
        row-height="30"
        outlined
        flat
      ></v-textarea>

      <v-select
        v-model="levelComplaint"
        required
        :items="levels"
        label="Gravidade"
        flat
        color="purple darken-2"
        outlined
      ></v-select>

      <v-spacer class="py-5"></v-spacer>
      <v-btn
        block
        class="text-white mt-12"
        color="purple darken-2"
        @click="NewComplaint()"
      >Confirmar</v-btn>
    </v-container>
    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn color="pink" text @click="snackbar = false">Fechar</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>

import axios from 'axios'

export default {

  data: () => ({
    levelComplaint: "",
    local: "",
    description: "",
    snackbar: false,
    text: 'Denuncia efetuada com sucesso',
    levels: ['Alto', 'Médio', 'Baixo'],
  }),
  methods: {
    NewComplaint() {
      console.log("Nova Denuncia")
      console.log(this.levelComplaint) // nivel da denuncia
      console.log(this.description) // descricao da denuncia
      console.log(this.local) // local da denuncia
      // this.$router.push('/home')
      // se der tudo certo abre esse snackbar abaixo 

      const post = 'http://192.168.0.12:8000/send_post'
      axios({
        method: 'post',
        url: post,
        data: {
          description: this.description,
          local: this.local,
          status: this.levelComplaint,
          user_id: localStorage.getItem('id'),
          user_name: localStorage.getItem('user_name')
        }
      }).then(data => {
        data = data.data
        console.log(data)
        this.text = data.msg
        this.snackbar = true
      })
    }
  }

}
</script>

<style>
</style>