//Модальное окно "Заявка"
const requestButton = document.querySelector('.contacts-button');
const modalRequest = document.querySelector('.modal-request');
const modalRequestClose = document.querySelector('.modal-close-button');

if (requestButton) {
    requestButton.onclick = function () {
        modalRequest.style.display = 'block';

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                modalRequest.style.display = 'none';
            }
        })

        window.onclick = function (event) {
            if (event.target === modalRequest) {
                modalRequest.style.display = 'none';
            }
        }

        modalRequestClose.onclick = function () {
            modalRequest.style.display = 'none';
        }
    }
}