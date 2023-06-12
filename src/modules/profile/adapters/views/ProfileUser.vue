<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center bg-poa"
  >
    <div class="card mx-4">
      <div class="card-body py-5 px-5">
        <!-- Información del usuario -->
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="profile-image">
              <img src="../../../../assets/pastilla.png" alt="Perfil" />
            </div>
          </div>
          <div class="col-md-8">
            <h3>{{ user.fullName }}</h3>
            <h5><b>Director de:</b> {{ user.division }}</h5>
            <h5><b>Correo electrónico:</b> {{ user.email }}</h5>
            <h5><b>Teléfono:</b> {{ user.phone }}</h5>
          </div>
        </div>

        <hr />

        <!-- Información del asistente -->
        <div class="row mt-4">
          <div class="col-md-12">
            <h4>Asistente asignado:</h4>
            <h5><b>Nombre:</b> {{ assistant.fullName }}</h5>
            <h5><b>Administrador de:</b> {{ assistant.division }}</h5>
            <h5><b>Correo electrónico:</b> {{ assistant.email }}</h5>
            <h5><b>Teléfono:</b> {{ assistant.phone }}</h5>
          </div>
        </div>

        <!-- Botón para cambiar la contraseña -->
        <div class="row mt-4">
          <div class="col-md-12 text-center">
            <button @click="changeModal" class="btn btn-primary">
              Cambiar contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal">
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
        division: "Desarrollo",
        email: "amandaalarcon@utez.edu.mx",
        phone: "1234567890",
      },
      showModal: false,
    };
  },
  methods: {
    changeModal() {
      this.showModal = !this.showModal;
      console.log(this.showModal);
    },
  },
});
</script>

<style scoped>
.bg-poa {
  background-color: #f0f0f0;
  width: 100%;
  height: 100vh;
}
.card {
  width: 100%;
}

.profile-image {
  overflow: hidden;
  margin-right: 20px;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
