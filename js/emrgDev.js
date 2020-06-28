web3 = new Web3(
  new Web3.providers.WebsocketProvider(
    "wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"
  )
);

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
        //    contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
        //    instantiate and connect to contract address via Abi
        //   var myContract = new web3.eth.Contract(usABI, usSC, {from: account, gasPrice: '5000000', gas:'3000000'});
        //    //call the get function of our Issuer contract
        //    var res;
        //    res=result.data;
        //    myContract.methods.add_dev(result.data, emrgdevAddr).send(function (err, result)
        //    {
        // 	   if (err)
        // 	   {
        // 		   console.log(err);
        // 	   }
        // 	   if (result)
        // 	   {
        // 		   //display value on the webpage
        // 		   console.log(result);
        // 	   }
        //    });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(error);
    }
  }
);

//Emit function for units consumed
var unitConsumedEmrg = web3.eth.subscribe(
  "logs",
  {
    address: emrgdevAddr,
    topics: emrgDevTopics.unit,
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

    var device_id = document.getElementById("Device-ID4").value;
    var units_consumed = document.getElementById("Units-consumed").value;

    myContract.methods
      .read_units_consumed(device_id, units_consumed)
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

    var device_id = document.getElementById("Device-ID1").value;
    var addr = document.getElementById("Address1").value;
    myContract.methods
      .grant_access(addr, device_id)
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

    var device_id = document.getElementById("Device-ID2").value;
    var addr = document.getElementById("Address2").value;
    myContract.methods
      .remove_access(addr, device_id)
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

    var device_id = document.getElementById("Device-ID3").value;
    var house_id = document.getElementById("House-ID2").value;

    myContract.methods
      .emergency(house_id, device_id)
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

function confirmationPopUp(result) {
  document.getElementById("emrg-modal-text").innerHTML = result;
  document.getElementById("emrg-myModal").style.display = "block";
}
window.onclick = function (event) {
  if (event.target == document.getElementById("emrg-myModal")) {
    document.getElementById("emrg-myModal").style.display = "none";
  }
};
