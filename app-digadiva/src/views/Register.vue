<template>
  <v-app id="bg-app">
    <div class="mx-auto container text-center">
      <div id="image-login">
        <img height="auto" width="100%" src="../assets/images/woman-2.png" class="text-center" />
      </div>
      <h4 class="text-center">
        <b>DigaDiva</b>
      </h4>
      <h6 class="text-center">Por você, por mim e por nós todas</h6>
    </div>
    <div class="container p-4 text-decoration-none">
      <v-text-field id="name" required outlined flat color="purple darken-2" v-model="name" label="Nome"></v-text-field>
      <v-btn block @click="next()" class="text-white" color="purple darken-2">
        <span>Próximo</span>
      </v-btn>
      <v-divider></v-divider>
      <v-btn block tag="router-link" to="/" class="text-decoration-none" color="primary">Voltar</v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  mounted: function () {
  },
  data: () => ({
    name: '',
  }),
  methods: {
    next() { // CHAMA A FUNÇÃO NEXT PARA SALVAR OS DADOS LOCALMENTE
    if (this.name != "")  {
      localStorage.setItem('name', this.name)
      this.$router.push('/register-2')
    }
      
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