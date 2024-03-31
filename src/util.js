export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function clearUserData() {
    localStorage.removeItem('user');
}

export function isOwner(itemOwnerId) {
    return getUserData()?._id === itemOwnerId;
}

// TODO Add custom validation
export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        callback(Object.fromEntries(data), event.target);
    };
}

export function updateNav() {
    const userNav = document.querySelector('div .user');
    const guestNav = document.querySelector('div .guest');
    const userData = getUserData();
    if (userData) {
        userNav.style.display = 'block';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'block';
    }
}