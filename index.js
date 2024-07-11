// Add your code here
function submitData(name, email) {
  return fetch(`http://localhost:3000/users`, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // The information on the id is retrieved
      const theID = data.id;
      //joining the span to js
      const span = document.querySelector(`span`);
      //the span displays the name of the id
      span.textContent = `My ID : ${theID}`;
    })
    .catch((error) => {
      // the information is retrieved
      const errorMessage = error.message;
      // error is written to the const
      console.log(`Error:`, errorMessage);

      // the p is joined to js
      const p = document.querySelector(`p`);
      // the p is to displaying error message
      p.textContent = `Error:, ${errorMessage}`;
    });
}

submitData();
