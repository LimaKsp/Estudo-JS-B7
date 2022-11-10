var time = 18 ;
var name = "Gabriel";


/* Exemplo 1 */

// if (time < 12 ) {
//     console.log("Bom Dia!");
//     alert("Bom Dia!");

// } else if(time < 18) {
//     console.log("boa tarde");
//     alert("boa tarde!");

// } else  if( time <= 23 ) {
//         console.log("boa noite");
//         alert("boa noite!");
//     }



/* Exemplo 2 */

    if (time >= 6 && time <= 12) {
        console.log("buenos dias")
    }
        else if( time >= 12 && time <= 18) {
        console.log("buenas tarde")
        }
            else if (time >= 18 && time <= 23){
                console.log("buenas notches")
            }


/* DOM */

document.getElementById("exemplo")
.innerHTML = "Msg alterada";