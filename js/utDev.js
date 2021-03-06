web3 = new Web3(
  new Web3.providers.WebsocketProvider(
    "wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"
  )
);
var ut_dev_id;
var house_id;
function hexToString(hex) {
  var tobeconverted = "";
  tobeconverted = parseInt(hex).toString();
  console.log(tobeconverted);
  return tobeconverted;
}
//get details
function getdetails() {
  ut_dev_id = document.getElementById("ut_dev_id").value;
  console.log(ut_dev_id);
  try {
    var myContract = new web3.eth.Contract(utdevAbi, utdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    myContract.methods
      .retrieve_ut_dev_details(ut_dev_id)
      .call(function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          var Arr = ["AC", "TV", "FR", "PC"];
          console.log(result);
          document.getElementById("r1").innerHTML = result[0];
          house_id = document.getElementById("r1").innerHTML = result[0];
          document.getElementById("r3").innerHTML = result[2];
          document.getElementById("r2").innerHTML = Arr[result[1]];
          document.getElementById("r4").innerHTML = result[3];
          document.getElementById("display-div").className = "show";
        }
      });

    document.getElementById("ut-dev-id").reset();
  } catch (err) {
    console.log(err);
  }
}
function confirmationPopUp(result) {
  document.getElementById("ut-modal-text").innerHTML = result;
  document.getElementById("ut-myModal").style.display = "block";
}
window.onclick = function (event) {
  if (event.target == document.getElementById("ut-myModal")) {
    document.getElementById("ut-myModal").style.display = "none";
  }
};

//Emit Function for Registration
var registerUtDev = web3.eth.subscribe(
  "logs",
  {
    address: utdevAddr,
    topics: [utDevTopics.reg],
  },
  function (error, result) {
    var datar=result.data;
    var ini="0x";
    var res1=ini.concat(datar.slice(2,66));
    var res2=ini.concat(datar.slice(66));
    console.log(res1); //house id
    console.log(res2); //device id
    console.log("inside if");
    if (!error) {
      try {
        var myContract = new web3.eth.Contract(hsABI, hsSC, {
          from: account,
          gasPrice: "5000000",
          gas: "3000000",
        });
        var res;
        res = result.data;
        myContract.methods
          .add_dev(res1, res2)
          .send(function (err, result) {
            if (err) {
              console.log(err);
            }
            if (result) {
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
//function to Register
function utRegister() {
  event.preventDefault();
  console.log([utDevTopics.reg]);
  console.log("Inside Register Function");

  try {
    console.log("1");
    var myContract = new web3.eth.Contract(utdevAbi, utdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });
    console.log("2");
    var house_id = document.getElementById("House-ID1").value;
    var ut_dev_type = document.getElementById("Utility Device Type").value;
    var dev_rating = document.getElementById("Device-Rating").value;

    myContract.methods
      .register_utility_device(house_id, dev_rating, ut_dev_type)
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
//Grant Access Rights
function grantAccessRights() {
  event.preventDefault();
  console.log("Inside Grant Access Right Function");

  try {
    var myContract = new web3.eth.Contract(utdevAbi, utdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    var addr = document.getElementById("Address1").value;
    myContract.methods
      .grant_access(addr, ut_dev_id)
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
    var myContract = new web3.eth.Contract(utdevAbi, utdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    var addr = document.getElementById("Address2").value;
    myContract.methods
      .remove_access(addr, ut_dev_id)
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

//Read Units Consumed
function utReadUnitsConsumed() {
  event.preventDefault();
  console.log("Inside Read Units Consumed Function");

  try {
    var myContract = new web3.eth.Contract(utdevAbi, utdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    var units_consumed = document.getElementById("Units-consumed").value;

    myContract.methods
      .read_units_consumed(ut_dev_id, units_consumed)
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
//Last Service Date
function lastServDate() {
  event.preventDefault();
  console.log("Inside Last Service Date Function");

  try {
    var myContract = new web3.eth.Contract(utdevAbi, utdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    var serviceDate = document.getElementById("Service-Date").value;
    myContract.methods
      .service_device(ut_dev_id, serviceDate)
      .send(function (err, result) {
        console.log(result);
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
