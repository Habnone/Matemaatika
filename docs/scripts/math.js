
function print(message) {
    console.log(message)
} 

function ruutvorrandid(event) {

    event.preventDefault();

    let a = document.forms['ruutvorrand']['ruutorrandA'].value
    let b = document.forms['ruutvorrand']['ruutorrandB'].value
    let c = document.forms['ruutvorrand']['ruutorrandC'].value

    // You can't put this equasion into 1 math thing

    let doMath = Math.sqrt(b*b-4*a*c)

    let answer1 = (-b+doMath)/(2*a)
    let answer2 = (-b-doMath)/(2*a)

    if (!isNaN(answer1)) {
        print("Vastus ei puudu")
        document.getElementById("answer1").innerHTML = "X₁ = " + answer1
        document.getElementById("answer2").innerHTML = "X₂ = " + answer2
    } else {
        print("Vastus puudub")
        document.getElementById("answer1").innerHTML = "Lahend puutub"
        document.getElementById("answer2").innerHTML = ""
    }

}