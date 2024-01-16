
function openModal(title, content) {
    document.getElementById('modalTitle').innerHTML = title;
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
}
