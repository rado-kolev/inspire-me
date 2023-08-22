// Fetch countries and populate the select element
async function populateCountries() {
  const countrySelect = document.getElementById('country');
  try {
    const response = await fetch('https://restcountries.com/v3/all');
    const countries = await response.json();

    // Sort countries alphabetically
    const sortedCountries = countries.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

    // Add an empty option
    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.textContent = 'Select a country';
    countrySelect.appendChild(emptyOption);

    // Populate the select element with sorted countries
    sortedCountries.forEach((country) => {
      const option = document.createElement('option');
      option.value = country.cca2;
      option.textContent = country.name.common;
      countrySelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
}

populateCountries();

// Handle form submission
const form = document.getElementById('myForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData.entries());

  // Validate email
  if (!isValidEmail(formDataObject.email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // formDataObject can be used to send data to server or process it further
  console.log(formDataObject);
});

// Email validation function
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Create opening hours table
const daysOfWeek = [
  { day: 'Monday', open: '08:00', close: '18:00' },
  { day: 'Tuesday', open: '08:00', close: '18:00' },
  { day: 'Wednesday', open: '08:00', close: '18:00' },
  { day: 'Thursday', open: '08:00', close: '18:00' },
  { day: 'Friday', open: '08:00', close: '18:00' },
  { day: 'Saturday', open: '09:00', close: '16:00' },
  { day: 'Sunday', open: '10:00', close: '15:00' },
];

const openingHoursTable = document.getElementById('openingHours');

daysOfWeek.forEach((day) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${day.day}</td>
    <td>${day.open}</td>
    <td>${day.close}</td>
  `;
  openingHoursTable.appendChild(row);
});
