let c = 2.5

function range1(){
let ertek = document.getElementById("ertek")
document.getElementById("kiir").innerHTML = `${ertek.value} m`
}

function range2(){
let ertek = document.getElementById("ertek2")
document.getElementById("kiir2").innerHTML = `${ertek.value} m`
}

function szamolo(){
    let a = document.getElementById("ertek").value
    let b = document.getElementById("ertek2").value 
    fixar = 1317075

    felszin = 2*(a*b+a*c+b*c)
    terfogat = (a*b*c)
    va = terfogat/felszin
    

    osszeg = va*fixar

    let eredmeny = document.getElementById("eredmeny").innerHTML = `Fizetendő összeg: ${Math.round(osszeg)} Ft`
}

function szamolo2(){
    let a = document.getElementById("ertek").value
    c= 2.5
    fixar = 4222628

    felszin = 3*a+12*Math.sqrt(Math.pow(a/2,2)+Math.pow(c,2))
    terfogat = a*c

    va = terfogat/felszin

    osszeg = va*fixar

    let eredmeny = document.getElementById("eredmeny").innerHTML = `Fizetendő összeg: ${Math.round(osszeg)} Ft`


}

function szamolo3(){
    let a = document.getElementById("ertek").value
    fixar = 960000

    felszin = Math.pow(a,2)+4*a*c+2*a*(Math.sqrt(Math.pow(a/2,2)+(Math.pow(c,2))))
    terfogat = Math.pow(a,2)*c+(Math.pow(a,2)*c)/3
    va = terfogat/felszin

    osszeg = va*fixar

    let eredmeny = document.getElementById("eredmeny").innerHTML = `Fizetendő összeg: ${Math.round(osszeg)} Ft`
}

function szamolo4(){
    let a = document.getElementById("ertek").value
    let b = document.getElementById("ertek2").value
    fixar = 3360000

    felszin = 2*b*c + 2*a*c + b*c + 2*(Math.sqrt(Math.pow(b/2,2)+Math.pow(c,2)))*a
    terfogat = a*b*c + ((b*c)/2)*a
    va = terfogat/felszin

    osszeg = va*fixar

    let eredmeny = document.getElementById("eredmeny").innerHTML = `Fizetendő összeg: ${Math.round(osszeg)} Ft`
}

function teglatest(){
    let teglaszmolo = document.getElementById("szamolo").innerHTML = 
        `
        <form action="" id="urlap">
            <img src="img/teglatest.png" class="testtegla" alt="teglatest" title="teglatest">

            <h3>Téglatest</h3>

            <label for="ertek">A oldal</label>
            <input type="range" name="ertek" id="ertek" min="3" max="10" value="3" oninput="range1()"><span id="kiir">3 m</span><br><br>

            <label for="">B oldal</label>
            <input type="range" name="ertek2" id="ertek2" min="2" max="10" value="2" oninput="range2()"><span id="kiir2">2 m</span><br><br>

            <button type="button" onclick="szamolo()">Számolás</button>
            <span id="eredmeny"></span>
        </form>
        `
}

function gula(){
    let gulaszamolo = document.getElementById("szamolo").innerHTML =
    `
     <form action="" id="urlap">
            <img src="img/gula.png" class="gula" alt="gula" title="gula">

            <h3>Gúlaház</h3>

            <label for="ertek">A oldal</label>
            <input type="range" name="ertek" id="ertek" min="3" max="10" value="3" oninput="range1()"><span id="kiir">3 m</span><br><br>


            <button type="button" onclick="szamolo3()">Számolás</button>
            <span id="eredmeny"></span>
        </form>

    `
}

function kishaz() {
    let kishaz = document.getElementById("szamolo").innerHTML = 
    `
        <form action="" id="urlap">
            <img src="img/kishaz.jpg" class="kishaz" alt="kishaz" title="kishaz">

            <h3>Négyzet alakú kétszintes ház</h3>

            <label for="ertek">A oldal</label>
            <input type="range" name="ertek" id="ertek" min="2" max="6" value="2" oninput="range1()"><span id="kiir">2 m</span><br><br>


            <button type="button" onclick="szamolo3()">Számolás</button>
            <span id="eredmeny"></span>
        </form>
    `
}

function nagyhaz(){
    let nagyhaz = document.getElementById("szamolo").innerHTML = 
    `
    <form action="" id="urlap">
            <img src="img/nagyhaz.jpg" class="nagyhaz" alt="nagyhaz" title="nagyhaz">

            <h3>Téglatest alakú kétszintes ház</h3>

            <label for="ertek">A oldal</label>
            <input type="range" name="ertek" id="ertek" min="4" max="10" value="4" oninput="range1()"><span id="kiir">4 m</span><br><br>

            <label for="">B oldal</label>
            <input type="range" name="ertek2" id="ertek2" min="3" max="10" value="3" oninput="range2()"><span id="kiir2">3 m</span><br><br>

            <button type="button" onclick="szamolo4()">Számolás</button>
            <span id="eredmeny"></span>
    </form>
    `
}