


/*
 zadanie 1
*/

function Tablica(){
    let table = document.getElementById("tabl");
    table.innerHTML = "";
    for (let i = 1; i <= 10; i++){
        let wiersz = document.createElement("tr");
        for (let j = 1; j <= 10; j++){
            let komorka = document.createElement("td");
            komorka.textContent = i * j;
            wiersz.appendChild(komorka);
        }
        table.appendChild(wiersz);
    }
}

/*
    Zadanie 2
*/
let m_imiona = ["Jan", "Mateusz", "Oleh", "Rafał", 'Ivan', "Jarosław", "Damian"]
let m_nazwiska = ["Mickiewicz", "Sikorski", "Kalyna", 'Chalovka', "Ciepliński", "Kopisto", "Rejtan"]
let k_imiona = ["Beata", "Anhelina", "Ewelina", "Barbara",'Iwona', "Joanna", "Irena"]
let k_nazwiska = ["Lubelska", "Kowalska", "Szpir", "Kamilska",'Boiko', "Kaszałowicz", "Fryc"]

function los_czl(){
    let imie, nazwisko;
    let plec = Math.floor(Math.random() * 2);
    if (plec == 0){
        imie = m_imiona[Math.floor(Math.random() * m_imiona.length)];
        nazwisko = m_nazwiska[Math.floor(Math.random() * m_nazwiska.length)];
    } else {
        imie = k_imiona[Math.floor(Math.random() * k_imiona.length)];
        nazwisko = k_nazwiska[Math.floor(Math.random() * k_nazwiska.length)];
    }
    let numer = Math.floor(Math.random() * 30000001) + 5000000;
    let wiek = Math.floor(Math.random() * 62) + 18;
    return { imie: imie, nazwisko: nazwisko, wiek: wiek, telefon: numer };
}

function rekord() {
    let ilosc = parseInt(document.getElementById("ilosc").value);
    let tabelka = document.getElementById("tabelka");
    tabelka.innerHTML = "";
    for (let i = 0; i < ilosc; i++){
        let row = tabelka.insertRow(i);

        let imieCell = row.insertCell(0);
        let nazwiskoCell = row.insertCell(1);
        let wiekCell = row.insertCell(2);
        let telefonCell = row.insertCell(3);

        let data = los_czl();

        imieCell.innerHTML = data.imie;
        nazwiskoCell.innerHTML = data.nazwisko;
        wiekCell.innerHTML = data.wiek;
        telefonCell.innerHTML = data.telefon;
    }
}