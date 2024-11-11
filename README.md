# Vef-10 með Vite + Vue

# Grunnur
Í þessu verkefni varð nota Vite + VUE og prófað sig áfram með component building.
Flest HTML, CSS og JavaScript eiga heima inní .VUE components og sett þá saman í app.vue.

# API

**Fánar**
Notar https://flagsapi.com/ API til að sækja myndir af fánum, valið var þetta þar sem bæði API nota ISO kóða svo það var hægt að nota sama selector til að fá tvær niðurstöður.
Þegar sótt er mynd er notað https://flagsapi.com/${country.value}/flat/64.png þar sem country.value er ISO gildi landsins og síðan er birt mynd að fána.
T.d. væri https://flagsapi.com/IS/flat/64.png Ísland.


**Háíðar**
Notað var https://calendarific.com/ til að sækja hátíðar daga. Núverandi forrit notar núverandi ár og type=national fyrir query. Fleiri valmöguleikar eru í boði t.d. religous og local en ákvað var að hafa national þar sem listinn verður of svo gífurlega langur þegar er byrjað að nota local.

Hægt er að breyta þessu með stuttri breytingu á kóðanum https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=${country}&year=${year}&type=**national**
Breyta þar aðeins national í annað type.

# Components

**klukkan.vue**
Sýnir núverandi tíma og dagsetningu, uppfærir á hverri sekúndu.

**selector.vue**
Leyfir notanda að velja land með ISO kóða og sýnir fána landsins ef kóðinn er gildur.

**listi.vue**
Vinnur úr gögnum úr **holidays.js**.
Sækir og sýnir hátíðardaga fyrir valið land.

**App.vue**
Aðal componentið sem sameinar alla aðra components (klukkan, upplysingar, listi).

