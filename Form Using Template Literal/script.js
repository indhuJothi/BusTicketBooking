
function printErr(elemid,hintmsg){
    document.getElementById(elemid).innerHTML=hintmsg;
}
var content=`    <div class=template  id=onewayselection1>
<label>From</label>
<select id=from>
   <option>select</option>
    <option>Chennai</option>
    <option>Cuddalore</option>
    <option>Trichy</option>
</select>
<div class=error id=fromErr></div>
</div>
    <div class=template id=onewayselection2>
    <label>To:
    <select id=to>
    <option>select</option>
    <option>cuddalore</option>
    <option>Trichy</option>
    <option>coimbaotre</option>
    </select>
    </label>
    <div class=error id=toErr></div>
    </div>
    <div class=template id=onewayselection3>
    <label>Count:<input type=text  placeholder= 'No of Passangers' id=count></label>
   <div class=error id=countErr></div>
    </div>
    <div class=template visible id=onewayselection4>
    <label>BusType</label>
    <select id=bustype>
        <option>Non-AC 2S</option>
        <option>AC 2S</option>
        <option>AC Sleeper</option>
        <option>Non-AC Sleeper</option>
    </select>
    <div class=error id=typeErr></div>
</div>
<div class=template visible id=roundwayselection>
<label>From Date<input type=text placeholder=yyyy/mm/dd id=fromDate></label>
<div class=error id=dateErr></div>
</div>
`
    var roundway=content+`<div class=template><label>Return Date:<input type=text id=retDate placeholder=yyyy/mm/dd>
    </label><div class=error id=retErr>
    </div> </div>`
function onewayTrip(){
    
   var add=document.getElementById('add');
    add.innerHTML=content;
}
function roundwayTrip()
{
    var res=document.getElementById('add');
    res.innerHTML=roundway;
}

function res(){
    let name=document.getElementById('name').value;
    let birth=document.getElementById('dob').value;
    let email=document.getElementById('email').value;
    let oneway=document.getElementById('onewaytraveltype').value;
    let roundway=document.getElementById('roundwaytraveltype').value;
    let from=document.getElementById('from').value;
    let to=document.getElementById('to').value;
    let count=document.getElementById('count').value;
    let bustype=document.getElementById('bustype').value;
    let Date1=document.getElementById('fromDate').value;
    let Date2;
    let retDate;
    if(document.getElementById('roundwaytraveltype').checked){
     Date2=document.getElementById('retDate').value;
    retDate=new Date(document.getElementById('retDate').value);}
    let mobile=document.getElementById('mobile').value;
    let fromDate=new Date(document.getElementById('fromDate').value);
   
    let dob=new Date(document.getElementById('dob').value);
    let nameErr=dobErr=emailErr=mobileErr=radioErr=fromErr=toErr=countErr=dateErr=retErr=true;
    if(name == "") {
        printErr('nameErr','please Enter your name');
         }
      else{
          var regex=/^[a-zA-Z\s]{3,15}$/
          if(regex.test(name)===false)
          {
              printErr('nameErr','Please Enter valid name');
          }
          else{
            printErr('nameErr','');
              nameErr=false;
          }
      }
      if(birth==""){
          printErr('dobErr','Please enter your Date of Birth');
      }
      else{
          var regex=/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;
          if(regex.test(birth)===false)
          {
              printErr('dobErr','Please enter a valid date');
          }
          else{
              printErr('dobErr',' ');
              dobErr=false;
          }
      }
      if(email=='')
      {
          printErr('emailErr','please enter your email ')
      }
      else{
          var regex=/^[A-Za-z0-9+_.-]+@(.+)+\.(.+)$/
          if(regex.test(email)===false){
              printErr('emailErr','Please enter a valid email')
          }
          else{
              printErr('emailErr','');
              emailErr=false;
          }
      }
      if(mobile == " ") {
        printErr("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[6-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printErr("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printErr("mobileErr", " ");
            mobileErr = false;
        }
    }
    if(oneway=='')
    {
        printErr('radioErr','please select one value');
    }
    else{
        printErr('radioErr','');
       
        radioErr=false;
    }
    if(count=='')
    {
        printErr('countErr','please select a count');
    }
    else{
        if((count<=0) || ( count>10)){
            printErr('countErr','Passanger count is between 1 to 10 ')
        }
        else{
        printErr('countErr','');
        countErr=false;
        }
    }
    if(from=='select')
    {
        printErr('fromErr','please select a place');

    }
    else{
        printErr('fromErr','')
        fromErr=false;
    }

    if(to=='select')
    {
        printErr('toErr','please select a place');

    }
    else{
        printErr('toErr','')
        toErr=false;
    }
    if(Date1==""){
        printErr('dateErr','Please enter your starting Journey Date');
    }
    else{
        var regex=/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;
        if(regex.test(Date1)===false)
        {
            printErr('dateErr','Please enter a valid date');
        }
        else{
            printErr('dateErr','');
            dateErr=false;
        }
    }
    if(document.getElementById('roundwaytraveltype').checked)
    {
      if(Date2=="")
      {
        printErr('retErr','Please enter your return Journey Date');
        }
    else{
        var regex=/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;
        if(regex.test(Date2)===false)
        {
            printErr('retErr','Please enter a valid date');
        }
        else{
            printErr('retErr',' ');
            retErr=false;
        }
    }
  }
else
{
    retErr=false;
}
  

    let startDate=fromDate.getDate();
    let startMonth=fromDate.getMonth();
    let startYear=fromDate.getFullYear();
    let returnDate;
    let returnMonth;
    let returnYear;
    
    if(document.getElementById('roundwaytraveltype').checked){
        returnDate=retDate.getDate();
        returnMonth=retDate.getMonth();
        returnYear=retDate.getFullYear();
    if((startDate===returnDate) && (startMonth===returnMonth) && (startYear===returnYear))
    {
       
        alert('Starting Date and Returning Should not be same');
         return  retErr=true;
       return dateErr=true;
        
    }
    else if(startDate>=returnDate)
    {
       if (startYear>=returnYear)
        {
           if (startMonth>=returnMonth){
           
         alert('invalid!');
        return retErr=true;
         return dateErr=true;
        
        }
    }
}
       
        else if(startYear>=returnYear){
            if(startMonth>returnMonth){
                alert('invalid!');
                return retErr=true;
                 return dateErr=true;
            }
        }
        
       
        
    
}
    let year=dob.getFullYear();
    let TodayDate=new Date();
    let TodayYear=TodayDate.getFullYear();
    let age=TodayYear-year;
    if(age<18)
    {
        alert('You are not allowed to book ticket');
        return false;
    }
    if((nameErr||dobErr||emailErr||mobileErr||radioErr||fromErr||toErr||countErr||dateErr||retErr)==true)
    {
        return false;
    }
    else{
        var datas=`
        <div>
       <div> Name: ${name}</div>
       <div> Email: ${email}</div>
       <div> Mobile: ${mobile}</div>
       <div> DOB: ${birth}</div>
       <div> From: ${from}</div>
       <div> To: ${to}</div>
       <div> No of Passengers: ${count}</div>
       <div> Ceat Type: ${bustype}</div>
       <div> start Date: ${Date1}</div>
       </div>
       `
        if(document.getElementById('onewaytraveltype').checked)
       {
        document.querySelector('body').style.backgroundImage='none';
         document.getElementById('form').style.display='none';  
         document.getElementById('result').innerHTML=`you have entered the following details: <div> Traveltype: ${oneway}</div>`+datas;
         document.getElementById('heading').innerHTML='Booked'
      }
    else{
        var roundwaydatas=datas+`End Date: ${Date2}`;
        document.querySelector('body').style.backgroundImage='none';
         document.getElementById('form').style.display='none';  
         document.getElementById('result').innerHTML=`you have entered the following details: <div> Traveltype: ${roundway}</div>`+roundwaydatas;
         document.getElementById('heading').innerHTML='Booked'

    }
    
   
}
}


















  // var fromdiv=document.createElement('div');
    // fromdiv.classList.add('fromdiv');
    // var fromplaces=['chennai','Madurai','Trichy'];
    // var fromselect=document.createElement('select');
    // fromselect.classList.add('template');
    // fromselect.setAttribute('id','fromselect');
   
    // // fromdiv.appendChild(fromerr);
    // for(var i=0;i<fromplaces.length;i++)
    // {
    //     var option=document.createElement('option');
    //     option.value=fromplaces[i];
    //     option.text=fromplaces[i];
    //     fromselect.appendChild(option);
    // }
    // var fromerr=document.createElement('div');
    // fromerr.classList.add('fromErr');
    // fromerr.classList.add('error');
    // fromdiv.appendChild(fromselect);
    // fromdiv.appendChild(fromerr);
    // var todiv=document.createElement('div');
    // todiv.classList.add('todiv');
    // var toplaces=['Bangalore','cuddalore','coimbatore'];
    // var toselect=document.createElement('select');
    // toselect.classList.add('template');
    // toselect.setAttribute('id','toselect');
    // for(var i=0;i<toplaces.length;i++)
    // {
    //     var option=document.createElement('option');
    //     option.value=toplaces[i];
    //     option.text=toplaces[i];
    //     toselect.appendChild(option);
    // }
    // var toerr=document.createElement('div');
    // toerr.classList.add('toErr');
    // toerr.classList.add('error');
    // todiv.appendChild(toselect);
    // todiv.appendChild(toerr);
    // var from=document.createElement('input');
    // from.setAttribute('type','text');
    // from.setAttribute('id','from');
    // from.classList.add('yesadd');
    // var to=document.createElement('input');
    // to.setAttribute('type','select');
    // to.setAttribute('id','to');
    // to.classList.add('yesadd');


     // var newlabel = document.createElement("Label");
    // var Tolabel=document.createElement('label');
    // var countlabel=document.createElement('label');
    // Tolabel.setAttribute('for','To');
    // Tolabel.innerHTML="To: "
    // Tolabel.appendChild(todiv);
    // newlabel.setAttribute("for",'From');
    // newlabel.innerHTML = "From: ";
    // newlabel.appendChild(fromdiv);
    // var countdiv=document.createElement('div');
    // countdiv.classList.add('template');
    // var count=document.createElement('input');
    // count.classList.add('count');
    // count.setAttribute('type','number');
    // count.setAttribute('min',1);
    // count.setAttribute('max',10);
    // countlabel.setAttribute('for','count');
    // countlabel.innerHTML='count';
    // var counterr=document.createElement('div');
    // counterr.classList.add('error');
    // countdiv.appendChild(count);
    // countdiv.appendChild(counterr);
    // countlabel.appendChild(countdiv);
    
    // add.appendChild(countlabel);
    // add.appendChild(newlabel);