// Get HTML elements
const itemName = document.getElementById("add-new-item");
const itemForm = document.querySelector("form");
const itemList = document.querySelector("ul");
const itemDeletedMessage = document.querySelector("div.deleted-message");

itemForm.onsubmit = (event) => {
    event.preventDefault();

    // Verify item name empty
    !itemName.value
        ? alert("Por favor digite um item")
        : addItem(itemName.value);
};

// Add new item to the list
function addItem(newItemName) {
    try {
        // Create new li
        const newListItem = document.createElement("li");
        newListItem.classList.add("item");

        // HTML base for new items
        newItem = `<div class="item-description">
                    <label for="check-item">Item concluido</label>
                    <input
                        type="checkbox"
                        name="check-item"
                        id="check-item"
                    />

                    <span class="item-name">${newItemName}</span>
                </div>

                <button class="delete-item-button" type="button" onClick="removeItem(this)">
                    <img
                        class="item-delete-img light"
                        src="./src/assets/trashcan.svg"
                        alt="Ícone de lixeira"
                    />
                    <img
                        class="item-delete-img dark"
                        src="./src/assets/trashcan-white.svg"
                        alt="Ícone de lixeira"
                    />
                </button>`;

        newListItem.innerHTML = newItem;

        // Append li to item List (ul)
        itemList.append(newListItem);

        itemName.value = "";
    } catch (error) {
        console.log(error);

        alert("Ocorreu um problema, tente novamente mais tarde!");
    }
}

function removeItem(item) {
    // Remove button parent
    item.parentElement.remove();

    showDeletedItemMessage();
}

function showDeletedItemMessage() {
    itemDeletedMessage.classList.add("show-message");

    setTimeout(dismissDeletedItemMessage, 5000);
}

function dismissDeletedItemMessage() {
    itemDeletedMessage.classList.remove("show-message");
}
