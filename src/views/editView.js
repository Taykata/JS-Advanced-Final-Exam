import { editItem, getItemById } from "../data/data.js";
import { html, page, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { showError } from '../app.js';

const editTemplate = (data, onSubmit) => html`
<section id="edit">
    <div class="form form-item">
        <h2>Edit Your Item</h2>
        <form @submit=${onSubmit} class="edit-form" data-id=${data._id} >
            <input type="text" name="item" id="item" placeholder="Item" value=${data.item} />
            <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" value=${data.imageUrl} />
            <input type="text" name="price" id="price" placeholder="Price in Euro" value=${data.price} />
            <input type="text" name="availability" id="availability" placeholder="Availability Information" value=${data.availability} />
            <input type="text" name="type" id="type" placeholder="Item Type" value=${data.type} />
            <textarea id="description" name="description" placeholder="More About The Item" rows="10"
                cols="50">${data.description}</textarea>
            <button type="submit">Edit</button>
        </form>
    </div>
</section>`;

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const data = await getItemById(id);
    render(editTemplate(data, createSubmitHandler(onSubmit)));
}

async function onSubmit(data, form) {
    const id = form.dataset.id;
    const { item, imageUrl, price, availability, type, description } = data;

    if (!item || !imageUrl || !price || !availability || !type || !description) {
        return showError();
        return alert('');
    }

    await editItem(id, data);
    page(`/details/${id}`);
}