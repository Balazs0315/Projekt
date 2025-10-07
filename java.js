function range1(){
let ertek = document.getElementById("ertek").value
let kiir = document.getElementById("kiir").innerHTML = `${ertek} m`
}

function range2(){
let ertek2 = document.getElementById("ertek2").value
let kiir2 = document.getElementById("kiir2").innerHTML = `${ertek2} m`
}

function szamolo(){
    let a = document.getElementById("ertek").value
    let b = document.getElementById("ertek2").value
    fixar = 1317075

    felszin = 2*(a*b+a*2.5+b*2.5)
    terfogat = (a*b*2.5)
    va = terfogat/felszin

    osszeg = va*fixar

    let eredmeny = document.getElementById("eredmeny").innerHTML = `${Math.round(osszeg)} Ft`
}

function teglatest(){
    let teglaszmolo = document.getElementById("szamolo").innerHTML = 
        `
        <form action="" id="urlap">
            <img src="" alt="">

            <h3>Téglatest</h3>

            <label for="ertek">A oldal</label>
            <input type="range" name="ertek" id="ertek" min="3" max="10" value="3" oninput="range1()"><span id="kiir">3 m</span><br><br>

            <label for="">B oldal</label>
            <input type="range" name="ertek2" id="ertek2" min="2" max="10" value="2" oninput="range2()"><span id="kiir2">2 m</span><br><br>

            <button type="button" onclick="szamolo()">Számolás</button><br><br>
            <span id="eredmeny"></span>
        </form>
        `
}