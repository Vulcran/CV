document.addEventListener('DOMContentLoaded', (event) =>{
    console.log("run")
    document.body.querySelectorAll(".sectionTitle").forEach((el) =>{
        console.log(el.innerHTML)
    })
})