const signupForm = document.querySelector(".main_form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const table = document.getElementById("table");
var count = 1;
function handle(e) {
  e.preventDefault();
  const email = emailInput.value;
  const pw = passwordInput.value;
  const newEntry = `
        <tr>
            <td>${count}</td>
            <td>${email}</td>
            <td>${pw}</td>
        </tr>
    `;
  table.innerHTML += newEntry;

  count++;
  signupForm.reset();
}
signupForm.addEventListener("submit", handle);
