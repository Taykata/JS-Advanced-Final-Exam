import { deleteItem, getItemById } from "../data/data.js";
import { html, page, render } from "../lib.js";
import { isOwner } from "../util.js";

const detailsTemplate = (data, hasOwner) => html`
<section id="details">
    <div id="details-wrapper">
        <div>
            <img id="details-img" src="../..${data.imageUrl}" alt="example1" />
            <p id="details-title">${data.item}</p>
        </div>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="details-price">Price: €${data.price}</p>
                <p class="details-availability">
                    ${data.availability}
                </p>
                <p class="type">Type: ${data.type}</p>
                <p id="item-description">
                    ${data.description}
                </p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${hasOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} data-id=${data._id} href="" id="delete-btn">Delete</a>
            </div>` : ''}
        </div>
    </div>
</section>`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const data = await getItemById(id);
    const hasOwner = isOwner(data._ownerId);
    render(detailsTemplate(data, hasOwner));
}

async function onDelete(event) {
    event.preventDefault();
    const id = event.target.dataset.id;
    const isDelete = confirm('Delete item?');
    if (!isDelete) {
        return;
    }
    await deleteItem(id);
    page('/dashboard');
}