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

    let A = 2*(a*b+a*2,5+b*2,5)
    let V = (a*b*2,5)
    let VA = V/A

    let osszeg = fixar*VA
    let eredmeny = document.getElementById("eredmeny").innerHTML = `${osszeg}`
}