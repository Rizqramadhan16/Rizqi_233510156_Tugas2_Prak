<template>
  <div id="app">
    <div class="app-container">
      <h1>Selamat Datang di Aplikasi Pendaftaran</h1>
      <RegistrationForm />
    </div>
  </div>
</template>

<script>
import RegistrationForm from './components/RegistrationForm.vue';

export default {
  components: {
    RegistrationForm
  }
};
</script>

<style>
/* Global Styles */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0f7fa;
  background: url('https://cdn.wallpapersafari.com/40/55/k7W8KR.jpg') no-repeat center center fixed;
  background-size: cover; /* Menggunakan gambar latar belakang */
  color: #333;
  transition: background 0.5s ease-in-out; /* Transisi halus untuk latar belakang */
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-container {
  background-color: rgba(255, 255, 255, 0.8); /* Latar belakang dengan transparansi */
  padding: 40px 50px;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;
}

.app-container:hover {
  transform: scale(1.05); /* Efek zoom saat hover */
}

h1 {
  font-size: 36px;
  color: #00796b;
  margin-bottom: 30px;
  font-weight: bold;
  text-transform: uppercase; /* Menambahkan efek huruf kapital */
  cursor: pointer;
  transition: color 0.3s ease-in-out;
}

h1:hover {
  color: #00bcd4; /* Warna berubah saat hover */
}

@media (max-width: 600px) {
  .app-container {
    padding: 20px 30px;
  }

  h1 {
    font-size: 28px;
  }
}
</style>
