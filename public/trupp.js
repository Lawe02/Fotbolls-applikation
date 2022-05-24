'use strict'

const req = new XMLHttpRequest();
req.open('GET', '/data');
req.responseType = 'json';
req.send();

req.onload = () => {
    let data = req.response;

    $('th').on('click', function(){
        var column = $(this).data('column')
        var order = $(this).data('order')
        var text = $(this).html()
        text = text.substring(0, text.length -1)

        console.log('Columen was clicked', column, order);

        if(order == 'desc'){
            $(this).data('order', "asc")
            data = data.sort((a,b) => a[column] > b[column] ? 1 :
             -1)
            text += '&#9660'
        }else{
            $(this).data('order', "desc")
            data = data.sort((a,b) => a[column] < b[column] ? 1 :
            -1)
            text += '&#9650'
        }
        $(this).html(text)
        buildTable();
    })

    function buildTable(){
       var table = document.getElementById('ulRecords');
       table.innerHTML = '';
       data.forEach((element) =>{
           var row = `<tr>
                          <td>${element.name}</td>
                          <td>${element.goals}</td>
                          <td>${element.assits}</td>
                          <td>${element.games}</td>
                      </tr>`
       table.innerHTML += row;
    });
   }
   buildTable();
  
}