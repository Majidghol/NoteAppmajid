const note = document.getElementById("note");

note.value = localStorage.getItem("note") || "";

function saveNote(){
localStorage.setItem("note", note.value);
alert("ذخیره شد");
}
