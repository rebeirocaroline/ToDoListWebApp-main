
function ajax(){

    var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4&&this.status==200){
      
      var response=JSON.parse(this.responseText);
      var table = $('#example');
        var rows = "";
        let noOfClick=0;
        for (var i = 0; i < response.length; i++) {
            var name = response[i].title;
            var status = response[i].completed;
           
            if (status == true) {
               rows += "<tr><td><input type=checkbox id=chk1 checked=checked ></td>";      
               
            }
            else {
                rows += "<tr><td><input type=checkbox id=chk1></td>";
            }
            rows += "<td>" + name + "</td></tr>";
        }
        table.append(rows);

        //Promise

        let clickvalidation = new Promise(function(resolve, reject) {
          $('input[type=checkbox][id=chk1]').change(function() {
                if ($(this).is(':checked')) {
                  noOfClick++;
                  if(noOfClick==5){ 
                   resolve();
                  }    
                }
            });
        });
          
           
        clickvalidation
            .then(function () {
                console.log('Success, You are a GEEK');
                alert(`Congrats 5 tasks have been successfully completed`);
              
            })
            .catch(function (e) {
                console.log(e);
            });

      //   $('input[type=checkbox][id=chk1]').change(function() {
      //     if ($(this).is(':checked')) {
      //       noOfClick++;
      //       if(noOfClick==5){
      //         alert(`Congrats 5 tasks have been successfully completed`);
      //       }       
      //     }
      // });
 }   
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}

