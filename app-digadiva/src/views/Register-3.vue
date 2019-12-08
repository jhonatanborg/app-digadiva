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
      <v-text-field v-model="cpf" outlined flat color="purple darken-2" label="CPF" type="number"></v-text-field>
      <v-text-field
        v-model="birthday"
        outlined
        flat
        color="purple darken-2"
        type="text"
        label="Data de nascimento"
      ></v-text-field>
      <v-btn block @click="next()" color="purple darken-2">
        <span>Confirmar</span>
      </v-btn>
      <v-divider></v-divider>
      <v-btn
        block
        tag="router-link"
        to="/register-2"
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
    cpf: "",
    birthday: "",
  }),
  methods: {
    ValidCPF(strCPF) {
      let Soma;
      let Resto;
      Soma = 0;
      let i
      if (strCPF == "00000000000") return false;
      for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
      if ((Resto == 10) || (Resto == 11)) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10))) return false;
      Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
      if ((Resto == 10) || (Resto == 11)) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11))) return false;
      return true;
    },
    next() {

      if (this.cpf != "") {
        if (!this.ValidCPF(this.cpf)) {
          alert('cpf inválido')
        } else {
          localStorage.setItem('cpf', this.cpf)
          localStorage.setItem('birthday', this.birthday)
          this.$router.push('/register-4')
        }
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