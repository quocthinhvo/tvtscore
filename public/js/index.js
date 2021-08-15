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
        } else renderError("Không tìm thấy hồ sơ")
    })
    .catch((err)=> {
        renderError(`Lỗi không xác định, hãy copy mã lỗi này gửi đến nhà phát triển: ${err}`)
    })
}

function search(){
    fetchData(idInput.value, render)
}

function redo(){
    blockInput.style.display = 'block'
    blockOutput.style.display = 'none'
    blockError.style.display = 'none'
}

idInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      fetchData(idInput.value, render)
    }
  });

function seemore() {
    location.reload();
}