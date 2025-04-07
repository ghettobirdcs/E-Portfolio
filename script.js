let modalOpen = false;
let contrastOn = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
}

function toggleContrast() {
    if (contrastOn)
        document.body.classList.remove("dark-theme");
    else
        document.body.classList += " dark-theme";

    contrastOn = !contrastOn;
}

function contact(event) {
    event.preventDefault(); // prevents refreshing the page on submit
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    const fail = document.querySelector('.modal__overlay--fail');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_1iumj1e',
            'template_pm61cqg',
            event.target,
            'o79iAsM7YQfmRdgwc'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        fail.classList += " modal__overlay--visible"
    });
}

function toggleModal() {
    if (modalOpen)
        document.body.classList.remove("modal--open");
    else
        document.body.classList += " modal--open";

    modalOpen = !modalOpen;
}