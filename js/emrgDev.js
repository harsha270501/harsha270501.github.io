var account;

var emrgdevAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "house_id",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "emrg_dev_id",
				"type": "bytes32"
			}
		],
		"name": "alert_emergency",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "emit_Units_Consumed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "house_id",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "emrg_dev_id",
				"type": "bytes32"
			}
		],
		"name": "registered_emrg_dev",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_house_id",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "ui_emrg_dev_id",
				"type": "bytes32"
			}
		],
		"name": "emergency",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ui_access_id",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "ui_emrg_dev_id",
				"type": "bytes32"
			}
		],
		"name": "grant_access",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_emrg_dev_id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "ui_emrg_units_con",
				"type": "uint256"
			}
		],
		"name": "read_units_consumed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_house_id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "ui_emrg_dev_rating",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_emrg_dev_type",
				"type": "string"
			}
		],
		"name": "register_emergency_device",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ui_access_id",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "ui_emrg_dev_id",
				"type": "bytes32"
			}
		],
		"name": "remove_access",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_emrg_dev_id",
				"type": "bytes32"
			}
		],
		"name": "retrieve_emrg_dev_details",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "enum Emergency_Device.DEVTYPES",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_emrg_dev_id",
				"type": "bytes32"
			}
		],
		"name": "retrieve_mapping",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
var emrgdevAddr = "0xA04c18b9cfE3495eF4066517Dc3500d0d8f7B028";
// topics= [
// 	"0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",
// 	"0x0000000000000000000000000000000000000000000000000000000000001010",
// 	"0x00000000000000000000000097638f3eb797861cf0b30ed4733e25c64e6459f8",
// 	"0x000000000000000000000000f56cee1f4164f875f4cc7023361a6ec929999aae"
// ]

window.addEventListener("load", async () => {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is Available :) !");
  }

  // Modern DApp browsers
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);

    // To prevent the page reloading when the MetaMask network changes
    ethereum.autoRefreshOnNetworkChange = false;

    // To Capture the account details from MetaMask
    const accounts = await ethereum.enable();
    account = accounts[0];
  }
  // Legacy DApp browsers
  else if (window.web3) {
    //window.web3 = new Web3(web3.currentProvider);
    window.web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://ropsten.infura.io/v3/cbd9dc11b30147e9a2cc974be655ef7c"
      )
    );
  }
  // Non-DApp browsers
  else {
    console.log("Non-Ethereum browser detected. Please install MetaMask");
  }
});

web3 = new Web3(
  new Web3.providers.WebsocketProvider(
    "wss://ropsten.infura.io/ws/v3/cbd9dc11b30147e9a2cc974be655ef7c"
  )
);
tps = [
	"0x91d7dc9651593afc25ee0f6012ad44246c8774061126a5003ddb70f38502cba0",
	"0x9ff4d64aa877498c19c687f36af1d0ca03ea8857054d4e87b74bd59c971cba20",
	"0x81a398a552d2b57303f587ca935e666a2362dbbdab6714a9707b3e267f70ae44",
  ];
var subscription = new web3.eth.subscribe(
  "logs",
  {
    address: emrgdevAddr,
    topics: tps,
  },
  function (error, result) {
    console.log("inside if");
    if (!error) {
	  console.log(hexToString(result.data));
	  document.getElementById("result").innerHTML=hexToString(result.data);
    } else {
      console.log(error);
    }
  }
);

				

var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {
  from: account,
  gasPrice: "5000000",
  gas: "3000000",
});

// myContract.events
//   .registered_emrg_dev(
//     {
//       filter: {}, // Using an array means OR: e.g. 20 or 23
//       fromBlock: 0,
//     },
//     function (error, event) {
//       console.log(event);
//     }
//   )
//   .on("data", function (event) {
//     console.log(event); // same results as the optional callback above
//   })
//   .on("changed", function (event) {
//     // remove event from local database
//   })
//   .on("error", console.error);

function hexToString(hex) {
  var tobeconverted = "";
  tobeconverted = parseInt(hex).toString();
  console.log(tobeconverted);
  return tobeconverted;
}

//function to Register
function emrgRegister() {
  console.log("Inside Register Function");

  try {
    // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
    //instantiate and connect to contract address via Abi
    console.log("1");
    var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });
    console.log("2");
    //call the get function of User contract
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
          //display value on the webpage
          console.log(result);
          //document.getElementById("Device-Rating").value = result;
        }
      });
  } catch (err) {
    console.log(err);
  }
}

//Read Units Consumed
function emrgReadUnitsConsumed() {
  console.log("Inside Read Units Consumed Function");

  try {
    // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
    //instantiate and connect to contract address via Abi
    var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    //call the get function of User contract
    var device_id = document.getElementById("Device-ID4").value;
    var units_consumed = document.getElementById("Units-consumed").value;

    myContract.methods
      .read_units_consumed(device_id, units_consumed)
      .send(function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          //display value on the webpage
          console.log(result);
        }
      });


  } catch (err) {
    console.log(err);
  }
}
//Grant Access Rights
function grantAccessRights() {
  console.log("Inside Grant Access Right Function");

  try {
    // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
    //instantiate and connect to contract address via Abi
    var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    //call the get function of User contract
    var device_id = document.getElementById("Device-ID1").value;
    var addr = document.getElementById("Address1").value;
    myContract.methods
      .grant_access(addr, device_id)
      .send(function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          //display value on the webpage
          console.log(result);
        }
      });
  } catch (err) {
    console.log(err);
  }
}

//Remove Access Rights
function removeAccessRights() {
  console.log("Inside Remove Access Right Function");

  try {
    // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
    //instantiate and connect to contract address via Abi
    var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    //call the get function of User contract
    var device_id = document.getElementById("Device-ID2").value;
    var addr = document.getElementById("Address2").value;
    myContract.methods
      .remove_access(addr, device_id)
      .send(function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          //display value on the webpage
          console.log(result);
        }
      });
  } catch (err) {
    console.log(err);
  }
}

//Detect Emergency
function detectEmergency() {
  console.log("Inside Detect Emergency Function");

  try {
    // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
    //instantiate and connect to contract address via Abi
    var myContract = new web3.eth.Contract(emrgdevAbi, emrgdevAddr, {
      from: account,
      gasPrice: "5000000",
      gas: "3000000",
    });

    //call the get function of User contract
    var device_id = document.getElementById("Device-ID3").value;
    var house_id = document.getElementById("House-ID2").value;

    myContract.methods
      .emergency(house_id, device_id)
      .send(function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          //display value on the webpage
          console.log(result);
        }
      });
  } catch (err) {
    console.log(err);
  }
}
