import { createItem } from "../data/data.js";
import { html, page, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { showError } from '../app.js';

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form form-item">
        <h2>Share Your item</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="item" id="item" placeholder="Item" />
            <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
            <input type="text" name="price" id="price" placeholder="Price in Euro" />
            <input type="text" name="availability" id="availability" placeholder="Availability Information" />
            <input type="text" name="type" id="type" placeholder="Item Type" />
            <textarea id="description" name="description" placeholder="More About The Item" rows="10"
                cols="50"></textarea>
            <button type="submit">Add</button>
        </form>
    </div>
</section>`;

export function showCreateView() {
    render(createTemplate(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, form) {
    const { item, imageUrl, price, availability, type, description } = data;

    if (!item || !imageUrl || !price || !availability || !type || !description) {
        return showError();
        return alert('');
    }

    await createItem(data);
    page('/dashboard');
}