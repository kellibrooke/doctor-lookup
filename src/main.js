import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService} from './doctor-service.js';

$(document).ready(function() {

  $('#findDrButton').click(function() {
    let city = ($('#city').val()).toLowerCase();
    let state = $('#state').val();
    let location = `${state}-${city}`;

    let doctorService = new DoctorService();
    let promiseSpecialties = doctorService.getAllDoctors(location);

    promiseSpecialties.then(function(response) {
      let body = JSON.parse(response);
      for (var i = 0; i < body.data.length; i++) {
        console.log(body);
        console.log("bodydata" + body.data[0].profile.first_name);
        $('#showDrInfo').append(`<p>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</p>`);
      }
    }, function(error) {
      $('#errors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
