// chat.js

// References to DOM elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');

// Function to add a new message to the chat
function addMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;

        // Add the message to the chat messages container
        chatMessages.appendChild(messageElement);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat messages container
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Event listener for the Send button
sendButton.addEventListener('click', addMessage);

// Event listener for pressing Enter in the input field
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addMessage();
    }
});
