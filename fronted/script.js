

const form = document.getElementById("volunteerForm");

form.addEventListener("submit", async (e) => {
    

e.preventDefault();

const data = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
age: document.getElementById("age").value,
address: document.getElementById("address").value,
skills: document.getElementById("skills").value,
availability: document.getElementById("availability").value
};


const response = await fetch(
"http://127.0.0.1:3000/api/volunteers",
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(data)
}
);

if(response.ok){
alert("Volunteer Registered Successfully");
form.reset();
}
});