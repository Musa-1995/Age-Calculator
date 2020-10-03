
function diplay() {
    var x = document.getElementById("calculator");
      x.style.display = "flex";
  }

      function ageCalculate(){
       var i = "";
         i = document.getElementById("name").value;
       var birthDate =document.getElementById('birth_date').value;
        var d = new Date(birthDate);
            var mdate = birthDate.toString();
            var yearThen = parseInt(mdate.substring(0,4), 10);
            var monthThen = parseInt(mdate.substring(5,7), 10);
            var dayThen = parseInt(mdate.substring(8,10), 10);
            
            var today = new Date();
            var birthday = new Date(yearThen, monthThen-1, dayThen);
            var differenceInMilisecond = today.valueOf() - birthday.valueOf();
            var year_age = Math.floor(differenceInMilisecond / 31536000000);
            var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
            
            if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
                alert("Happy B'day!!!");
            }
            
            var month_age = Math.floor(day_age/30);
            
            day_age = day_age % 30;

            
            var tMnt= (month_age + (year_age*12));
            var tDays =(tMnt*30) + day_age;
            
            if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
                document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
            }else if( i === ""){
              document.getElementById("age").innerHTML = ("Name Should not be Empty, Please fill your name!");
            }
            else {
      document.getElementById("age").innerHTML = i+" You have live for " + year_age + " years " + month_age + " months " + day_age + " days, \t" + tDays*24 + " in hours,\t" + tDays*24*3600 + "  in seconds,\t" + tDays*24*3600*1000 + " in miliseconds.\t" ;}
          }