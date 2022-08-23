const fetchData = () => {
    fetch("../data/data.json")
        .then((res) => res.json())
        .then((data) => {
            showData(data)
        });
}
const randomColor = () => {
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

const toggleFunc = (food) => {
    console.log(food)
    const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube, strSource, strIngredient1, strMeasure1, strIngredient2, strMeasure2, strIngredient3, strMeasure3, strIngredient4, strMeasure4, strIngredient5, strMeasure5, strIngredient6, strMeasure6, strIngredient7, strMeasure7, strIngredient8, strMeasure8, strIngredient10, strMeasure10, strIngredient11, strMeasure11, strIngredient12, strMeasure12, strIngredient13, strMeasure13, strIngredient14, strMeasure14, strIngredient15, strMeasure15, strIngredient16, strMeasure16, strIngredient17, strMeasure17, strIngredient18, strMeasure18, strIngredient19, strMeasure19, strIngredient20, strMeasure20, strIngredient9, strMeasure9 } = food;

    document.getElementById('modal').classList.toggle('hidden')
    const icon = document.createElement('i')
    icon.classList.add('bx', 'bx-x', 'bx-lg', 'absolute', 'top-[-3px]', 'cursor-pointer', 'z-[3]', 'right-[-2px]')
    icon.addEventListener('click', function (e) {
        document.getElementById('modal-details').innerHTML = ``
        document.getElementById('modal').classList.toggle('hidden')
    })
    document.getElementById('modal-details').appendChild(icon)

    if (strTags) {
        const tagArray = food.strTags.split(',')
        tagArray.forEach(tag => {
            const span = document.createElement('span')
            span.classList.add('inline-block', 'bg-gray-200', 'rounded-full', 'px-3', 'py-1', 'text-sm', 'font-semibold', 'text-gray-700', 'mr-2', 'mb-2')
            if (!!tag) {
                span.innerText = '#' + tag
                document.getElementById('modal-details').appendChild(span)
            }
        })
    }
    const div = document.createElement('div')

    div.innerHTML = `
    <h1 class="text-4xl font-bold text-center mb-3">Food Id : ${idMeal}</h1>
    <img class="w-full rounded-lg" src="${strMealThumb}"/>
    <h1 class="text-center font-bold text-3xl my-2">${strMeal}<h1/>
    <h1 class="text-center font-bold text-xl my-2">Category : ${strCategory}<h1/>
    <h1 class="text-center font-bold text-xl my-2">Popular In : ${strArea}<h1/>
    <h1 class="text-2xl py-2 font-bold">Instructions</h1>
    <p>${strInstructions}</p>
   <div class="flex justify-center gap-3">
   <button class="bg-[#c22828] hover:bg-[#3c0303] hover:text-white font-semibold ease-in duration-300 my-3 p-2 rounded-lg"><a href="${strYoutube}" target="_blank">Watch On Youtube</a></button>
   <button class="bg-[#acdbdf] hover:bg-[#277BC0] hover:text-white font-semibold ease-in duration-300 my-3 p-2 rounded-lg"><a href="${strSource}" target="_blank">Check Source</a></button>
   </div>
    `
    document.getElementById('modal-details').appendChild(div)
    const h1 = document.createElement('h1')
    h1.innerText = 'Ingredients and Measures'
    h1.classList.add('text-2xl', 'text-center', 'font-bold', 'my-3')
    document.getElementById('modal-details').appendChild(h1)
    const ul = document.createElement('ul')
    if (!!strIngredient1) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient1} : ${strMeasure1}`
        ul.appendChild(li)
    }
    if (!!strIngredient2) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient2} : ${strMeasure2}`
        ul.appendChild(li)
    }
    if (!!strIngredient3) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient3} : ${strMeasure3}`
        ul.appendChild(li)
    }
    if (!!strIngredient4) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient4} : ${strMeasure4}`
        ul.appendChild(li)
    }
    if (!!strIngredient5) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient5} : ${strMeasure5}`
        ul.appendChild(li)
    }
    if (!!strIngredient6) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient6} : ${strMeasure6}`
        ul.appendChild(li)
    }
    if (!!strIngredient7) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient7} : ${strMeasure7}`
        ul.appendChild(li)
    }
    if (!!strIngredient8) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient8} : ${strMeasure8}`
        ul.appendChild(li)
    }
    if (!!strIngredient9) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient9} : ${strMeasure9}`
        ul.appendChild(li)
    }
    if (!!strIngredient10) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient10} : ${strMeasure10}`
        ul.appendChild(li)
    }
    if (!!strIngredient11) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient11} : ${strMeasure11}`
        ul.appendChild(li)
    }
    if (!!strIngredient12) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient12} : ${strMeasure12}`
        ul.appendChild(li)
    }
    if (!!strIngredient13) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient13} : ${strMeasure13}`
        ul.appendChild(li)
    }
    if (!!strIngredient14) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient14} : ${strMeasure14}`
        ul.appendChild(li)
    }
    if (!!strIngredient15) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient15} : ${strMeasure15}`
        ul.appendChild(li)
    }
    if (!!strIngredient16) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient16} : ${strMeasure16}`
        ul.appendChild(li)
    }
    if (!!strIngredient17) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient17} : ${strMeasure17}`
        ul.appendChild(li)
    }
    if (!!strIngredient18) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient18} : ${strMeasure18}`
        ul.appendChild(li)
    }
    if (!!strIngredient19) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient19} : ${strMeasure19}`
        ul.appendChild(li)
    }
    if (!!strIngredient20) {
        const li = document.createElement('li')
        li.innerText = `${strIngredient20} : ${strMeasure20}`
        ul.appendChild(li)
    }

    document.getElementById('modal-details').appendChild(ul)
}

document.getElementById('cancel-btn').addEventListener('click', function (e) {
    document.getElementById('modal-details').innerHTML = ``
    document.getElementById('modal').classList.toggle('hidden')
})

const showData = (foods) => {
    const mainSection = document.getElementById('all-food-container')
    console.log(foods)
    foods.forEach((food) => {
        const div = document.createElement('div')
        const mainDiv = document.createElement('div')
        mainDiv.classList.add('rounded', 'overflow-hidden', 'shadow-lg', 'flex', 'flex-col', 'justify-between')

        div.innerHTML = `
        <img class="w-full" src="${food.strMealThumb}" alt="River">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${food.strMeal}</div>
          <p class="text-gray-700 text-base">
           ${food.strInstructions.slice(0, 200)}
          </p>
        </div>
    
    `
        const div2 = document.createElement('div');
        div2.classList.add('px-6', 'pt-4', 'pb-2')
        if (food.strTags) {
            const tagArray = food.strTags.split(',')
            tagArray.forEach(tag => {
                const span = document.createElement('span')
                span.classList.add('inline-block', 'bg-gray-200', 'rounded-full', 'px-3', 'py-1', 'text-sm', 'font-semibold', 'text-gray-700', 'mr-2', 'mb-2')
                if (!!tag) {
                    span.innerText = '#' + tag
                    div2.appendChild(span)
                }
            })
        }
        mainDiv.appendChild(div)
        mainDiv.appendChild(div2)
        const button = document.createElement('button')
        const color1 = randomColor()
        const color2 = randomColor()
        const color3 = randomColor()
        button.style.backgroundImage = `linear-gradient(to right,${color1} 0%,${color2} 51%,${color3} 100%)`
        button.classList.add('show-details')
        button.innerText = 'Show Details'
        button.addEventListener('click', function () {
            toggleFunc(food)
        })
        mainDiv.appendChild(button)
        mainSection.appendChild(mainDiv)
    })
}
fetchData()