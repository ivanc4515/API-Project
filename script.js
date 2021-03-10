// Agenda: look up zipcode and it will output what type of tree lives by us AND THEN search up a type of a tree and where there is
// OTHER:  if theres a number then continue code
// OTHER: if the number does not exist then do not continue code

$.ajax({
    url: 'https://data.cityofnewyork.us/resource/uvpi-gqnh.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        
        var userZipCode = prompt("Please enter your Zip Code.");
        
        
        // takes the user zipcode + looks for trees that lives by them
        for(var i = 0; i < data.length; i++){ 
            //console.log(data[i].zipcode) 
            
            // if the API has that zipcode, then put tree name into array
            if (data[i].zipcode == userZipCode){
                var treeName = [];
                treeName.push(data[i].spc_common + ", ");
                
                var treeAddress = [];
                treeAddress.push(data[i].address + ", ");
                
                var treeId = [];
                treeId.push(data[i].tree_id + ", ");
                
                document.write("Tree Name: " + treeName);
                document.write("<br>");
                document.write("Tree Address: " + treeAddress); 
                document.write("<br>");
                document.write("Tree Id: " + treeId); 
                document.write("<br>");
            }
        }
        // document.write(treeName);
        // document.write("<br>");
        // document.write(treeAddress); 
        // document.write("<br>");
    }
});

//jhjhdhkjdshfsfsdfsfsdfdsfdfsdfssdfffefsdfghfds


