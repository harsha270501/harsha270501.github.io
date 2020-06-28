web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"));
         
var addhouse = web3.eth.subscribe('logs', {
             address: '0xDB39318510c207DD7AA1710355662ff566380AB6',
             topics: ['0x45ba5d56a78cb3aa5e0e3143eb70f7ed5f9522f64b1b2f327e0f5e0a6ae7e32c']
             }, function(error, result){
             console.log("inside if");   
             if (!error)
             {
                console.log(result.data);
                try 
                {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                    var myContract = new web3.eth.Contract(usABI, usSC, {from: account, gasPrice: '5000000', gas:'3000000'});
            
                    //call the get function of our Issuer contract
                    var res;
                    res=result.data;

            
                    myContract.methods.add_house(res).send(function (err, result) 
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
             else
             {
                console.log(error);
             }
         });

var monitdevuser = web3.eth.subscribe('logs', {
             address: '0xDB39318510c207DD7AA1710355662ff566380AB6',
             topics: ['0x0a4324ff0f4987efc8378421cf6f6bb4d65afce7e749384d8c5ca1c4bee8bd7a']
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

var monitdevuser = web3.eth.subscribe('logs', {
             address: '0x6457969927bf340f172982b9410c23be0fbe51dc',
             topics: ['0x3a1845651e7a8d3a375b0621f957e3ee336115e77933a34f16d8ccbefe31bf82']
             }, function(error, result){
             console.log("inside if");   
             if (!error)
             {
                console.log(result.data);
                var res=result.data;
                var ini="0x";
                var res1=ini.concat(res.slice(26,66));
                var res2=ini.concat(res.slice(66,131));
                var res3=parseInt(ini.concat(res.slice(131)));
                
                
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
        function registerUser()
        {
            console.log("Registering the User");

            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(usABI, usSC, {from: account, gasPrice: '5000000', gas:'3000000'});
        
                //call the get function of our Issuer contract
                var uname = document.getElementById("User Name").value;
                var uphno = document.getElementById("User Phone No").value;
        
                myContract.methods.user_register(uname,uphno).send(function (err, result) 
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
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }
        }

        function housetransfer(){
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
                myContract.methods.transfer_house(houseid).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                        document.getElementById("House-Transfer-Result").innerHTML="Transfer unsuccessful";
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                        try
                        {
                          var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                          myContract.methods.change_house_own(newown,newownaddr).send(function(err,result){
                            if(err)
                              console.log(err);
                            if(result)
                              console.log(result);
                          });

                        }
                        catch(err)
                        {console.log(error);}
                    }
                });

            }
            catch (err) 
            {
              console.log(err);
            }

        }


        function getuserdetails()
        {
            try 
            {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                
                
                
                myContract.methods.dev_ret_user().send(function (err, result) 
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
                    }
                });

                document.getElementById("home-choices-id").reset();
            }
            catch (err) 
            {
              console.log(err);
            }
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
