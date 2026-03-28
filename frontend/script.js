document.getElementById("form").addEventListener("submit", async (e)=>{
  e.preventDefault();

  const data = {
    name: name.value,
    phone: phone.value,
    date: date.value,
    message: message.value
  };

  await fetch("https://krishna-catering.onrender.com/book", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify(data)
  });

  alert("Booking Submitted!");
});