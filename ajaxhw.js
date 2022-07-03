var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var response = JSON.parse(this.responseText);
        var output = "<table><tr><th>Title</th><th>Status</th><tr>";
        for(var i=0;i<response.length;i++){
            output+="<tr><td>"+response[i].title+"</td>"
            +"<td>"+response[i].completed+"</td></tr>";
        }
        output+="</table>";
        document.getElementById("output").innerHTML = output;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos");
xhttp.send();
