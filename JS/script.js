let filePath = '../IMG/fruit.json'
fetch(filePath)
    .then(rs => rs.json())
    .then(data => {
        const arr = [
            data.kiwis,
            data.lemons,
            data.berries,
            data.figs,
            data.nectarines,
            data.melons
        ]
        localStorage.setItem("arrIMG", JSON.stringify(arr))
    })

const getImgFromLocalStorage = JSON.parse(localStorage.getItem("arrIMG"))
let leftCol = document.getElementById("left")
for(item of getImgFromLocalStorage){
    let item_HTML = 
        `<div class="choose row pt-4 pb-4" id="${item.name}" onclick="choose(this)">
            <div class="col-4 d-flex justify-content-center align-items-center">
                <img class="img-select" src="${item.display}" alt="">
            </div>
            <div class=" col-7">
                <div class="d-flex justify-content-between align-items-center">
                    <h4>${item.name}</h4> 
                    <span>May 8</span>
                </div>
                <p class="fs-7">
                    Collection of hight resolution fruit photoshoo...
                </p>
            </div>
        </div>`
    leftCol.innerHTML += item_HTML
}

let currentClicked = null
function choose(e) {
    let rightCol = document.getElementById("right")
    let id = e.id

    if (currentClicked && currentClicked !== e) {
        currentClicked.classList.remove('clicked');
    }
    e.classList.add('clicked');
    currentClicked = e;

    for(item of getImgFromLocalStorage){
        if(id === item.name){
            rightCol.innerHTML = ``
            let item_HTML = 
            ` <div class="nav d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <img style="width: 40px; height: 40px;" src="IMG/arrow.png" alt="">
                        <h4>${item.name}</h4>                        
                    </div>
                    <img style="" class="icon" src="IMG/3dot.png" alt="">
                </div>
                <img id="test" class="img1" src="${item.img1}" alt="">
                <img class="img2" src="${item.img2}" alt="">
                <img class="img2 mt-2" src="${item.img3}" alt="">`
            rightCol.innerHTML += item_HTML
        }

    }
}


