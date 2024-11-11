<template>
    <div class="klukkan">
      {{ formattedTime }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const formattedTime = ref('')

const klukkanDagsetning = () => {
  const dagsetning = new Date()
  const klukkan = String(dagsetning.getHours()).padStart(2, '0')
  const minutur = String(dagsetning.getMinutes()).padStart(2, '0')
  const sekundur = String(dagsetning.getSeconds()).padStart(2, '0')
  const dagur = String(dagsetning.getDate()).padStart(2, '0')
  const manudur = String(dagsetning.getMonth() + 1).padStart(2, '0')
  const ar = dagsetning.getFullYear()
  formattedTime.value = `Í dag er ${dagur}-${manudur}-${ar} og klukkan er ${klukkan}:${minutur}:${sekundur}`
}

let intervalId

onMounted(() => {
  klukkanDagsetning()
  intervalId = setInterval(klukkanDagsetning, 1000)
})

</script>

<style>
.klukkan {
  font-size: 1.5em;
  margin-bottom: 10px;
}
</style>