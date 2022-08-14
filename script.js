alert(`رحبا بك في موقعي  الذي سيحسب درجاتك`)

let grade = prompt("أكتب درجاتك بالأرقام")

console.log(grade)

if (grade>=90 && grade<=100) {

console.log(
    "%cyou got a privilege",
    `color:blue`
    
    )



    
} else if (grade>=80 && grade<=89) {


    console.log(
        "%cyou got a very good",
    `color:purple`
    
    )
    
} else if (grade>=70 && grade<=79) {


console.log(
    "%cyou got a good",
    `color:green`
    )

    
} else if (grade>=60 && grade<=69) {
 
    console.log(
        "%cyou got accepted",
        `color:gray`
        )
    
} else if (grade>=50 && grade<=59) {

    console.log(
        "%cyou got weak",
        `color:yellow`
        )
    
} else {

console.log(
    "%c you fail",
    `color:red`
    )

}

    
//جافاسكريبت ليست جافا

