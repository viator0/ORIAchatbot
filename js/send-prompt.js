const chatBalloonsSection = document.querySelector("#chat-balloons-section");
const promptInput = document.querySelector("#prompt-input");
const examplePromptsContainer = document.querySelector("#example-prompts");
const examplePrompts = document.querySelectorAll("#example-prompts article");

//TEXT PROMPT FUNCTION

sendButton.addEventListener('click', () => {
    if (promptInput.value.trim() !== "") {
        examplePromptsContainer.style.display = "none";
        chatBalloonsSection.style.display = "flex";
        userPromptFunction("text");
        aiResponseFunction();
    }
});

//EXAMPLE PROMPT FUNCTION

examplePrompts.forEach((examplePrompt) => {
    examplePrompt.addEventListener('click', () => {
        examplePromptsContainer.style.display = "none";
        chatBalloonsSection.style.display = "flex";
        userPromptFunction("example", examplePrompt.innerHTML);
        aiResponseFunction();
    });
})

//USER PROMPT FUNCTION
 
function userPromptFunction(inputType, exampleOrder) {
    const userPrompt = document.createElement("article");
    userPrompt.classList.add("user-prompt");
    userPrompt.classList.add("balloons");
    switch (inputType) {
        case "text":
            userPrompt.textContent = promptInput.value;
            break;
        case "example":
            userPrompt.textContent = exampleOrder;
    }
    promptInput.value = "";
    chatBalloonsSection.appendChild(userPrompt);
}

//AI RESPONSE

function aiResponseFunction() {
    const aiResponse = document.createElement("article");
    aiResponse.classList.add("ai-response");
    aiResponse.classList.add("balloons");
    aiResponse.textContent = "AI Response Text";
    chatBalloonsSection.appendChild(aiResponse);
}

//ENTER BUTTON FUNCTION

document.querySelector("#chat-tools form").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun varsayılan gönderme davranışını engelle
    document.querySelector("#send-button").click(); // Gönder düğmesini tıkla
  });
  
  document.querySelector("#chat-tools form input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Enter tuşunun varsayılan davranışını engelle
      document.querySelector("#send-button").click(); // Gönder düğmesini tıkla
    }
  });


