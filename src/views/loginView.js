import { login } from "../data/users.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { showError } from '../app.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>`;

export function showLoginView() {
    render(loginTemplate(createSubmitHandler(onSubmit)));
}

function onSubmit(data, form) {
    const email = data.email.trim();
    const password = data.password.trim();

    if (!email || !password) {
        return showError();
        return alert('');
    }

    login(email, password);
}