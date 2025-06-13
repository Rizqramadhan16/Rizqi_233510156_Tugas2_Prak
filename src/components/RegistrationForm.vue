<template>
  <div class="registration-form">
    <h2>Formulir Pendaftaran</h2>

    <form @submit.prevent="submitForm">
      <div class="input-group">
        <label for="name">Nama:</label>
        <input type="text" id="name" v-model="name" placeholder="Masukkan nama lengkap" required />
      </div>

      <div class="input-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" :class="{'invalid': !isEmailValid}" placeholder="Masukkan alamat email" required />
        <span v-if="!isEmailValid" class="error">Email tidak valid</span>
      </div>

      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" placeholder="Masukkan password" required />
      </div>

      <div class="input-group">
        <label for="agree">
          <input type="checkbox" id="agree" v-model="agreeTerms" />
          Saya setuju dengan syarat dan ketentuan
        </label>
      </div>

      <button :disabled="!isFormValid" type="submit">Kirim</button>
    </form>

    <!-- Conditional Rendering untuk Pesan Sukses -->
    <div v-if="formSubmitted" class="success-message">
      <p>Terima kasih telah mendaftar!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      agreeTerms: false,
      formSubmitted: false
    };
  },
  computed: {
    isEmailValid() {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email);
    },
    isFormValid() {
      return this.name && this.isEmailValid && this.password && this.agreeTerms;
    }
  },
  methods: {
    submitForm() {
      this.formSubmitted = true;
      this.name = '';
      this.email = '';
      this.password = '';
      this.agreeTerms = false;
    }
  }
};
</script>

<style scoped>
/* Global reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #e0f7fa; /* Soft background color */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #333;
}

.registration-form {
  background: linear-gradient(to top left, #00bcd4, #00796b); /* Gradient background with smooth colors */
  padding: 40px 50px;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2); /* Deeper shadow for a more elevated look */
  width: 100%;
  max-width: 500px;
  text-align: center;
  transition: transform 0.3s ease;
}

h2 {
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
  transition: color 0.3s ease;
}

/* Form input group */
.input-group {
  text-align: left;
  margin-bottom: 20px;
}

label {
  font-size: 16px;
  color: #fff;
  margin-bottom: 5px;
  display: block;
}

input {
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #ccc;
  font-size: 16px;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 10px;
}

input:focus {
  border-color: #00bcd4;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 188, 212, 0.5);
}

input::placeholder {
  color: #888;
}

button {
  padding: 14px;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:disabled {
  background-color: #80deea;
  cursor: not-allowed;
}

button:hover:enabled {
  background-color: #00838f;
  transform: scale(1.05);
}

.error {
  color: #f44336;
  font-size: 0.9em;
  margin-top: -10px;
}

.invalid {
  border-color: #f44336;
}

.success-message {
  background-color: #4caf50;
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 16px;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

h2:hover {
  color: #00796b; /* Color change on hover */
}

.registration-form:hover {
  transform: translateY(-5px); /* Slight elevation effect on hover */
}
</style>
