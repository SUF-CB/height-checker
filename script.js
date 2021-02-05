//declaring the variables with attribute.   
let cmbtn = document.getElementById('centimetres'); // let is variable. The getElementById() method returns the element that has the ID attribute with the specified value cm.
let poundbtn = document.getElementById('foot'); // same as above. The specieifed value is foot.


cmbtn.addEventListener('click', function(){ // this listens to the click event  and carries out the event via the function
    let input = document.getElementById('input').value; // input var
    document.getElementById('output').value = input  * 30.48 + " cm"; //output the value depending on the button pressed. //cm
})

poundbtn.addEventListener('click', function(){ // this listens to the click event  and carries out the event via the function
    let input = document.getElementById('input').value;// input var
    document.getElementById('output').value = input / 30.48  + " foot"; //output the value depending on the button pressed. //foot
})

