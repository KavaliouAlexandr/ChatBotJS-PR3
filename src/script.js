const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");


let userMessage;

const handleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
}
sendChatBtn.addEventListener("click", handleChat);

