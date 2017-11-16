function myCreateFunction() {
var table = document.getElementById("myTable");
  {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = '<input type="text" id="name" placeholder="Nombre" />';
  cell2.innerHTML = '<input type="text" id="lastname" placeholder="Valor" />';
  }
}

function myDeleteFunction() {
document.getElementById("myTable").deleteRow(0);
}




function addPerson(e) {
    e.preventDefault();
    const row = createRow({
      name: $('#name').val(),
      lastname: $('#lastname').val()
    });
    $('table tbody').append(row);
    clean();
  }
  
  function createRow(data) {
    return (
      `<tr>` +
        `<td>${$('tbody tr').length + 1}</td>` +
        `<td>${data.name}</td>` +
        `<td>${data.lastname}</td>` +
      `</tr>`
    );
  }
  
  function clean() {
    $('#name').val('');
    $('#lastname').val('');
    $('#name').focus();
  }


  