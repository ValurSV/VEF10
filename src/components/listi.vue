<template>
  <div class="valmynd">
    <Selector v-model:selectedCountry="selectedCountry" />
    <button @click="displayHolidayList">Sækja hátíðardaga</button>
  </div>
  <div class="holidays">
    <ul v-if="holidays.length">
      <li v-for="holiday in holidays" :key="holiday.date.iso">
        <div class="holiday-box" @click="openLink(holiday.name)">
          {{ holiday.name }} - {{ formatDate(holiday.date.iso) }}
        </div>
      </li>
    </ul>
    <p v-else>Hefur ekki valið land eða ógilt land.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getHolidays } from './holidays'
import Selector from './selector.vue'

const holidays = ref([])
const selectedCountry = ref('IS')

const formatDate = (isoDate) => {
  const date = new Date(isoDate)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const year = String(date.getFullYear()).slice(-2) // Get last two digits of the year
  return `${day}-${month}-${year}` // Format date to dd-mm-yy
}

const displayHolidayList = async () => {
  try {
    holidays.value = await getHolidays(selectedCountry.value)
  } catch (error) {
    console.error('Villa að sækja hátíðir fyrir land:', error)
  }
}

const openLink = (holidayName) => {
  const url = `https://en.wikipedia.org/wiki/${holidayName.replace(/\s+/g, '_')}` // Færir inn nafn á hátíð og setur _ í stað bil
  window.open(url, '_blank')
}
</script>

<style scoped>
.holidays ul {
  list-style-type: none;
  padding: 0;
}

.holidays li {
  margin: 1rem 0;
}

.holiday-box {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;

  transition: background-color 0.3s;
}

.holiday-box:hover {
  background-color: #221d1d;
  border-color: #646cff;
}
</style>