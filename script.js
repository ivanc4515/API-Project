// Agenda: puts zipcode and it will output the info of the trees that lives by your zipcode 



$.ajax({
    url: 'https://data.cityofnewyork.us/resource/uvpi-gqnh.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        
        var userZipCode = prompt("The website will take your zipcode and tell you what trees live in that area and the tree's name, address, Id, health, and Borough. Please enter your Zip Code.");

        // takes the user zipcode + looks for trees that lives by them
        for(var i = 0; i < data.length; i++){ 
            
            
            // if the API has that zipcode, then put tree name into array
            if (data[i].zipcode == userZipCode){
                
                // outputs info into array
                var treeName = [];
                treeName.push(data[i].spc_common);
                
              
                var treeAddress = [];
                treeAddress.push(data[i].address);
                
                
                var treeId = [];
                treeId.push(data[i].tree_id);
                
                
                var treeHealth = [];
                treeHealth.push(data[i].health);
                
                var treeBorough = [];
                treeBorough.push(data[i].boroname);
                
                
                // prints out the whole info (tree name, tree borough, tree address, tree id, and tree health)
                document.write("Tree Name: " + treeName);
                document.write("<br>");
                document.write("Tree Borough Name: " + treeBorough);
                document.write("<br>");
                document.write("Tree Address: " + treeAddress); 
                document.write("<br>");
                document.write("Tree Id Number: " + treeId); 
                document.write("<br>");
                document.write("Tree Health: " + treeHealth);
                document.write("<br>");
                document.write("<br>");
                 
            
            }
        }
      
    }
});




