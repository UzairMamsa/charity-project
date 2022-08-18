
function add(){
    let contain = document.getElementById('inp-container');

    let inp = document.createElement("input");
    inp.placeholder = "Input purchase amount";
    let p = document.createElement("p");
    p.className = "final"

    contain.appendChild(inp);
    contain.appendChild(p);
}


function round(){
    //takes in input data and displays new div that shows the taken amount
    //add button to go home or reset page to donate again

    let inputs = document.getElementByTagname('input');
    let ps = document.getElementByTagname("p");
    let donation = 0;
    for(var i = 0; i < inputs.length; i++){
        let spent = inputs[i].value;
        let donate = 0;
        if(spent % 1 == 0){
            donation += 1; //take a dollar for donation
            donate = 1;

        }else{
            let change = spent % 1;
            donate = 1 - change;
            donation += donate;

        }
        ps[i].innerHTML = "Donation made: " + donate;

    }
    let bottom = document.getElementById("bot");
    bottom.innerHTML = "Total donations made today = " + donation + ", Thank you for your generosity!";

}
