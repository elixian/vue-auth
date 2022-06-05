<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Sign up</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userStore } from '@/stores/counter';

const user_store = userStore();



    const email = ref('')
    const password = ref('')

    const handleSubmit = async() => {
      try{
        user_store.setUser({email:email.value, password :password.value})
      }
      catch(err){
      console.log("🚀 ~ file: Signup.vue ~ line 31 ~ handleSubmit ~ err", err)
        
      }
      
    }

    

</script>