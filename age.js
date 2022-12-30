//variables for datepicker

const datepicker=document.getElementById('datePicker');
const chooseDate=document.getElementById('ChooseDate');

const ageyears=document.getElementById('years');
const agemonths=document.getElementById('months');
const agedays=document.getElementById('days');
const agehours=document.getElementById('hours');
const ageseconds=document.getElementById('seconds');
const agemilliseconds=document.getElementById('milliseconds');

datepicker.addEventListener('change',function(){

    let options={year:'numeric',month:'long',day:'numeric'};
    let selectedDate=new Date(this.value);
    let DOB=selectedDate.toLocaleDateString('en-US',options);

    chooseDate.innerHTML="DOB:"+""+DOB;

    let milliseconds_DOB=Date.parse(DOB);
    let milliseconds_Now=Date.now();
    let age_in_milliseconds=milliseconds_Now-milliseconds_DOB;

    let milliseconds=age_in_milliseconds;
    let seconds=1000;
    let minute=seconds*60;
    let hour=minute*60;
    let day=hours*24;
    let month=day*30;
    let year=day*365;

    let years=Math.round(milliseconds/year);
    let months=years*12;
    let days=years*365;
    let hours=Math.round(milliseconds/hour);
    let second=Math.round(milliseconds/seconds);

    ageyears.innerHTML=years;
    agemonths.innerHTML=months;
    agedays.innerHTML=days;
    agehours.innerHTML=hours;
    ageseconds.innerHTML=second;
    agemilliseconds.innerHTML=milliseconds;

    document.querySelector('.age-calc').classList.add('expand');
})