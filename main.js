popupOpen = document.getElementById("hidden-message");
inputName = document.getElementById("message-name");
inputText = document.getElementById("message-text");
sendBtn = document.getElementById("message-send-btn");
popup = document.getElementById("popup");
main = document.getElementById("main");
aside = document.getElementById("aside");
notif = document.getElementById("notif");
token = "7073644705:AAEktFyFkuJOpY1y0D0rgQ3c6Ccgil38Kps";
chatID = "1182272531";

popupOpen.addEventListener("click", () => {
  aside.style.display = "none";
  main.style.display = "none";
  popup.style.display = "block";
});

notif.addEventListener("click", () => {
  notif.style.display = "none";
});

sendBtn.addEventListener("click", () => {
  console.log(inputName.value);
  console.log(inputText.value);
  message = `ɴᴇᴡ ᴍᴇꜱꜱᴀɢᴇ ꜰʀᴏᴍ ${inputName.value} %0A ᴛᴇxᴛ: ${inputText.value}`;
  url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}`;
  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  aside.style.display = "flex";
  main.style.display = "";
  notif.style.display = "block";
  popup.style.display = "none";
});
