export class DoctorService {
  getAllDoctors(location) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${location}&fields=profile%2C%20specialties&limit=1&user_key=675f1f04996b5536cc88fdba50d5c75d`;
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
}
