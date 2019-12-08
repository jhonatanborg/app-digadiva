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
      <h6>Informações de segurança</h6>
      <v-text-field
        outlined
        flat
        color="purple darken-2"
        label="Senha"
        required
        type="password"
        v-model="pass"
      ></v-text-field>
      <v-text-field
        outlined
        flat
        color="purple darken-2"
        label="Confirmar senha"
        required
        type="password"
        v-model="pass2"
      ></v-text-field>
      <v-btn block @click="next()" class="text-white" color="purple darken-2">
        <span>Confirmar</span>
      </v-btn>
      <v-divider></v-divider>
      <v-btn
        block
        tag="router-link"
        to="/register-3"
        class="text-decoration-none"
        color="primary"
      >Voltar</v-btn>
    </div>
  </v-app>
</template>

<script>

import axios from 'axios'

export default {
  mounted: function () {
  },
  data: () => ({
    pass: '',
    pass2: '',
  }),
  methods: {
    next() { // CHAMA A FUNÇÃO NEXT PARA SALVAR OS DADOS LOCALMENTE
      let pass = this.pass
      let pass2 = this.pass2
      if (pass === pass2) {
        localStorage.setItem('pass', pass)
        localStorage.setItem('pass2', pass2)
        const register = 'http://192.168.0.12:8000/register'
        axios({
          method: 'post',
          url: register,
          data: {
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            cpf: localStorage.getItem('cpf'),
            phone: localStorage.getItem('phone'),
            birthday: localStorage.getItem('birthday'),
            pass: localStorage.getItem('pass'),
          }
        }).then(data => {
          console.log(data)
          this.$router.push('/')

          
        })
      } else {
        alert('as senhas não estão iguais')
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