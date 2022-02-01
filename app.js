document.querySelectorAll('input').forEach((get) => {
    get.onchange = () => {
        let elements = '' ;
        document.querySelectorAll('input:checked').forEach( (val) => {
            elements += `<li>${val.value}</li>`
        })
        document.querySelector('.output').innerHTML = elements 
    }
})