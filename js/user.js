web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"));
         
var Emergency = web3.eth.subscribe(
  "logs",
  {
    address: emrgdevAddr,
    topics: [emrgDevTopics.emrg],
  },
  function (error, result) {
    var datar=result.data;
    var ini="0x";
    var res1=ini.concat(datar.slice(2,66));
    var res2=ini.concat(datar.slice(66));
    console.log(res1); //house id
    console.log(res2); //device id
    confirmationPopUp("Device ID:"+res2);
    console.log("inside if");
    if (!error) {
      console.log(result);
      var addr;
                try 
                {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
        
                
        
                myContract.methods.dev_ret_curr_occ_addr(res2).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                        addr=result;
                    }
                });

               }
            catch (err) 
            {
              console.log(err);
            }
                      if(addr==account)
                      {
                               confirmationPopup("Emergency Device ALert");
                      }
      
    } else {
      console.log(error);
    }
  }
);
var monitdevuser = web3.eth.subscribe('logs', {
             address: mon_dev_sca,
             topics: ['0x32e7399906561f7bfc72dac3412790f6ac770339cd768936dcf5c7ec126eba47']
             }, function(error, result){
             console.log("inside if");   
             if (!error)
             {
                console.log(result.data);
                var res=result.data;
                var ini="0x";
                var res2=ini.concat(res.slice(66));
               
                var res1=parseInt(ini.concat(res.slice(2,66)));
                var addr;
                try 
                {
                // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
                //instantiate and connect to contract address via Abi
                var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
        
                
        
                myContract.methods.dev_ret_curr_occ_addr(res2).send(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                        addr=result;
                    }
                });

               }
            catch (err) 
            {
              console.log(err);
            }
                      if(addr==account)
                      {
                               confirmationPopup("Monitoring Device ALert: ");
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
                var myContract = new web3.eth.Contract(usABI, usSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                
                //call the get function of our Issuer contract
                
                
                
                myContract.methods.dev_ret_user().call(function (err, result) 
                {
                    if (err) 
                    { 
                        console.log(err);
                    }
                    if (result) 
                    {
                        //display value on the webpage
                        console.log(result);
                        document.getElementById("display-details").style.display="block";
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
