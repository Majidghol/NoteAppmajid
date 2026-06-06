
const note = document.getElementById("note");
const message = document.getElementById("message");

note.value = localStorage.getItem("note") || "";

function saveNote(){
localStorage.setItem("note", note.value);

message.textContent = "✅ یادداشت ذخیره شد";

setTimeout(() => {
    message.textContent = "";
}, 2000);

}
