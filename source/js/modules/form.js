const form = (state) => {
  const form = document.querySelector("form"),
    inputs = document.querySelectorAll("input"),
    textarea = document.querySelector("textarea"),
    submitBtn = document.querySelector(".contacts_button");

  // checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "url(./assets/img/spinner.svg)",
    success: "Спасибо! Я рассмотрю ваше предложение",
    failure: "Что-то пошло не так",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").style.backgroundImage = message.loading;
    submitBtn.setAttribute("disabled", "");
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
    textarea.value = "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let statusMessage = document.createElement("div");
    statusMessage.classList.add("status");
    form.appendChild(statusMessage);

    const formData = new FormData(form);

    // if (form.getAttribute("data-calc") === "end") {
    // for (let key in state) {
    //   formData.append(key, state[key]);
    // }
    // }

    postData("assets/server.php", formData)
      .then((res) => {
        statusMessage.style.backgroundImage = "none";
        submitBtn.removeAttribute("disabled", "");

        console.log(res);

        statusMessage.textContent = message.success;
      })
      .catch(() => {
        statusMessage.style.backgroundImage = "none";

        statusMessage.textContent = message.failure;
      })
      .finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
        }, 5000);
      });
  });
};

export default form;
