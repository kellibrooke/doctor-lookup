import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#findDrButton').click(function() {
    let drName = $('#drName').val();
    $('#drName').val("");

    let doctorService = new DoctorService();
    let promiseName = doctorService.getDoctorByName(drName);

    promiseName.then(function(response) {
      body = JSON.parse(response);
      $('#showDrInfo').text(``);
    }, function(error) {
      $('#errors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
