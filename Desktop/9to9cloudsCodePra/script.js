function welcomeCustomer() {
    const name = document.getElementById("customerName").value.trim();
    const message = document.getElementById("message");

    if (!name) {
        message.style.color = "red";
        message.textContent = "Please enter customer name.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Welcome, " + name + "!";

    document.getElementById("customerName").value = "";
}

document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    welcomeCustomer();
});