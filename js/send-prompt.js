const examplePromptsContainer = document.querySelector("#example-prompts");
const promptInput = document.querySelector("#prompt-input");

sendButton.addEventListener('click', () => {

    if (promptInput.value.trim() !== "") {
        hideExamplePrompts();
    }
});

function hideExamplePrompts() {
    examplePromptsContainer.style.display = "none";
}