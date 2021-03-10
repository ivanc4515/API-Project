$.ajax({
    url: 'https://data.cityofnewyork.us/resource/uvpi-gqnh.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    }
});
