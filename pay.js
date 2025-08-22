document.getElementById("login-btn") .addEventListener("click", function(){
    const mobileNumber = 12345678910
    const pinNumber = 1234
   // mobile
    const mobileNumberValue = document.getElementById("mobile").value
    const mobileNumberValueConverted = parseInt
    (mobileNumberValue)

    // pin
    const pinNumberValue = document.getElementById("pin").value
    const pinNumberValueConverted = parseInt
    (pinNumberValue)
    console.log(mobileNumberValueConverted,pinNumberValueConverted)
    // checking-log
    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./main.html"
    }
   else{
    alert("তোমাকে  এ নম্বর ও পাসওয়ার্ড দিলাম তাও  ভুল করো....জীবনে কি করে খাবা ")
   }
})