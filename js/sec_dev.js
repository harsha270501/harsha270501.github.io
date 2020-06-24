web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"));
         
var devid;

    
    function hexToString (hex) 
          {
            var tobeconverted = '';
            tobeconverted = parseInt(hex).toString();
            console.log(tobeconverted);
            return tobeconverted;
          }
        

        //function to register the Issuer
        function registerSD()
        {
            console.log("Registering the Security Device");

            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(sdABI, sdSC, {from: account, gasPrice: '5000000', gas:'3000000'});
        
                //call the get function of our Issuer contract
                var hid = document.getElementById("House-ID").value;
                var sdevtype = document.getElementById("Security-Device-Type").value;
                var sdevkey = document.getElementById("Security-Key").value;
        
                myContract.methods.sec_dev_reg(hid,sdevkey,sdevtype).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }
        }

        function addaccrights(){
            // body...
            
            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(sdABI, sdSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                
                
                var addr = document.getElementById("Address").value;
                
                myContract.methods.add_acc_rights(devid,addr).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }

        function removeaccrights(){
            // body...
            
            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(sdABI, sdSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                
                
                var raddr = document.getElementById("R-Address").value;
                
                myContract.methods.rem_acc_rights(devid,raddr).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }

        function checkcorrect()
        {
            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(sdABI, sdSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                
                
                
                myContract.methods.grant_perm(devid).call(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                        var pass;
                        pass=result;
                        var epass;
                        epass=document.getElementById("Pass").value;
                        console.log(epass);
                        if(pass==epass)
                        {
                            document.getElementById("Grant-Result").innerHTML="Lock Released";
                            console.log("Lock Released");
                        }
                        else
                        {
                             document.getElementById("Grant-Result").innerHTML="Access denied";
                            console.log("Access Denied");
                        }

                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }
        }

        function unitsupdate(){
            // body...
            
            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(sdABI, sdSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                
                
                var units = document.getElementById("Units-Consumed").value;
                
                myContract.methods.units_Consumed(devid,units).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }

        function getSDdetails()
        {
            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(sdABI, sdSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                
                devid=document.getElementById("Sec-Id").value;
                
                
                myContract.methods.dev_ret_sec(devid).call(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                        document.getElementById("r1").innerHTML=result[0];
                        document.getElementById("r2").innerHTML=result[1];
                        var r=result[2];
                        var res;
                        if(r=="0")
                            res="SmartLock";
                        else
                            res="SecurityCamera"
                        document.getElementById("r3").innerHTML=res;
                    }
                });

                
            }
            catch (err) 
            {
              console.log(err);
            }
        }