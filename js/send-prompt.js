const chatBalloonsSection = document.querySelector("#chat-balloons-section");
const promptInput = document.querySelector("#prompt-input");
const examplePromptsContainer = document.querySelector("#example-prompts");
const examplePrompts = document.querySelectorAll("#example-prompts article");

sendButton.addEventListener('click', () => {
    if (promptInput.value.trim() !== "") {
        examplePromptsContainer.style.display = "none";
        chatBalloonsSection.style.display = "flex";
        userPromptFunction("text");
        aiResponseFunction();
    }
});

examplePrompts.forEach((examplePrompt) => {
    examplePrompt.addEventListener('click', () => {
        examplePromptsContainer.style.display = "none";
        chatBalloonsSection.style.display = "flex";
        userPromptFunction("example", examplePrompt.innerHTML);
        aiResponseFunction();
    });
})

 
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

function aiResponseFunction() {
    const aiResponse = document.createElement("article");
    aiResponse.classList.add("ai-response");
    aiResponse.classList.add("balloons");
    aiResponse.textContent = "AI Response Text";
    chatBalloonsSection.appendChild(aiResponse);
}