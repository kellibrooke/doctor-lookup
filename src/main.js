import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor-service.js';

$(document).ready(function() {
  let doctorService = new DoctorService();
  let promiseSpecialtyList = doctorService.getAllSpecialties();
  setTimeout(function(){
    let promiseInsuranceList = doctorService.getAllInsurances();

      promiseInsuranceList.then(function(response) {
        let body = JSON.parse(response);
        for (var i = 0; i < body.data.length; i++) {
          $('#insurances').append(`<option value="&insurance_uid=${body.data[i].uid}">${body.data[i].name}</option>`);
        }
      }, function(error) {
        $('#errors').text(`There was an error processing your request: ${error.message}`);
      });}, 1000);
  //  = doctorService.getAllInsurances();

  promiseSpecialtyList.then(function(response) {
    let body = JSON.parse(response);
    for (var i = 0; i < body.data.length; i++) {
      $('#specialties').append(`<option value="specialty_uid=${body.data[i].uid}">${body.data[i].name}</option>`);
    }
  }, function(error) {
    $('#errors').text(`There was an error processing your request: ${error.message}`);
  });




  $('#findDrBySpecialty').click(function() {
    console.log("made it");
    $("#showDrInfo").text("");
    let name = $('#name').val();
    let city = ($('#city').val()).toLowerCase();
    let state = $('#state').val();
    let location = `&location=${state}-${city}`;
    let insurance = $('#insurances').val();
    let specialty = $('#specialties').val();
    let gender = $('#gender').val();
    let promiseDoctorList = doctorService.getAllDoctors(location, specialty, gender);

    promiseDoctorList.then(function(response) {
      let body = JSON.parse(response);
        if (body.meta.count != 0) {
        for (var i = 0; i < body.data.length; i++) {
          let acceptsPatients = "";
          if (body.data[i].practices.accepts_new_patients == true) {
            acceptsPatients = "yes";
          } else {
            acceptsPatients = "no";
          }
          for(var j=0; j < body.data[i].practices.length; j++) {
            if (body.data[i].practices[j].visit_address.city == "Portland") {
              let phone1 = body.data[i].practices[j].phones[0].number.slice(0,3);
              let phone2 = body.data[i].practices[j].phones[0].number.slice(3,6);
              let phone3 = body.data[i].practices[j].phones[0].number.slice(6,10);
              let phoneNumber = `${phone1}-${phone2}-${phone3}`;
              $('#showDrInfo').append(`<h3>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</h3> <p>Accepts New Patients: ${acceptsPatients}</p>
              <p>Office Address: ${body.data[i].practices[j].visit_address.street}, ${body.data[i].practices[j].visit_address.city}, ${body.data[i].practices[j].visit_address.state}</p><p>Phone Number: ${phoneNumber}</p><p>Website: <a href="${body.data[i].practices[0].website}"`);
            }
          }
        }
    }
    }, function(error) {
      $('#errors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
