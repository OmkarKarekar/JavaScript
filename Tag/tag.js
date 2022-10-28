function tags() {
    let val = document.querySelector('#input-area').value;
    // console.log(val);
    document.querySelector('#input-area').value = "";


    let divContent = document.createElement('div');
    divContent.classList.add("tag");
    let iContent = document.createElement('i');
    // i.classList.add('fa-solid fa-circle-xmark');
    iContent.setAttribute('class', 'fa-regular fa-circle-xmark')
    divContent.append(val, iContent);


    let main = document.querySelector('.content');
    main.append(divContent);

    iContent.addEventListener('click', function(event) {
        event.target.parentNode.remove();
    })


}


let inputArea = document.querySelector('#input-area').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {

        if (document.querySelector('#input-area').value !== "") {
            tags();
        }


    }
});

document.getElementsByClassName('btn')[0]
    .addEventListener('click', function(event) {
        if (document.querySelector('#input-area').value !== "") {
            tags();
        }
    });