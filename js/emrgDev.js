web3 = new Web3(
  new Web3.providers.WebsocketProvider(
    "wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"
  )
);
var emrg_dev_id;
var house_id;
//Emit Function for Registration
var registerEmrg = web3.eth.subscribe(
  "logs",
  {
    address: emrgdevAddr,
    topics: emrgDevTopics.reg,
  },
  function (error, result) {
    console.log("inside if");
    if (!error) {
      console.log(result.data.slice(67));
      try {
           var myContract = new web3.eth.Contract(hsABI, hsSC, {from: account, gasPrice: '5000000', gas:'3000000'});
            var res;
           res=result.data;
           myContract.methods.add_dev(result.data.slice(2,67), result.data.slice(67)).send(function (err, result)
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
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(error);
    }
  }
);

//Emit function for Emergency
var Emergency = web3.eth.subscribe(
  "logs",
  {
    address: emrgdevAddr,
    topics: emrgDevTopics.emrg,
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

function hexToString(hex) {
  var tobeconverted = "";
  tobeconverted = parseInt(hex).toString();
  console.log(tobeconverted);
  return tobeconverted;
}

//function to Register
function emrgRegister() {
  event.preventDefault();
  console.log("Inside Register Function");

  try {
    console.log("1");
    var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });
    console.log("2");
    var house_id = document.getElementById("House-ID1").value;
    var emrg_dev_type = document.getElementById("Emergency Device Type").value;
    var dev_rating = document.getElementById("Device-Rating").value;

    myContract.methods
      .register_emergency_device(house_id, dev_rating, emrg_dev_type)
      .send(function (err, result) {
        console.log("3");
        if (err) {
          console.log(err);
        }
        if (result) {
          console.log(result);
          confirmationPopUp(result);
        }
      });
  } catch (err) {
    console.log(err);
  }
}

//Read Units Consumed
function emrgReadUnitsConsumed() {
  event.preventDefault();
  console.log("Inside Read Units Consumed Function");

  try {
    var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

   var units_consumed = document.getElementById("Units-consumed").value;

    myContract.methods
      .read_units_consumed(emrg_dev_id, units_consumed)
      .send(function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          console.log(result);
          confirmationPopUp(result);
        }
      });
      var smContract = new web3.eth.Contract(smart_mtr_abi, smart_mtr_sca, {
        from: account,
        gasPrice: "5000000",
        gas: "3000000",
      });
  
      smContract.methods
        .update_units(house_id, units_consumed)
        .send(function (err, result) {
          if (err) {
            console.log(err);
          }
          if (result) {
            console.log(result);
            confirmationPopUp(result);
          }
        });
        
  } catch (err) {
    console.log(err);
  }
}
//Grant Access Rights
function grantAccessRights() {
  event.preventDefault();
  console.log("Inside Grant Access Right Function");

  try {
    var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    var addr = document.getElementById("Address1").value;
    myContract.methods
      .grant_access(addr, emrg_dev_id)
      .send(function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          console.log(result);
          confirmationPopUp(result);
        }
      });
  } catch (err) {
    console.log(err);
  }
}

//Remove Access Rights
function removeAccessRights() {
  event.preventDefault();
  console.log("Inside Remove Access Right Function");

  try {
    var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    var addr = document.getElementById("Address2").value;
    myContract.methods
      .remove_access(addr, emrg_dev_id)
      .send(function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          console.log(result);
          confirmationPopUp(result);
        }
      });
  } catch (err) {
    console.log(err);
  }
}

//Detect Emergency
function detectEmergency() {
  event.preventDefault();
  console.log("Inside Detect Emergency Function");

  try {
    var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    myContract.methods
      .emergency(house_id, emrg_dev_id)
      .send(function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          console.log(result);
          confirmationPopUp(result);
        }
      });
  } catch (err) {
    console.log(err);
  }
}

//get details
function getdetails(){
  emrg_dev_id=document.getElementById("emrg-dev-id").value;
  console.log(hid);
  try 
  {
      var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {from: account, gasPrice: '5000000', gas:'3000000'});
      
      myContract.methods.retrieve_emrg_dev_details(emrg_dev_id).call(function (err, result) 
      {
          if (err) 
          { 
              console.log(err);
          }
          if (result) 
          {
              var Arr = ["FA","BA"];
              console.log(result);
              document.getElementById("r1").innerHTML=result[0];
              house_id = document.getElementById("r1").innerHTML = result[0];
              document.getElementById("r2").innerHTML=result[1];
              document.getElementById("r3").innerHTML=Arr[result[2]];
              document.getElementById("r4").innerHTML=result[3];
              document.getElementById("display-div").className ="show";

          }
      });

      document.getElementById("emrg-dev-id").reset();
  }
  catch (err) 
  {
    console.log(err);
  }

}
function confirmationPopUp(result) {
  document.getElementById("emrg-modal-text").innerHTML = result;
  document.getElementById("emrg-myModal").style.display = "block";
}
window.onclick = function (event) {
  if (event.target == document.getElementById("emrg-myModal")) {
    document.getElementById("emrg-myModal").style.display = "none";
  }
};
