document.addEventListener('DOMContentLoaded', () => {
    const $form = document.querySelector('form');
    let $quantityInput = $form.querySelector('#quantity');
    let $quantityError = $form.querySelector('#quantity-error')

    $quantityInput.addEventListener('input', (event) => {
        if($quantityInput.value > 3) {
            $quantityInput.value = 3;
            $quantityError.innerText = '3 max, gourmant va !'
            $quantityInput.classList.add('input-error');
        } else {
            $quantityInput.classList.remove('input-error');
            $quantityError.innerText = '';
        }
    });
});