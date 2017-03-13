/* 
 * Funciones basicas para la web
 */
//Funcion principal
$('document').ready(function(){
    console.log("DOM inicializado");
    $('#datePicker').datepicker({
        format: 'dd/mm/yyyy'
    }).on('changeDate', function(e) {
        // Revalidate the date field
        $('#eventForm').formValidation('revalidateField', 'date');
    });
});


