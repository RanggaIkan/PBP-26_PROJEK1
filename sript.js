// script.js

document.addEventListener('DOMContentLoaded', () => {
    const btnSapa = document.getElementById('btnSapa');
    const card = document.querySelector('.card');

    btnSapa.addEventListener('click', () => {
        alert('Terima kasih sudah mengklik');

        btnSapa.textContent = 'Sudah Diklik!';
        btnSapa.disabled = true;

        const pesan = document.createElement('p');
        pesan.textContent = 'Ini adalah pesan tambahan yang muncul setelah tombol diklik.';
        card.appendChild(pesan);
    });
});