  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
 function sendMessage() {
      let box = document.getElementById("chatBox");
      let input = document.getElementById("userInput");

      if (input.value.trim() === "") return;

      box.innerHTML += `<p class='message-user'>You: ${input.value}</p>`;
      box.innerHTML += `<p class='message-ai'>AI: Thinking... (connect backend here)</p>`;

      input.value = "";
      box.scrollTop = box.scrollHeight;
    }
    