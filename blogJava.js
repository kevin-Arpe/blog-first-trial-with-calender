function userIdChanged(obj) {
    document.getElementById('user_id_text').innerText = obj.value;
    }

function userPasswordChanged(obj) {
    document.getElementById('user_password_text').innerText = obj.value;
    } 

function login(id, password) {
    document.getElementById('user_id_text').innerText = id.value;
    document.getElementById('user_password_text').innerText = password.value;
}