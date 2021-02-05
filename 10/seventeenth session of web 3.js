const body = document.getElementById('body')
const title = document.getElementById('title')
const button = document.getElementById('button')
const jpHolder = document.getElementById('jpHolder')
const reload = document.getElementById('reload')
const userId = document.getElementById('userId')
const row1 = document.getElementById('row1')
const action = document.getElementById('action')
let a
let b
let obj1 = []
let obj2 = []


const submit = function (s) {
    s.preventDefault()
    let payload = {
        title: title.value,
        body: body.value,
        userId: Number(userId.value)

    }

    obj2.push(payload)

    let content = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    
    }
    fetch('https://jsonplaceholder.typicode.com/posts', content)
        .then(function (res1) {
            return res1.json()
        })
    jpHolder.reset();
    console.log(payload)
}
button.addEventListener('click', submit)
jpHolder.addEventListener('submit', submit)




fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (res1) {
        return res1.json()
    })
    .then(function (res2) {
        for (b = 0; b < res2.length; b++) {
            obj1.push(res2[b])
        }
        for (a = 0; a < obj1.length; a++) {
            let col = document.createElement('td')
            let row = document.createElement('tr')
            col.classList.add('bg-dark', 'text-light', 'border', 'border-light')
            col.innerText = obj1[a].userId
            row.append(col)
            let col2 = document.createElement('td')
            col2.classList.add('bg-secondary','text-light', 'border', 'border-light')
            col2.innerText = obj1[a].title
            row.append(col2)
            let col3 = document.createElement('td')
            col3.classList.add('bg-secondary','text-light', 'border', 'border-light')
            col3.innerText = obj1[a].body
            row.append(col3)
            //
            let col4 = document.createElement('td')
            col4.classList.add('bg-secondary','text-light', 'border', 'border-light')
            col4.innerText = obj1[a].action
            row.append(col4)
            //
            row1.append(row)

        }
    })


const show = function (z) {
    z.preventDefault()

    for (a = 0; a < obj2.length; a++) {
        let row = document.createElement('tr')
        let col = document.createElement('td')
        col.classList.add('bg-dark','text-light', 'border', 'border-light')
        let col1 = document.createElement('td')
        col1.classList.add('bg-secondary','text-light', 'border', 'border-light')
        let col2 = document.createElement('td')
        col2.classList.add('bg-secondary','text-light', 'border', 'border-light')
        //
        let col3 = document.createElement("td")
        col3.classList.add('bg-secondary','text-light', 'border', 'border-light')
        //

        col.innerText = obj2[a].userId
        col1.innerText = obj2[a].title
        col2.innerText = obj2[a].body
        //
        col3.innerText = obj2[a].action
        //

        row.append(col)
        row.append(col1)
        row.append(col2)
        //
        row.append(col3)
        //
        row1.prepend(row)
    }
}

reload.addEventListener('click', show)
