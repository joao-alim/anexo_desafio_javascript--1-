//Array pra guardar carros
let carArr = [];


//"Struct"(na verdade é uma Classe literal) que, nesse caso, guarda os
//parametros/ atributos de um carro
class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
}

//a grosso modo, verifica se o carro ja existe
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

// função pra chamar checkbox e tals
function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw "You need set a Car Class";
    }
//
    if (el.checked) {
        if (carArr.length >= 2) {
            alert("Você só pode comparar 2 veículos por vez.");
            el.checked = false;
            return;
        }

        if (GetCarArrPosition(carArr, carClass) === -1) {
            carArr.push(carClass);
        }
    } else {
        // se desmarcar ele vai remover do array
        let pos = GetCarArrPosition(carArr, carClass);
        if (pos > -1) {
            carArr.splice(pos, 1);
        }
    }

    // atualiza a tabela
    if (carArr.length === 2) {
        UpdateCompareTable();
    }
}

// mostra a tela de comparação
function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    const cmp = document.getElementById("compare");
    if (cmp) cmp.style.display = "block";
}

// ssconde a tela de comparação
function HideCompare() {
    const cmp = document.getElementById("compare");
    if (cmp) cmp.style.display = "none";
}

// Formata preço (R$) e números simples
function formatCurrency(value) {
    try {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    } catch (e) {
        return value;
    }
}

function formatNumber(value, suffix = '') {
    return (value === null || value === undefined) ? '' : (value + (suffix ? ' ' + suffix : ''));
}

// Atualiza os campos da tabela de comparação usando os ids presentes no HTML
function UpdateCompareTable() {
    if (carArr.length < 2) return;

    const car1 = carArr[0];
    const car2 = carArr[1];

    // imgs
    const img0 = document.getElementById('compare_image_0');
    const img1 = document.getElementById('compare_image_1');
    if (img0) img0.innerHTML = car1.image ? `<img src="${car1.image}" alt="${car1.nome}" style="max-width:200px;">` : '';
    if (img1) img1.innerHTML = car2.image ? `<img src="${car2.image}" alt="${car2.nome}" style="max-width:200px;">` : '';

    // nome
    const model0 = document.getElementById('compare_modelo_0');
    const model1 = document.getElementById('compare_modelo_1');
    if (model0) model0.textContent = car1.nome;
    if (model1) model1.textContent = car2.nome;

    // altura da caçamba 
    const altCac0 = document.getElementById('compare_alturacacamba_0');
    const altCac1 = document.getElementById('compare_alturacacamba_1');
    if (altCac0) altCac0.textContent = formatNumber(car1.alturaCacamba, 'mm');
    if (altCac1) altCac1.textContent = formatNumber(car2.alturaCacamba, 'mm');

    // altura do veiculo 
    const altV0 = document.getElementById('compare_alturaveiculo_0');
    const altV1 = document.getElementById('compare_alturaveiculo_1');
    if (altV0) altV0.textContent = formatNumber(car1.alturaVeiculo, 'mm');
    if (altV1) altV1.textContent = formatNumber(car2.alturaVeiculo, 'mm');

    // altura do solo
    const altS0 = document.getElementById('compare_alturasolo_0');
    const altS1 = document.getElementById('compare_alturasolo_1');
    if (altS0) altS0.textContent = formatNumber(car1.alturaSolo, 'mm');
    if (altS1) altS1.textContent = formatNumber(car2.alturaSolo, 'mm');

    // capacidade de carga
    const cap0 = document.getElementById('compare_capacidadecarga_0');
    const cap1 = document.getElementById('compare_capacidadecarga_1');
    if (cap0) cap0.textContent = formatNumber(car1.capacidadeCarga, 'Kg');
    if (cap1) cap1.textContent = formatNumber(car2.capacidadeCarga, 'Kg');

    // motor
    const mot0 = document.getElementById('compare_motor_0');
    const mot1 = document.getElementById('compare_motor_1');
    if (mot0) mot0.textContent = car1.motor;
    if (mot1) mot1.textContent = car2.motor;

    // potencia
    const pot0 = document.getElementById('compare_potencia_0');
    const pot1 = document.getElementById('compare_potencia_1');
    if (pot0) pot0.textContent = formatNumber(car1.potencia, 'cv');
    if (pot1) pot1.textContent = formatNumber(car2.potencia, 'cv');

    // volume da caçamba
    const vol0 = document.getElementById('compare_volumecacamba_0');
    const vol1 = document.getElementById('compare_volumecacamba_1');
    if (vol0) vol0.textContent = formatNumber(car1.volumeCacamba, 'L');
    if (vol1) vol1.textContent = formatNumber(car2.volumeCacamba, 'L');

    // roda
    const roda0 = document.getElementById('compare_roda_0');
    const roda1 = document.getElementById('compare_roda_1');
    if (roda0) roda0.textContent = car1.roda;
    if (roda1) roda1.textContent = car2.roda;

    // preco
    const preco0 = document.getElementById('compare_preco_0');
    const preco1 = document.getElementById('compare_preco_1');
    if (preco0) preco0.textContent = formatCurrency(car1.preco);
    if (preco1) preco1.textContent = formatCurrency(car2.preco);
}

//chamando tudo
window.SetCarToCompare = SetCarToCompare;
window.ShowCompare = ShowCompare;
window.HideCompare = HideCompare;
window.UpdateCompareTable = UpdateCompareTable;