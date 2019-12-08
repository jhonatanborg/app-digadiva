<template>
  <v-app id="bg-app">
    <div class="mx-auto">
      <div id="image-login">
        <img height="auto" width="100%" src="../assets/images/woman-1.png" />
      </div>
      <h4 class="text-center">
        <b>DigaDiva</b>
      </h4>
      <h6 class="text-center">Por você, por mim e por nós todas</h6>
    </div>
    <div color="white" class="p-4">
      <v-text-field id="email" outlined flat color="dark" label="Email"></v-text-field>
      <v-text-field id="pass" outlined flat color="dark" label="Senha"></v-text-field>
      <v-btn block color="purple darken-2" @click="login()">
        <span class="text-white">Login</span>
      </v-btn>
      <v-divider></v-divider>
      <v-btn block tag="router-link" to="/register" color="primary">Registre-se</v-btn>
    </div>
  </v-app>
</template>
<script>

import axios from 'axios'

export default {
  mounted: function () {
  },
  methods: {
    login() {
      const login = 'http://192.168.0.12:8000/login'
      axios({
        method: 'post',
        url: login,
        data: {
          email: document.getElementById('email').value,
          pass: document.getElementById('pass').value
        }
      }).then(data => {
        console.log(data.data)
        data = data.data
        if (data.msg == 'logado') {
          localStorage.setItem('id', data.id)
          localStorage.setItem('name', data.name)
          localStorage.setItem('user_name', data.user_name)
          localStorage.setItem('cpf', data.cpf)
          this.$router.push('/home')
        } else {
          alert(data.msg)
        }
      })
    }
  }
}
</script>
<style>
#image-login {
  width: 300px;
}
#bg-app {
  background-color: #fff;
}
</style>
