<template>
  <div>
    <b-navbar type="dark" class="bg-utez-blue text-white">
      <b-navbar-brand
        ><img src="@/assets/poa-logo.png" alt="POA-logo" width="40px"
      /></b-navbar-brand>
      <b-navbar-brand>Programa Operativo Anual</b-navbar-brand>

      <b-navbar-nav class="ml-auto small text-right">
        <b-row>
          <b-col cols="12">
            <b-nav-item>
              {{ user.area }}
            </b-nav-item>
          </b-col>
          <b-col cols="12">
            <b-nav-item-dropdown right>
              <template #button-content>
                {{ user.role }}
              </template>
              <b-dropdown-item href="#">Mi perfil</b-dropdown-item>
              <b-dropdown-divider/>
              <b-dropdown-item href="#">Cerrar sesión</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-col>
        </b-row>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavBar",
  data() {
    return {
      user: {
        area: "División Académica de Tecnologías de la Información y Diseño",
        role: "Director",
      },
    };
  },
});
</script>

<style>
.bg-utez-blue {
  background-color: #002e60;
  color: white;
}
</style>
