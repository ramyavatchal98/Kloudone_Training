fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json")
          .then(function (response) {
              return response.json();
          })
          .then(function (data) {
              appendData(data);
          })
          .catch(function (err) {
              console.log('error: ' + err);
          });
      function appendData(data) {
          var mainContainer = document.getElementById("myData");
          for (var i = 0; i < data.length; i++) {
              var div = document.createElement("div");
              const divid = document.createElement("p");
              const divfirstname = document.createElement("p");
              const divlastname = document.createElement ("p");
              const divlocation = document.createElement ("p");
              const divdate = document.createElement ("p");
              const divsalary = document.createElement("p");
              

              divid.textContent = data[i].id;
              divfirstname.textContent = data[i].firstName;
              divlastname.textContent=data[i].lastName;
              divlocation.textContent = data[i].lastName;
              divdate.textContent = data[i].location;
              divsalary.textContent = data[i].salary;
              div.innerHTML = divid.textContent  +" " + divfirstname.textContent.textContent + " " + divlastname.textContent+ " "+ divlocation.textContent + " " + divdate.textContent + " " + divsalary.textContent;
              mainContainer.appendChild(div);
    }

    
}