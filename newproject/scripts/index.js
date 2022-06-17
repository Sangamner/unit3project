function livetime(){
    let today =new Date();
let month=today.getMonth()+1;
let year =today.getFullYear();
let day= today.getDay()

let daylist =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let monthlist=['January','February','March','April','May','June','July','August','September','October','November','December']
console.log(daylist[day])
console.log(monthlist[month])
document.getElementById("timedate").innerText=`${daylist[day]}, ${monthlist[month]} ${month }, ${year}`
}
livetime();