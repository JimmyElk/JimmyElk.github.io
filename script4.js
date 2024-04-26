document.addEventListener('DOMContentLoaded', () => {

    const backgroundSelect = document.getElementById('background-select');

    const nameInput = document.getElementById('name-input');

    const nameDisplay = document.getElementById('name-display');




    backgroundSelect.addEventListener('change', () => {

        const selectedBackground = backgroundSelect.value;

        document.body.style.backgroundImage = `url(${selectedBackground}.jpg)`;

    });



    nameInput.addEventListener('input', () => {

        const name = nameInput.value.trim();

        if (name.length > 0) {

            localStorage.setItem('name', name);

            nameDisplay.textContent = name;

        }

    });




    const storedName = localStorage.getItem('name');

    if (storedName) {

        nameDisplay.textContent = storedName;

    }

});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}