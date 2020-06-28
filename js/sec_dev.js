web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"));
         
var devid;

const web3Contract = new web3.eth.Contract(sdABI, sdSC);

// Get dagger contract
const daggerContract = dagger.contract(web3Contract);

// Get subscription filter
const filter = daggerContract.events.Transfer({filter: { from: '0x82b3fb8d07b3113d1dc3f91acfd77b2e6fb693d77ee32bdaa79b19144d1fba7e ' }});

// Start watching logs
filter.watch((rlog) => {
  // log.returnValues.value => 100 GNT
  // log.returnValues.from => '0x12345678...'
  // log.returnValues.to => address which value has been transferred to
  console.log(rlog.returnValues.value);
});
    /*
    const dagger = new EthDagger('wss://mainnet.dagger.matic.network');

// Subscribe for latest block
dagger.on('latest:0x70Cf8acEdf34edb7e968dcFf762608639dce8aEb/filter/0x82b3fb8d07b3113d1dc3f91acfd77b2e6fb693d77ee32bdaa79b19144d1fba7e/#', (block) => {
  // Use block
});*/

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
                var res;
                
                try
                {
                    var houseContract=new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
                    houseContract.methods.dev_ret_house_own_addr(hid).call(function(err,result){
                        if(err)
                            console.log(error);
                        if(result)
                        {
                            console.log(result);
                            
                            console.log(account);
                            if(result==acc)
                            {
                                res=true;
                            }
                            else
                            {
                                res=false;
                            }
                        }

                    });
                }   
                catch(err){
                    console.log(err);
                }          

                if(res)
                {
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
                else
                    console.log("not possible to register");

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

    function confirmationPopUp(result) {
  document.getElementById("modal-text").innerHTML = result;
  document.getElementById("myModal").style.display = "block";
}

window.addEventListener("click",function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
});
