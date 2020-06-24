web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"));
         

var hid="";

var addhouse = web3.eth.subscribe('logs', {
             address: '0xDB39318510c207DD7AA1710355662ff566380AB6',
             topics: ['0x45ba5d56a78cb3aa5e0e3143eb70f7ed5f9522f64b1b2f327e0f5e0a6ae7e32c']
             }, function(error, result){
             console.log("inside if");   
             if (!error)
             {
                console.log(result.data);
                
             }
             else
             {
                console.log(error);
             }
         });

var changehouseown = web3.eth.subscribe('logs', {
             address: '0xBD6AfA8624AA823a230D744052bAA1Fc01659A1A',
             topics: ['0x1600d01ae781bd9743365c99ba3e36031bc1855d20ade3e40b144b79058540aa']
             }, function(error, result){
             console.log("inside if");   
             if (!error)
             {
                console.log(hexToString (result.data));
                try 
                {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
        
                //call the get function of our Issuer contract
                
                var res;
                res=result.data;
                var old=res[0];
                var newn=res[1];
                var newa=res[2];
                var h=res[3];
                myContract.methods.change_house_own(old,newn,newa,h).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result[1]);
                        
                    }
                });

                
                }
                catch (err) 
                {
                console.log(err);
                }
             }
             else
             {
                console.log(error);
             }
         });

var addsdev = web3.eth.subscribe('logs', {
             address: '0xae7Cf917FAa546E2dC415413fbAD9d1bF37EE624',
             topics: ['0x82b3fb8d07b3113d1dc3f91acfd77b2e6fb693d77ee32bdaa79b19144d1fba7e']
             }, function(error, result){
             console.log("inside if");   
             if (!error)
             {
                console.log(hexToString (result.data));
                try 
                {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
        
                //call the get function of our Issuer contract
                
                var res;
                res=result.data;
                var h=res[0];
                var uid=res[1];
                myContract.methods.add_dev(h,uid).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result[1]);
                        
                    }
                });

                
                }
                catch (err) 
                {
                console.log(err);
                }
             }
             else
             {
                console.log(error);
             }
         });

    
    function hexToString (hex) 
          {
            var tobeconverted = '';
            tobeconverted = parseInt(hex).toString();
            console.log(tobeconverted);
            return tobeconverted;
          }
        

        //function to register the Issuer
        function registerHS()
        {
            console.log("Registering the HS");

            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
        
                //call the get function of our Issuer contract
                var loc = document.getElementById("House-Location").value;
                var ownname = document.getElementById("Owner-Name").value;
                var currname = document.getElementById("Current-Occupant-Name").value;
                var  curraddr= document.getElementById("Current-Occupant-Address").value;
        
                myContract.methods.home_register(loc,ownname,currname,curraddr).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result[1]);
                        var r=result[1];
                        console.log(web3.eth.getTransactionReceipt(result));
                        document.getElementById('registerresult').innerHTML=r;
                    }
                });

                 document.getElementById("House-Location").reset();
                 document.getElementById("Owner-Name").reset();
                 document.getElementById("Current-Occupant-Name").reset();
                 document.getElementById("Current-Occupant-Address").reset();
            }
            catch (err) 
            {
              console.log(err);
            }
        }

        function getdetails(){
            // body...
            hid=document.getElementById("home-choices-id").value;
            console.log(hid);
            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                
                
                
                myContract.methods.dev_ret_home_det(hid).call(function (err, result) 
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
                        document.getElementById("r3").innerHTML=result[2];
                        document.getElementById("r4").innerHTML=result[3];
                        document.getElementById("r5").innerHTML=result[4];
                        document.getElementById("r6").innerHTML=result[5];
                    }
                });

                document.getElementById("home-choices-id").reset();
            }
            catch (err) 
            {
              console.log(err);
            }

        }
        function setRent()
        {
            console.log("setRent");

            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                var amt = document.getElementById('Rent-Amount').value;
                var date = document.getElementById('Rent-Amount').value;
                console.log(hid);
                
                myContract.methods.set_rent(hid,amt,date).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        alert("Access denied");
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

        function payRent()
        {
            console.log("payRent");

            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                console.log(hid);
                
                myContract.methods.pay_rent(hid).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        alert("Access denied");
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

        function ecoFactor(e)
        {
            if(e==undefined)
                {
                    window.alert("Electricity not ")
                }

            console.log("Eco-factor");

            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                var lpg=document.getElementById('LPG').value;
                var oil=document.getElementById('Oil').value;
                var tokenId=document.getElementById('TokenID').value;


                val=(e*0.0005)+(lpg*0.01)+(oil*0.01);
                val=val*100;
                
                myContract.methods.calc_eco_factor(hid,val,tokenId).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        alert("Error in the transaction");
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