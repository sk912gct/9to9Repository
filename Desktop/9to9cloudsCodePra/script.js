function welcomeCustomer() {
    const name = document.getElementById("customerName").value;

    if (!name.trim()) {
        alert("Please enter customer name");
        return;
    }

    alert("Welcome " + name);
}