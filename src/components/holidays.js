export function getHolidays(country) {
  const apiKey = import.meta.env.VITE_API_KEY; //API key geymdur í .env skrá. sem er .gitgnored
  const year = new Date().getFullYear();
  const url = `https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=${country}&year=${year}&type=national`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Nær ekki að sækja gögn " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.response.holidays);
      return data.response.holidays;
    })
    .catch((error) => {
      console.error("Villa:", error);
    });
}
