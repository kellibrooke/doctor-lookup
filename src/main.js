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
      $('#specialties').append(`<option value="&specialty_uid=${body.data[i].uid}">${body.data[i].name}</option>`);
    }
  }, function(error) {
    $('#errors').text(`There was an error processing your request: ${error.message}`);
  });

  promiseInsuranceList.then(function(response) {
    let body = JSON.parse(response);
    for (var i = 0; i < body.data.length; i++) {
      $('#insurances').append(`<option value="&insurance_uid=${body.data[i].uid}">${body.data[i].name}</option>`);
    }
  }, function(error) {
    $('#errors').text(`There was an error processing your request: ${error.message}`);
  });



  $('#findDrBySpecialty').click(function() {
    let city = ($('#city').val()).toLowerCase();
    let state = $('#state').val();
    let location = `location=${state}-${city}`;
    let insurance = $('#insurances').val();
    let specialty = $('#specialties').val();
    let gender = $('#gender').val();
    let promiseDoctorList = doctorService.getAllDoctors(location, insurance, specialty);

    promiseDoctorList.then(function(response) {
      let body = JSON.parse(response);

      for (var i = 0; i < body.data.length; i++) {
        let acceptsPatients = "";
        if (body.data[i].practices.accepts_new_patients == true) {
          acceptsPatients = "yes";
        } else {
          acceptsPatients = "no";
        }
        $('#showDrInfo').append(`<h3>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</h3><p>Office Address:<br>${body.data[i].practices.visit_address.street}<br>${body.data[i].practices.visit_address.street2}<br> ${body.data[i].practices.visit_address.city},  ${body.data[i].practices.visit_address.state}  ${body.data[i].practices.visit_address.zip}</p><p>Office Phone Number: ${body.data[i].practices.phones.number}</p><p><a href='${body.data[i].practices.website}'>Office Website</a></p><p>Accepting New Patients: ${acceptsPatients}</p>`);
      }
    }, function(error) {
      $('#errors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
