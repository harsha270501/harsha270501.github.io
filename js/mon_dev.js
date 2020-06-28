web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"));
         
var mon_dev_id;

    
    function hexToString (hex) 
          {
            var tobeconverted = '';
            tobeconverted = parseInt(hex).toString();
            console.log(tobeconverted);
            return tobeconverted;
          }
        


        function mon_dev_register()
        {
            console.log("Registering the Monitoring Device");

            try 
            {

                var myContract = new web3.eth.Contract(mon_dev_abi, mon_dev_sca, {from: account, gasPrice: '5000000', gas:'3000000'});
        
                var house_id = document.getElementById("reg_house_id").value;
                var mon_dev_type = document.getElementById("reg_mon_dev_type").value;
                var mon_dev_rating = document.getElementById("reg_mon_dev_rating").value;
        
                myContract.methods.reg_mon_dev(mon_dev_type,mon_dev_rating,house_id).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                    }
                    if (result) 
                    {
                        console.log(result);
                        confirmationPopUp(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }
        }


        function mon_dev_add_acc_rights()
{
            
            try 
            {
                var myContract = new web3.eth.Contract(mon_dev_abi, mon_dev_sca, {from: account, gasPrice: '5000000', gas:'3000000'});
                              
                var add_address = document.getElementById("add_address").value;
                var mon_dev_id = document.getElementById("add_mon_dev_id").value;
                
                myContract.methods.add_acc_rights(mon_dev_id,add_address).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                        console.log(result);
                         confirmationPopUp(result);
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
                var myContract = new web3.eth.Contract(mon_dev_abi,mon_dev_sca, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                var rem_address = document.getElementById("rem_address").value;
                var mon_dev_id = document.getElementById("rem_mon_dev_id").value;
                
                myContract.methods.rem_acc_rights(mon_dev_id,rem_address).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                    {
                        console.log(result);
                         confirmationPopUp(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }


        function mon_dev_units_update(){
            
            try 
            {
 
                var myContract = new web3.eth.Contract(mon_dev_abi,mon_dev_sca, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                var mon_dev_units = document.getElementById("units_units_consumed").value;
                var mon_dev_id = document.getElementById("units_mon_dev_id").value;
                
                myContract.methods.mon_read_units_consumed(mon_dev_id,mon_dev_units).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                    {
                        console.log(result);
                         confirmationPopUp(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }

        function mon_dev_update_value(){
            
            try 
            {
 
                var myContract = new web3.eth.Contract(mon_dev_abi,mon_dev_sca, {from: account, gasPrice: '5000000', gas:'3000000'})
                var mon_dev_id = document.getElementById("emerg_mon_dev_id").value;
				var mon_value  = document.getElementById("emerg_mon_dev_value").value;
                
                myContract.methods.mon_update_valu(mon_dev_id,mon_value).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                         
                        
                    }
                    if (result) 
                    {
                        console.log(result);
                        confirmationPopUp(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }

        function retrieve_mon_dev_details(){
            
            try 
            {
 
                var myContract = new web3.eth.Contract(mon_dev_abi,mon_dev_sca, {from: account, gasPrice: '5000000', gas:'3000000'})
                var mon_dev_id = document.getElementById("det_mon_dev_id").value;
                
                myContract.methods.emerg(mon_dev_id).call(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                         
                        
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                        confirmationPopUp(result);
                        mon_display();
                        document.getElementById("r1").innerHTML=result[0];
                        var r=result[1];
                        var res;
                        if(r=="0")
                            res="BGM";
                        else if(r=="1")
                            res="BPM"
                        else
                            res="HRM"
                        document.getElementById("r2").innerHTML=res;
                        document.getElementById("r3").innerHTML=result[2];
                        document.getElementById("r4").innerHTML=result[3];
                        document.getElementById("r5").innerHTML=result[3];
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }

                                function mon_display()
                                {
                                  var x = document.getElementById("mon_dev_details");
                                    x.style.display = "block";
                                }

function confirmationPopUp(result) {
  document.getElementById("modal-text").innerHTML = result;
  document.getElementById("myModal").style.display = "block";
}
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
};
