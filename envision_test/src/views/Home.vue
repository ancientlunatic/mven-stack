<template>
  <div>
    <div> <button @click="logout()">Logout</button></div>
    <div class="card">
      <img src="/img/icon/img_avatar.png" alt="Avatar" style="width:100%">
    <div v-if="user" class="container">
      <h4><b>{{ user.firstName }} {{ user.lastName }}</b></h4> 
      <p>Date of birth {{ user.dob }}</p> 
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { clearData, getToken } from "@/utils/helper";
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref({});

const logout = () => {
  clearData();
  router.push('/login');
}

const fetachUserDetails = async () => {
  const response = await fetch(`${process.env.VUE_APP_BASEURL}/user/details`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
  const data = await response.json();
  if (data.error) {
    clearData();
    router.push('/login');
  } else {
    user.value = data;
  }
}

onMounted(async () => {
  const user = await fetachUserDetails();
})
</script>

<style scoped >
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
