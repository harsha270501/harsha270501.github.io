web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"));
         
var smart_mtr_id;

var bval=false;     
var hid="";
var adddev = web3.eth.subscribe('logs', {
             address: '0xBefd306b8d2a581c1D5F0B4156dDE66729C49a3E',
             topics: ['0xdcca2fd466d95919391212a9e3c71b1ebabf78ac15dd2b33ce4531e03242be6c']
             }, function(error, result){
             console.log("inside if");   
             if (!error)
             {
                var datar=result.data;
                var ini="0x";
                var res1=ini.concat(datar.slice(2,66));
                var res2=ini.concat(datar.slice(66));
                console.log(res1); //house id
                console.log(res2); //device id
                
                
                console.log(account);
                 console.log(bval);
               checkhousereg(res1);
                if(bval==true){
                    //confirmationPopUp("Monitoring Device ID: ".concat(res2));
                    adddevfn(res1,res2);
                }
                 
            }
            else
                 {
                    console.log(error);
                 }
         });


function checkhousereg(hid){
         
    try
    {
        var myContract=new web3.eth.Contract(usABI, usSC, {from: account, gasPrice: '5000000', gas:'3000000'});
        myContract.methods.isHouseExists(hid).call(function(err,result){
            if(err)
                console.log(err);
            else
            {
                     console.log(result);
                     bval=result;
            }

        });
    }
    catch(err)
    {    console.log(err);}
         
}

function adddevfn(r1,r2){
    try
    {
        var myContract=new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
        myContract.methods.add_dev(r1,r2).send(function(err,result){
            if(err)
                console.log(err);
            else
                console.log(result);

        });
    }
    catch(err)
    {    console.log(err);}
    
}




//Emit function for units consumed
var unit_consumed = web3.eth.subscribe(
  "logs",
  {
    address: '0xBefd306b8d2a581c1D5F0B4156dDE66729C49a3E',
    topics: ['0x63740acb0b61ea9006ac46884aa42fc7cb582744fe9d34048797b599be5e0d33']
  },
  function (error, result) {
    console.log("inside if");
    if (!error) {
      console.log(result.data);
    } else {
      console.log(error);
    }
  }
);

    function hexToString (hex) 
          {
            var tobeconverted = '';
            tobeconverted = parseInt(hex).toString();
            console.log(tobeconverted);
            return tobeconverted;
          }
        


        function smart_mtr_register()
        {
            console.log("Registering the Smart Meter");

            try 
            {

                var myContract = new web3.eth.Contract(smart_mtr_abi, smart_mtr_sca, {from: account, gasPrice: '5000000', gas:'3000000'});
        
                var house_id = document.getElementById("reg_house_id").value;
                var smart_mtr_type = document.getElementById("reg_smart_mtr_type").value;
        
                myContract.methods.reg_meter(smart_mtr_type,house_id).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                    }
                    if (result) 
                    {
                        console.log(result);
                        //console.log(result[0]);
                        confirmationPopUp(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }
        }

        function smart_mtr_add_acc_rights(){
            
            try 
            {
                var myContract = new web3.eth.Contract(smart_mtr_abi, smart_mtr_sca, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                
                
                var add_address = document.getElementById("add_address").value;
                var smart_mtr_id = document.getElementById("add_mtr_id").value;

                myContract.methods.add_acc_rights(smart_mtr_id,add_address).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                        console.log(result);
                        //confirmationPopUp(result);
                    }
                );

            }
            catch (err) 
            {
              console.log(err);
            }

        }

        function mon_dev_remove_acc_rights(){    
            try 
            {
                var myContract = new web3.eth.Contract(smart_mtr_abi,smart_mtr_sca, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                var rem_address = document.getElementById("rem_address").value;
                var smart_mtr_id = document.getElementById("rem_mtr_id").value;

                myContract.methods.rem_acc_rights(smart_mtr_id,rem_address).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                    {
                        console.log(result);
                        //confirmationPopUp(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }

        function update(smart_house_id,smart_mtr_units)
        {
            try 
            {
 
                var myContract = new web3.eth.Contract(smart_mtr_abi,smart_mtr_sca, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //var smart_mtr_units = document.getElementById("units_units_consumed").value;
                //var smart_mtr_id = document.getElementById("units_mtr_id").value;
               
                myContract.methods.update_units(smart_house_id,smart_mtr_units).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                    {
                        console.log(result);
                        //confirmationPopUp(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }
   
        }

        function smart_mtr_units(){
            
            try 
            {
 
                var myContract = new web3.eth.Contract(smart_mtr_abi,smart_mtr_sca, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //var smart_mtr_units = document.getElementById("units_units_consumed").value;
                var smart_mtr_id = document.getElementById("units_mtr_id").value;
               
                myContract.methods.tot_units_con(smart_mtr_id).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                    {
                        console.log(result);
                        //confirmationPopUp(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }

        function smart_mtr_last_reading_taken(){
            
            try 
            {
 
                var myContract = new web3.eth.Contract(smart_mtr_abi,smart_mtr_sca, {from: account, gasPrice: '5000000', gas:'3000000'})
                
                var smart_mtr_last_reading = document.getElementById("reading_service_date").value;
                var smart_mtr_id = document.getElementById("reading_mtr_id").value;
                
                myContract.methods.mtr_last_reading_taken(smart_mtr_id,smart_mtr_last_reading).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                    {
                        console.log(result);
                        //confirmationPopUp(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }


        function retrieve_mtr_details(){
            
            try 
            {
 
                var myContract = new web3.eth.Contract(smart_mtr_abi,smart_mtr_sca, {from: account, gasPrice: '5000000', gas:'3000000'})
                
                var smart_mtr_id = document.getElementById("det_mtr_id").value;
                
                myContract.methods.retrieve_mtr_dev_details(smart_mtr_id).call(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                        //confirmationPopUp(result);
                        mtr_display();
                        document.getElementById("r1").innerHTML=result[0];
                        var r=result[1];
                        var res;
                        if(r=="0")
                            res="SMETS1";
                        else if(r=="1")
                            res="SMETS2"
                        else if(r=="2")
                            res="NET"
                        else if(r=="3")
                            res="BIDERICTIONAL"
                        else
                            res="DUAL"
                        document.getElementById("r2").innerHTML=res;
                        document.getElementById("r3").innerHTML=result[2];
                        document.getElementById("r4").innerHTML=result[3];
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }

function mtr_display()
{
    var x = document.getElementById("mtr_details");
    x.style.display = "block";
}

function confirmationPopUp(result) 
{
  document.getElementById("modal-text").innerHTML = result;
  document.getElementById("myModal").style.display = "block";
}
window.onclick = function (event) 
{
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
};
