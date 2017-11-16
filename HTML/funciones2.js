function myFunction() {
  var table = document.getElementById("myTable");
  {
  var input1 = document.createElement("INPUT");
  var input2 = document.createElement("INPUT");
  
   
   input1.setAttribute('type',"text");
   input1.setAttribute('name',"nombre");
   

  input2.setAttribute('type',"text");
  input2.setAttribute('name',"valor");
  document.innerHTML = '<br />';
  
  document.body.appendChild(input1);
  document.body.appendChild(input2);
  
  }
}

function myDeleteFunction() {
document.getElementById("myTable").delete;


}

function mySubmintFunction(){
  var theForm = document.forms['formulario'];
  if (!theForm) {
      theForm = document.form1;
  }
  theForm.submit();
}

function fAgrega() {
document.getElementById("nombre").value;
document.getElementById("valor").value;
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


  