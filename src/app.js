import { page } from "./lib.js";
import { updateNav } from "./util.js";
import { showCreateView } from "./views/createView.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showHomeView } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { showLogoutView } from "./views/logoutView.js";
import { showRegisterView } from "./views/registerView.js";

page('/', showHomeView);
page('/register', showRegisterView);
page('/login', showLoginView);
page('/logout', showLogoutView);
page('/dashboard', showDashboardView);
page('/details/:id', showDetailsView);
page('/create', showCreateView);
page('/edit/:id', showEditView);

page.start();
updateNav();

export function showError(isRegister) {
    const err = document.getElementById('errorBox');
    if (isRegister) {
        document.querySelector("#errorBox .msg").textContent = "Passwords don\'t match";
    }
    err.style.display = 'block';
    setTimeout(hideError, 3000);
    function hideError() {
        err.style.display = 'none';
    }
}