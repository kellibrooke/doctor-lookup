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
    // console.log(state);
    // console.log(location);
    // $('#drName').val("");
    //
    // let doctorService = new DoctorService();
    // let promiseSpecialties = doctorService.getAllSpecialties();
    //
    // promiseSpecialties.then(function(response) {
    //
    //   for(var i = 0; i < 10; i++) {
    //     let body = JSON.parse(response);
    //     $('#specialtyOptions').append(`<option value="${body.data[i].name}">${body.data[i].name}</option>`);
    //   }
    //
    // }, function(error) {
    //   $('#errors').text(`There was an error processing your request: ${error.message}`);
    // });
    $("#showDrInfo").text(state);
  });

});
