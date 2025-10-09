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
    c= 2.5
    fixar = 1317075

    felszin = 2*(a*b+a*c+b*c)
    terfogat = (a*b*c)
    va = terfogat/felszin
    

    osszeg = va*fixar

    let eredmeny = document.getElementById("eredmeny").innerHTML = `${Math.round(osszeg)} Ft`
}

function szamolo3(){
    let a = document.getElementById("ertek").value
    c = 2.5
    fixar = 960000

    felszin = Math.pow(a,2)+4*a*2.5+2*a*(Math.sqrt(Math.pow(a/2,2)+(Math.pow(2.5,2))))
    terfogat = Math.pow(a,2)*c+(Math.pow(a,2)*c)/3
    va = terfogat/felszin

    osszeg = va*fixar

    let eredmeny = document.getElementById("eredmeny").innerHTML = `${Math.round(osszeg)} Ft`
}

function szamolo4(){
    let a = document.getElementById("ertek").value
    let b = document.getElementById("ertek2").value
    c = 2.5
    fixar = 3360000

    felszin = 2*b*c + 2*a*c + b*c + 2*(Math.sqrt(Math.pow(b/2,2)+Math.pow(c,2)))*a
    terfogat = a*b*c + ((b*c)/2)*a
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

function nagyhaz(){
    let nagyhaz = document.getElementById("szamolo").innerHTML = 
    `
    <form action="" id="urlap">
            <img src="" alt="">

            <h3>Nagyház</h3>

            <label for="ertek">A oldal</label>
            <input type="range" name="ertek" id="ertek" min="4" max="10" value="4" oninput="range1()"><span id="kiir">4 m</span><br><br>

            <label for="">B oldal</label>
            <input type="range" name="ertek2" id="ertek2" min="3" max="10" value="3" oninput="range2()"><span id="kiir2">3 m</span><br><br>

            <button type="button" onclick="szamolo4()">Számolás</button><br><br>
            <span id="eredmeny"></span>
    </form>
    `
}

function kishaz() {
    let kishaz = document.getElementById("szamolo").innerHTML = 
    `
        <form action="" id="urlap">
            <img src="" alt="">

            <h3>Kisház</h3>

            <label for="ertek">A oldal</label>
            <input type="range" name="ertek" id="ertek" min="2" max="6" value="2" oninput="range1()"><span id="kiir">2 m</span><br><br>


            <button type="button" onclick="szamolo3()">Számolás</button><br><br>
            <span id="eredmeny"></span>
        </form>
    `
}