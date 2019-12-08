<template>
  <v-app id="bg-app">
    <div class="mx-auto container text-center">
      <div id="image-login">
        <img height="auto" width="100%" src="../assets/images/woman-2.png" class="text-center" />
      </div>
      <h4 class="text-center">
        <b>DigaDiva</b>
      </h4>
      <h6
        class="text-center"
      >O app diga diva vai te ajudar a denunciar casos de assedio em estabelecimentos.</h6>
    </div>
    <div class="container p-4 text-decoration-none">
      <v-text-field outlined flat color="dark" label="Nome"></v-text-field>
      <v-text-field outlined flat color="dark" label="Sobrenome"></v-text-field>
      <v-btn block tag="router-link" to="/register" class="text-white" color="purple darken-2">
        <span>Confirmar</span>
      </v-btn>
      <v-divider></v-divider>
      <v-btn
        block
        tag="router-link"
        to="/register"
        class="text-decoration-none"
        color="primary"
      >Voltar</v-btn>
    </div>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>
#image-login {
  width: 200px;
  margin: 0 auto;
}
#bg-app {
  background-color: #fff;
}
</style>