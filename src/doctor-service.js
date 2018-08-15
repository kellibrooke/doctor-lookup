export class DoctorService {
  getAllDoctors(location, specialty, gender) {
    console.log(location);
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url =
      `https://api.betterdoctor.com/2016-03-01/doctors?${specialty}${location}${gender}&skip=0&user_key=675f1f04996b5536cc88fdba50d5c75d`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  getAllSpecialties() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=675f1f04996b5536cc88fdba50d5c75d`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  // getAllInsurances() {
  //   return new Promise(function(resolve, reject) {
  //     let request = new XMLHttpRequest();
  //     let url = `https://api.betterdoctor.com/2016-03-01/insurances?user_key=675f1f04996b5536cc88fdba50d5c75d`;
  //     request.onload = function() {
  //       if (this.status === 200) {
  //         resolve(request.response);
  //       } else {
  //         reject(Error(request.statusText));
  //       }
  //     }
  //     request.open("GET", url, true);
  //     request.send();
  //   });
  // }
}
