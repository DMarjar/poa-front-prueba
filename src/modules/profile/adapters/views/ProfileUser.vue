<template>
  <b-card class="p-4 h-100">
    <div class="row h-50">
      <div class="col-12 col-md-4 img-container">
        <img class="profile-image" src="https://via.placeholder.com/256" />
      </div>
      <div class="col-12 col-md-8 text-container">
        <div class="mb-3">
          <h3>{{ user.fullName }}</h3>
        </div>
        <div class="mb-3">
          <h5><b>Director de:</b> {{ user.division }}</h5>
        </div>
        <div class="mb-3">
          <h5><b>Correo electrónico:</b> {{ user.email }}</h5>
        </div>
        <div class="mb-3">
          <h5><b>Teléfono:</b> {{ user.phone }}</h5>
        </div>
      </div>
    </div>

    <hr />

    <div class="row h-50">
      <div class="col-12 text-container">
        <div class="mb-3">
          <h5><b>Nombre de asistente: </b>{{ assistant.fullName }}</h5>
        </div>
        <div class="mb-3">
          <h5><b>Area:</b> {{ assistant.division }}</h5>
        </div>
        <div class="mb-3">
          <h5><b>Correo electrónico:</b> {{ assistant.email }}</h5>
        </div>
        <h5><b>Teléfono:</b> {{ assistant.phone }}</h5>
      </div>

      <div class="col-12">
        <hr />
      </div>

      <div class="col-12 text-center">
        <b-button v-b-modal.modal-center class="btn-utez-1" type="primary">
          Cambiar contraseña
        </b-button>
      </div>
    </div>
    <div>
      <b-modal id="modal-center" centered title="Cambio de contraseña">
        <b-form>
          <b-form-group
            id="input-group-1"
            label="Contraseña actual:"
            label-for="current-password"
          >
            <b-form-input
              id="input-1"
              type="password"
              placeholder="Escribe tu contraseña actual..."
              required
            />
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Nueva contraseña:"
            label-for="new-password"
            description="La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un símbolo y un número."
          >
            <b-form-input
              id="input-2"
              placeholder="Escribe tu nueva contraseña..."
              required
            />
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Confirmar contraseña:"
            label-for="repeat-password"
          >
            <b-form-input
              id="input-3"
              type="password"
              placeholder="Confirma tu nueva contraseña"
              required
            />
          </b-form-group>
        </b-form>
        <template #modal-footer="{ cancel, submitPassword }">
          <b-button class="btn-utez-2" type="primary" @click="cancel()">
            Cancelar
          </b-button>
          <b-button class="btn-utez-1" type="primary" @click="submitPassword()">
            Guardar
          </b-button>
        </template>
      </b-modal>
    </div>
  </b-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProfileUser",
  data() {
    return {
      user: {
        fullName: "Juan Alfonso Murillo Torres",
        division:
          "División Académica de Tecnologías de la Información y Diseño",
        email: "juanmurillo@utez.edu.mx",
        phone: "1234567890",
      },
      assistant: {
        fullName: "Amanda Alarcón Vera",
        division:
          "División Académica de Tecnologías de la Información y Diseño",
        email: "amandaalarcon@utez.edu.mx",
        phone: "1234567890",
      },
    };
  },
  methods: {
    //
  },
});
</script>

<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.profile-image {
  overflow: hidden;
  width: 18rem;
}

.btn-utez-1 {
  background-color: #0eaf85;
  border-color: #0eaf85;
}

.btn-utez-2 {
  background-color: #002e60;
  border-color: #002e60;
}
</style>
