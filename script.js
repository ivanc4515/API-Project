// Agenda: look up zipcode and it will output what type of tree lives by us AND THEN search up a type of a tree and where there is
// OTHER:  if theres a number then continue code
// OTHER: if the number does not exist then do not continue code

$.ajax({
    url: 'https://data.cityofnewyork.us/resource/uvpi-gqnh.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        
        var userZipCode = 11214 //prompt("Please enter your Zip Code.");
        
        for(var i = 0; i < data.length; i++){
            //console.log(data[i].zipcode)
            if (data[i].zipcode == userZipCode){
                var array = [];
                array.push(data[i].spc_common + ", ");
                document.write(array)
            }
        };
    }
});

//jhjhdhkjdshfsfsdfsfsdfdsf


