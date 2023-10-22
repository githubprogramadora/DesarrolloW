const apiName = "https://jsonplaceholder.typicode.com/users";
let users = [];
let currentUserIndex = 0;

const displayUserInfo = () => {
  const userInfo = users[currentUserIndex];
  const userIdElement = document.getElementById("user-id");
  const userNameElement = document.getElementById("user-name");
  const userEmailElement = document.getElementById("user-email");
  const userPhoneElement = document.getElementById("user-phone");
  const userWebsiteElement = document.getElementById("user-website");
  userIdElement.textContent = userInfo.id;
  userNameElement.textContent = userInfo.name;
  userEmailElement.textContent = userInfo.email;
  userPhoneElement.textContent = userInfo.phone;
  userWebsiteElement.textContent = userInfo.website;
};

const getNextUser = () => {
  //metodo para que no recargue la pagina
  event.preventDefault();
  currentUserIndex = (currentUserIndex + 1) % users.length;
  displayUserInfo();
};

const fetchUserData = async () => {
  try {
    const response = await fetch(apiName);
    if (!response.ok) {
      throw new Error("Error al cargar los datos");
    }
    users = await response.json();
    displayUserInfo();
  } catch (error) {
    console.error(error);
    displayError("Ocurrió un error al cargar los datos.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchUserData();
  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", getNextUser);
});

const displayError = (message) => {
  const errorElement = document.getElementById("error-message");
  errorElement.textContent = message;
};
