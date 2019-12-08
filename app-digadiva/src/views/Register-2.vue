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
      >Você pode se sentir segura, as denuncias são totalmente feitas em anonimato</h6>
    </div>
    <div class="container p-4 text-decoration-none">
      <h6>Informações para contato</h6>
      <v-text-field
        v-model="email"
        outlined
        flat
        color="purple darken-2"
        label="E-mail"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="phone"
        outlined
        flat
        color="purple darken-2"
        label="Celular"
        type="number"
      ></v-text-field>
      <v-btn block @click="next()" class="text-white" color="purple darken-2">
        <span>Próximo</span>
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
  mounted: function () {
  },
  data: () => ({
    email: "",
    phone: "",
  }),
  methods: {
    next() {
      if (this.email != "") {
        localStorage.setItem('email', this.email)
        localStorage.setItem('phone', this.phone)
        this.$router.push('/register-3')
      }
      // CHAMA A FUNÇÃO NEXT PARA SALVAR OS DADOS LOCALMENTE
    }
  }
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