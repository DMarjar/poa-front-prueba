<template>
    <div>
      <nav class="sidebar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Opción 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Opción 2</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              Opción 3
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Subopción 1</a></li>
              <li><a class="dropdown-item" href="#">Subopción 2</a></li>
              <li><a class="dropdown-item" href="#">Subopción 3</a></li>
              <li><a class="dropdown-item" href="#">Subopción 4</a></li>
              <li><a class="dropdown-item" href="#">Subopción 5</a></li>
              <li><a class="dropdown-item" href="#">Subopción 6</a></li>
              <li><a class="dropdown-item" href="#">Subopción 7</a></li>
              <li><a class="dropdown-item" href="#">Subopción 8</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Opción 4</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Opción 5</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Opción 6</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Opción 7</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Opción 8</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Opción 9</a>
          </li>
        </ul>
      </nav>
    </div>
  </template>

<style scoped>
.sidebar {
  background-color: white;
  height: calc(100vh - 90px);
  top: 0;
  left: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar-nav {
  padding-top: 20px;
}

.nav-item {
  margin-bottom: 10px;
}

.nav-link {
  display: block;
  padding: 10px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #f0f0f0;
  color: black;
}

.dropdown-menu {
  position: static;
  background-color: white;
  border: none;
  box-shadow: none;
}

.dropdown-item {
  padding: 5px 20px;
  background-color: white;
  transition: background-color 0.3s;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
  color: black;
}
</style>
