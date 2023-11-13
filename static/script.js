function make_active(btn, id) {
    if (btn.classList[2] == "btn-dark") {
        let button = document.querySelector(".btn-secondary");
        button.classList.remove("btn-secondary");
        button.classList.add("btn-dark");
        btn.classList.remove("btn-dark");
        btn.classList.add("btn-secondary");
        let forms = document.querySelectorAll(".forms")
        forms.forEach(i => {
            i.classList.add("d-none")
        });
        let form = document.querySelector(`#form-${id}`)
        form.classList.remove("d-none");
    }
}