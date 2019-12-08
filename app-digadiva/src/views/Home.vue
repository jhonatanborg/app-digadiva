<template>
  <v-app>
    <v-card height="230px" class="overflow-hidden" style="background-color:#5f31ab;">
      <v-app-bar tile fixed style="background-color:#5f31ab;" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <div class="mt-2">
          <h4>DigaDiva</h4>
        </div>
        <v-spacer></v-spacer>
      </v-app-bar>
      <div class="container">
        <div class="py-5 pt-5 mb-5">
          <h5 class="mb-5"></h5>
          <h5></h5>
          <h1 class="pt-5">
            <span class="text-white">1247</span>
          </h1>
          <h5>
            <span class="text-white">Lugares avaliados por mulheres</span>
          </h5>
          <v-text-field class="mt-5" solo label="Buscar empresas" append-icon="mdi-magnify"></v-text-field>
        </div>
      </div>
    </v-card>
    <div class="container">
      <v-list three-line>
        <v-subheader>Recentes</v-subheader>
        <v-list-item @click="businessDetails()" v-for="alert in alerts" :key="alert.id">
          <v-list-item-content>
            <v-list-item-title>{{alert.local}}</v-list-item-title>
            <v-list-item-subtitle>{{alert.description}}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-chip color="red" small>{{alert.status}}</v-chip>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </div>
    <v-bottom-navigation v-model="bottomNav" fixed>
      <v-btn value="local">
        <span>Locais</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      <v-btn value="home">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn tag="router-link" to="/new-complaint" value="denuncie">
        <span>Denúncia</span>
        <v-icon>mdi-bullhorn</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Apelido da mulher</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title @click="logout()">Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
<script>

import axios from 'axios'

export default {
  mounted: function () {
    this.list()
  },
  data: () => ({
    alerts: '',
    bottomNav: 'home',
    activeBtn: 1,
    drawer: false,
    group: null,
    selection: '08',
    sizes: [
      '04', '06', '08', '10', '12', '14',
    ],
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    businessDetails() {
      this.$router.push('/complaint-details/' + 15)
    },
    logout() {
      localStorage.clear()
      this.$router.push('/')
    },
    list() {
      const list = 'http://192.168.0.12:8000/posts'
      axios({
        method: 'get',
        url: list
      }).then(data => {
        data = data.data
        console.log(data)
        this.alerts = data
      })
    }
  }
}
</script>

<style>
</style>