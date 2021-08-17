let btn = document.querySelector('.btn')

function randNum (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function generate(){
    let min = document.querySelector('.min_value').value
    let max = document.querySelector('.max_value').value
    let result = randNum(min, max)
    document.querySelector('.output').innerHTML = result
}

btn.addEventListener('click', ()=>{
    console.log('working')
    generate()
})


