(() => {
    let toDoListArray = [];

    const form = document.querySelector(".form");
    const input = document.querySelector(".form_input");
    const ul = document.querySelector(".toDoList");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let itemId = String(Date.now());
        let toDoItem = input.value;

        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);

        input.value = "";
    });

    ul.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            let id = e.target.getAttribute("data-id");
            e.target.classList.toggle("completed");

            if (!id) return;

            // Remove or add the item based on its completed state
            if (e.target.classList.contains("completed")) {
                removeItemFromArray(id);
            } else {
                let item = toDoListArray.find(item => item.itemId === id);
                if (item) {
                    addItemToArray(item.itemId, item.toDoItem);
                }
            }
        }
    });

    function addItemToDOM(itemId, toDoItem) {
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        li.innerText = toDoItem;
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        toDoListArray.push({ itemId, toDoItem });
        console.log(toDoListArray);
    }

    function removeItemFromArray(id) {
        toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
        console.log(toDoListArray);
    }
})();
