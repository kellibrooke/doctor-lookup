import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor-service.js';

$(document).ready(function() {
  let doctorService = new DoctorService();
  let promiseSpecialtyList = doctorService.getAllSpecialties();
  let promiseInsuranceList = doctorService.getAllInsurances();

  promiseSpecialtyList.then(function(response) {
    let body = JSON.parse(response);
    for (var i = 0; i < body.data.length; i++) {
      $('#specialtyOptions').append(`<option value="${body.data[i].name}">${body.data[i].name}</option>`);
    }
  }, function(error) {
    $('#errors').text(`There was an error processing your request: ${error.message}`);
  });

  promiseInsuranceList.then(function(response) {
    let body = JSON.parse(response);
    for (var i = 0; i < body.data.length; i++) {
      $('#insuranceOptions').append(`<option value="${body.data[i].name}">${body.data[i].name}</option>`);
    }
  }, function(error) {
    $('#errors').text(`There was an error processing your request: ${error.message}`);
  });



  $('#findDrBySpecialty').click(function() {
    let city = ($('#city').val()).toLowerCase();
    let state = $('#state').val();
    let location = `${state}-${city}`;
    let promiseDoctorList = doctorService.getAllDoctors(location);

    promiseDoctorList.then(function(response) {
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
