
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => {
      // Append the new id to the DOM
      const p = document.createElement("p");
      p.textContent = `New user ID: ${data.id}`;
      document.body.appendChild(p);
    })
    .catch(error => {
      // Append error message to the DOM
      const errorMessage = document.createElement("p");
      errorMessage.textContent = error.message;
      document.body.appendChild(errorMessage);
    });
}
