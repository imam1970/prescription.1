const medicineForm = document.getElementById("medicineForm");
const medicineList = document.getElementById("medicineList");

medicineForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const medicineName = document.getElementById("medicineName").value;
  const medicineTime = document.getElementById("medicineTime").value;
  const specialConsideration = document.getElementById("specialConsideration").value;

  // Create a list item for the medicine
  const listItem = document.createElement("li");
  listItem.textContent = `${medicineName} at ${medicineTime} - ${specialConsideration}`;

  // Append the item to the list
  medicineList.appendChild(listItem);

  // Clear form fields
  medicineForm.reset();

  // Schedule reminder
  scheduleReminder(medicineName, medicineTime, specialConsideration);
});

function scheduleReminder(medicineName, medicineTime, specialConsideration) {
  const reminderTime = new Date();
  const [hour, minute] = medicineTime.split(":");

  reminderTime.setHours(hour);
  reminderTime.setMinutes(minute);
  reminderTime.setSeconds(0);

  const timeUntilReminder = reminderTime - new Date();

  if (timeUntilReminder > 0) {
    setTimeout(() => {
      // Show alert message
      alert(`Time to take ${medicineName} - ${specialConsideration}`);

      // Play alarm sound
      const alarmSound = new Audio('alarm.mp3');
      alarmSound.play();
    }, timeUntilReminder);
  }
}
