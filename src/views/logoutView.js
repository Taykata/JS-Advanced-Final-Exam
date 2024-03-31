import { logout } from "../data/users.js";
import { page } from "../lib.js";

export async function showLogoutView() {
    await logout();
    page('/');
}