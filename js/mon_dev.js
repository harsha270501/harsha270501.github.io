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
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }

        function mon_dev_emerg(){
            
            try 
            {
 
                var myContract = new web3.eth.Contract(mon_dev_abi,mon_dev_sca, {from: account, gasPrice: '5000000', gas:'3000000'})
                var mon_dev_id = document.getElementById("emerg_mon_dev_id").value;
                
                myContract.methods.emerg(mon_dev_id).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                    {
                        console.log(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }
