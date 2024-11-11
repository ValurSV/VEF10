<template>
  <div class="valmynd">
    <img :src="flagSrc" alt="Fáni">
    <input type="text" v-model="country" placeholder="ISO Landa" @input="updateCountry" />


  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'


const emits = defineEmits(['update:selectedCountry'])

const country = ref('IS')


// Ef landið er gilt setur það in fánan ef ekki N/A.
const flagSrc = computed(() => {
  return isValidCountry.value ? `https://flagsapi.com/${country.value}/flat/64.png` : 'https://cdn3.iconfinder.com/data/icons/meteocons/512/n-a-512.png'
})

// Athugar hvort land sé gilt með því að athuga hlekkinn.
const isValidCountry = computed(() => {
  return country.value && /^[A-Z]{2}$/.test(country.value)
})

watch(country, (newVal) => {
  country.value = newVal.toUpperCase()
})

const updateCountry = () => {
  emits('update:selectedCountry', country.value)
}
</script>

<style scoped>
.valmynd {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.valmynd img {
  width: 10rem;
}

.valmynd input {
  padding: 5px;
  font-size: 16px;
  text-align: center;
}
</style>