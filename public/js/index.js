// block layout
const blockInput = document.getElementById('search')
const blockOutput = document.getElementById('ok')
const blockError = document.getElementById('error')
// input
const idInput = document.getElementById('idstudent')
// label output
const errorLabel = document.getElementById('error_value')
const fullnameLabel = document.getElementById('fullname')
const birthdayLabel = document.getElementById('birthday')
const thcsLabel = document.getElementById('thcs')
const addressLabel = document.getElementById('address')
const uutienLabel = document.getElementById('uutien')
const diemuutienLabel = document.getElementById('diemuutien')
const xeploaiLabel = document.getElementById('xeploai')
const tongdiemLabel = document.getElementById('tongdiem')
const resultLabel = document.getElementById('result')
const rankLabel = document.getElementById('rank')
// table 
const tbm6Table = document.getElementById('tbm6')
const hl6Table = document.getElementById('hl6')
const hk6Table = document.getElementById('hk6')
const d6Table = document.getElementById('d6')
const tbm7Table = document.getElementById('tbm7')
const hl7Table = document.getElementById('hl7')
const hk7Table = document.getElementById('hk7')
const d7Table = document.getElementById('d7')
const tbm8Table = document.getElementById('tbm8')
const hl8Table = document.getElementById('hl8')
const hk8Table = document.getElementById('hk8')
const d8Table = document.getElementById('d8')
const tbm9Table = document.getElementById('tbm9')
const hl9Table = document.getElementById('hl9')
const hk9Table = document.getElementById('hk9')
const d9Table = document.getElementById('d9')
// button
const findBtn = document.getElementById('findBtn')
// get params
const params = new URLSearchParams(window.location.search)
const idQuery = params.get('id')


if (!idQuery) {
    blockInput.style.display = 'block'
    blockOutput.style.display = 'none'
    blockError.style.display = 'none'
} else {
    fetchData(idQuery, render)
}

function renderError(errorInput) {
    blockInput.style.display = 'none'
    blockOutput.style.display = 'none'
    blockError.style.display = 'block'
    errorLabel.innerHTML = errorInput
    findBtn.disabled  = false
}
function render(data) {
    blockInput.style.display = 'none'
    blockOutput.style.display = 'block'
    blockError.style.display = 'none'

    fetchMax((value)=> {
        if (data.rank <= value) {
            resultLabel.innerHTML = "CH??C M???NG B???N ???? TR??NG TUY???N"
            resultLabel.className += ' text-success'
        } else {
            resultLabel.innerHTML = "B???N ???? KH??NG TR??NG TUY???N"
            resultLabel.className += ' text-danger'
        }
    })
    
    rankLabel.innerHTML += data.rank
    fullnameLabel.innerHTML += `${data.firstname} ${data.lastname}`
    birthdayLabel.innerHTML += data.birthday
    thcsLabel.innerHTML += data.thcs
    addressLabel.innerHTML += `${data.xa}, ${data.huyen}`
    if (data.uutien) {
        uutienLabel.innerHTML += data.uutien
        diemuutienLabel.innerHTML += data.diemut
    } else {
        uutienLabel.style.display = 'none'
        diemuutienLabel.style.display = 'none'
    }
    xeploaiLabel.innerHTML += data.xeploai
    tongdiemLabel.innerHTML += data.final

    tbm6Table.innerHTML = data.dtb6
    hl6Table.innerHTML = data.hl6
    hk6Table.innerHTML = data.hk6
    d6Table.innerHTML = data.d6
    tbm7Table.innerHTML = data.dtb7
    hl7Table.innerHTML = data.hl7
    hk7Table.innerHTML = data.hk7
    d7Table.innerHTML = data.d7
    tbm8Table.innerHTML = data.dtb8
    hl8Table.innerHTML = data.hl8
    hk8Table.innerHTML = data.hk8
    d8Table.innerHTML = data.d8
    tbm9Table.innerHTML = data.dtb9
    hl9Table.innerHTML = data.hl9
    hk9Table.innerHTML = data.hk9
    d9Table.innerHTML = data.d9
}

function parseId(input) {
    try {
        return parseInt(input)
    } catch (err) {
        renderError("S??? h??? s?? l?? s??? trong kho???ng 001-999")
    }
}

function fetchData(inputId, next){
    findBtn.disabled  = true
    fetch(`/api/xettuyen?id=${inputId}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        if (data.id) {
            next(data)
        } else renderError("Kh??ng t??m th???y h??? s??")
    })
    .catch((err)=> {
        renderError(`L???i kh??ng x??c ?????nh, h??y copy m?? l???i n??y g???i ?????n nh?? ph??t tri???n: ${err}`)
    })
}

function fetchMax(next){
    fetch('/api/xettuyen/max', {
        method: 'GET'
    })
    .then((data)=> {
        return data.json()
    })
    .then((data)=>{
        next(parseInt(data))
    })
}

function search(){
    fetchData(parseId(idInput.value), render)
}

function redo(){
    blockInput.style.display = 'block'
    blockOutput.style.display = 'none'
    blockError.style.display = 'none'
}

idInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      fetchData(parseId(idInput.value), render)
    }
  });

function seemore() {
    location.reload();
}

function printScore(){
    window.print()

}