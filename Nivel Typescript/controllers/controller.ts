let rocket:Rocket;
let rockets:Rocket[] = new Array();
let idRocket: number = 0;
let totalPower1 = 0;
let totalPower2 = 0; 

//FUNCTION TO CREATE ROCKETS
function createRocket(){
    //Rocket Code
    let codeRocket: string = prompt("Set the rocket code:");
    if(!codeRocket){
        alert("you must write write the code")
    }else{
        rocket = new Rocket(idRocket++, codeRocket);
        rockets.push(rocket);

        //Nº of Propellers of the rocket
        let nPropellersRocket: number = parseFloat(prompt("Set the rocket propellers:"));
        if(isNaN(nPropellersRocket)){
            alert("You must write the number of propellers")
        }else{
            for (let i = 0; i < nPropellersRocket; i++){
                let powerPropeller: number = parseInt(prompt("Set the power of this propeller " + (i+1))); 
                if (powerPropeller <= 120){
                    rockets[idRocket-1].addPower(powerPropeller)  
                }else{
                    i--
                    alert("The maximum power can be 120")
                }
            }
        }
        console.log(rockets)
    }
    
    //Rocket creation Result
    if(rockets.length >= 2){
        alert("The rockets have been created correctly. You can start the game or create another rocket");
        (<HTMLInputElement>document.getElementById("column1")).classList.remove("hideRocket");
        (<HTMLInputElement>document.getElementById("column1")).classList.add("showRocket");
        (<HTMLInputElement>document.getElementById("column2")).classList.remove("hideRocket");
        (<HTMLInputElement>document.getElementById("column2")).classList.add("showRocket");
    }else{
        alert("You need to create another rocket in order to start the game")
    }

}

//FUNCTION TO PRINT INFORMATION ABOUT THE ROCKETS
function printInfoRocket(idRocket){
    let rocketPower; 
    let selectRocket;
    let showPower = []; 
    switch(idRocket){
        case 1:
            for(let j = 0; j < rockets[idRocket-1].powers.length; j++){
                selectRocket = rockets[idRocket-1];
                rocketPower = selectRocket.powers[j];
                showPower.push(rocketPower);
            }
            let resultInfoRocket1 = <HTMLElement>document.getElementById('infoRocket1');
            resultInfoRocket1.innerHTML = "<strong>Code</strong>: " + (rockets[idRocket-1].code).toUpperCase() +
            "&nbsp;&nbsp;&nbsp;&nbsp;  <strong>Propellers</strong>: " + showPower;

        break;

        case 2: 
            for(let j = 0; j < rockets[idRocket-1].powers.length; j++){
                selectRocket = rockets[idRocket-1];
                rocketPower = selectRocket.powers[j];
                showPower.push(rocketPower);
            }
            let resultInfoRocket2 = <HTMLElement>document.getElementById('infoRocket2');
            resultInfoRocket2.innerHTML = "<strong>Code</strong>: " + (rockets[idRocket-1].code).toUpperCase() +
            "&nbsp;&nbsp;&nbsp;&nbsp; <strong>Propellers</strong>: " + showPower;

    }


}


//FUNCTION TO CALCULATE THE AVERAGE POWER
function averagePower(numberRocket: number){
    let rocketPower; 
    let total = 0; 
    let resultPower: number = 0; 
    let selectRocket; 

    for(let j = 0; j < rockets[numberRocket-1].powers.length; j++){
        selectRocket = rockets[numberRocket-1];
        rocketPower = selectRocket.powers[j];
        console.log(rocketPower);
        total = total + rocketPower;
    }

    resultPower = total/rockets[numberRocket-1].powers.length;
    return resultPower
}



//FUNCTION TO SPEED UP AND BRAKE THE ROCKETS
function speedBrake(numberRocket:number, velocityOption:number){
    switch(numberRocket){
        case 1:
            if(totalPower1 == 0){
                totalPower1= averagePower(numberRocket);
                if(velocityOption == 1 && totalPower1 <= 120){ 
                    totalPower1 += 10;
                }else if(velocityOption == 2){
                    totalPower1 = 0;
                }
            }else{
                if(velocityOption == 1 && totalPower1 <= 120){ 
                    totalPower1 += 10;
                }else if(velocityOption == 2){
                    totalPower1 -= 10
                }
            }
            moveRocket(1, totalPower1)
            return totalPower1; 
        break;
        case 2:
            if(totalPower2 == 0){
                totalPower2= averagePower(numberRocket);
                if(velocityOption == 1 && totalPower1 <= 120){ 
                    totalPower2 += 10;
                }else if(velocityOption == 2){
                    totalPower2 = 0
                }
            }else{
                if(velocityOption == 1 && totalPower2 <= 120){ 
                    totalPower2 += 10;
                }
                if(velocityOption == 2){
                    totalPower2 -= 10
                }
            }
            moveRocket(2, totalPower2)
            return totalPower2; 
        break;
    } 
}

function moveRocket(numberRocket: number, velocity:number){
    if (numberRocket == 1){
        let rocket1 = document.querySelector(".divRocket1");
        let mBottom1=0;
        mBottom1 = mBottom1 + velocity*2
        rocket1.setAttribute("style", "margin-bottom:" + mBottom1 + "px");
    }else{
        let rocket2 = document.querySelector(".divRocket2");
        let mBottom2=0;
        mBottom2 = mBottom2 + velocity*2
        rocket2.setAttribute("style", "margin-bottom:" + mBottom2 + "px");
    }
}