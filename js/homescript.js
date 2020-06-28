web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"));

var ac1;  

var hid="";

var addhouse = web3.eth.subscribe('logs', {
             address: '0x6f78992f89fc4640b465de5bba0bfd13559d64e3',
             topics: ['0x45ba5d56a78cb3aa5e0e3143eb70f7ed5f9522f64b1b2f327e0f5e0a6ae7e32c']
             }, function(error, result){
             console.log("inside if");   
             if (!error)
             {
                var datar=result.data;
                var ini="0x";
                var res1=ini.concat(datar.slice(26,66));
                var res2=ini.concat(datar.slice(66));
                console.log(res1); //house owner address
                console.log(res2); //house id
                
                
                console.log(account);
              
                if(res1==account){
                    confirmationPopUp("House ID: ".concat(res2));
                    addhousefn(res1,res2);
                }
                 
            }
            else
                 {
                    console.log(error);
                 }
         });


function addhousefn(r1,r2){
    try
    {
        var myContract=new web3.eth.Contract(usABI, usSC, {from: account, gasPrice: '5000000', gas:'3000000'});
        myContract.methods.add_house(r1,r2).send(function(err,result){
            if(err)
                console.log(err);
            else
                console.log(result);

        });
    }
    catch(err)
    {    console.log(err);}
    
}


    
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

            web3.eth.getAccounts().then(e => { ac1=e[0];
                 console.log(e[0]);
                 console.log("Acc1");
                 console.log(ac1);
                 console.log("Acc2");
                }); 

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
                        console.log(result);
                        
    
                    }
                });

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
                        confirmationPopUp(result);
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

function houserental(){
            // body...
            
            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(usABI, usSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                
                var houseid = document.getElementById("House-ID").value;
                var newown = document.getElementById("New-Owner-Name").value;
                var newownaddr = document.getElementById("New-Owner-Address").value;
                myContract.methods.transfer_house(newown,newownaddr,houseid).send(function (err, result) 
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
//Event functions
        
        
function confirmationPopUp(result) {
  document.getElementById("modal-text").innerHTML = result;
  document.getElementById("myModal").style.display = "block";
}

window.addEventListener("click",function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
});
