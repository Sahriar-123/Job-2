function showTime(){
    document.getElementById("time").innerHTML = new Date().toLocaleString();
}

setInterval(showTime, 1000);

function submitForm(){
    alert("Message Sent Successfully");
}

function filterProject(category){
    document.querySelectorAll(".project").forEach(p => {
        p.style.display = (category === "all" || p.classList.contains(category)) ? "block" : "none";
    });
}