
var hsSC="0x6f78992f89FC4640B465de5bBA0bfd13559d64e3";
var hsABI=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "addhouse",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "emrguser",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
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
		"name": "monitdev",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "ui_dev_id",
				"type": "bytes32"
			}
		],
		"name": "add_dev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "house_ID",
				"type": "bytes32"
			}
		],
		"name": "burnMyToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "val",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "calc_eco_factor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "new_occ",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "new_occ_add",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "house_id",
				"type": "bytes32"
			}
		],
		"name": "change_curr_occ",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "new_owner",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "new_owner_add",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "house_id",
				"type": "bytes32"
			}
		],
		"name": "change_house_own",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hid",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "dev_id",
				"type": "bytes32"
			}
		],
		"name": "emerg_dev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ui_house_loc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_house_own_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_curr_occ",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "ui_curr_occ_add",
				"type": "address"
			}
		],
		"name": "home_register",
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
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "mintMyToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hid",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "dev_id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "val",
				"type": "uint256"
			}
		],
		"name": "monit_dev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "pay_rent",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "ui_house_rent",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ui_date",
				"type": "uint256"
			}
		],
		"name": "set_rent",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
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
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "dev_ret_curr_occ_addr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "dev_ret_home_det",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "dev_ret_house_own_addr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
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
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
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
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


var usSC="0xaCd72282CB9D42EAdb07Cf030f45B586425740Fc";

var usABI=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "changeOwner",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "a",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "house_id",
				"type": "bytes32"
			}
		],
		"name": "add_house",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dev_ret_user",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
				"name": "hid",
				"type": "bytes32"
			}
		],
		"name": "isHouseExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "house_id",
				"type": "bytes32"
			}
		],
		"name": "transfer_house",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ui_user_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_user_phno",
				"type": "uint256"
			}
		],
		"name": "user_register",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

var sdSC="0x4B2c943a533936654A2599bF7bf4a80f3b32f5eD";

var sdABI=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "a",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "addsecdev",
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
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "a",
				"type": "address"
			}
		],
		"name": "add_acc_rights",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "dev_ret_sec",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "enum securitydevices.STYPES",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "grant_perm",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "a",
				"type": "address"
			}
		],
		"name": "rem_acc_rights",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_sec_house_id",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "ui_sec_key",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "ui_sec_type",
				"type": "string"
			}
		],
		"name": "sec_dev_reg",
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
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "units",
				"type": "uint256"
			}
		],
		"name": "units_Consumed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
var emrgdevAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "house_id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "emrg_dev_id",
        type: "bytes32",
      },
    ],
    name: "alert_emergency",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "emit_Units_Consumed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "house_id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "emrg_dev_id",
        type: "bytes32",
      },
    ],
    name: "registered_emrg_dev",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ui_house_id",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "ui_emrg_dev_id",
        type: "bytes32",
      },
    ],
    name: "emergency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ui_access_id",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "ui_emrg_dev_id",
        type: "bytes32",
      },
    ],
    name: "grant_access",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ui_emrg_dev_id",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "ui_emrg_units_con",
        type: "uint256",
      },
    ],
    name: "read_units_consumed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ui_house_id",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "ui_emrg_dev_rating",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "ui_emrg_dev_type",
        type: "string",
      },
    ],
    name: "register_emergency_device",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ui_access_id",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "ui_emrg_dev_id",
        type: "bytes32",
      },
    ],
    name: "remove_access",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ui_emrg_dev_id",
        type: "bytes32",
      },
    ],
    name: "retrieve_emrg_dev_details",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "enum Emergency_Device.DEVTYPES",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ui_emrg_dev_id",
        type: "bytes32",
      },
    ],
    name: "retrieve_mapping",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

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
];
var emrgdevAddr = "0xc27D64D685029eC569c88062Eb647fE80A7cd547";

var emrgDevTopics = {reg:"0x91d7dc9651593afc25ee0f6012ad44246c8774061126a5003ddb70f38502cba0",
					emrg:"0x81a398a552d2b57303f587ca935e666a2362dbbdab6714a9707b3e267f70ae44"}
var utdevAbi = [
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
				"name": "ut_dev_id",
				"type": "bytes32"
			}
		],
		"name": "registered_ut_dev",
		"type": "event"
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
				"name": "ui_ut_dev_id",
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
				"name": "ui_ut_dev_id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "ui_ut_units_con",
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
				"name": "ui_ut_dev_rating",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_ut_dev_type",
				"type": "string"
			}
		],
		"name": "register_utility_device",
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
				"name": "ui_ut_dev_id",
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
				"name": "ui_ut_dev_id",
				"type": "bytes32"
			}
		],
		"name": "retrieve_ut_dev_details",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "enum Utility_Device.DEVTYPES",
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
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_ut_dev_id",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "ui_ut_last_ser_date",
				"type": "string"
			}
		],
		"name": "service_device",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
var utdevAddr = "0x706f133739af16B29bf1Dd7a9A42D01aB6581e1a";

var utDevTopics = {
  reg:"0xc752657b29309768e63435e256a3b089013dff5bb8c2e161796401cffa9b4d46",
};

var mon_dev_abi=

[
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
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "add_mon_dev",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "value_caution",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "a",
				"type": "address"
			}
		],
		"name": "add_acc_rights",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_dev_id",
				"type": "bytes32"
			}
		],
		"name": "emerg",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_mon_dev_id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "ui_mon_units_con",
				"type": "uint256"
			}
		],
		"name": "mon_read_units_consumed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_mon_dev_id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "ui_value",
				"type": "uint256"
			}
		],
		"name": "mon_update_value",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ui_mon_type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_mon_dev_rating",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "ui_home_id",
				"type": "bytes32"
			}
		],
		"name": "reg_mon_dev",
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
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "a",
				"type": "address"
			}
		],
		"name": "rem_acc_rights",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_mon_dev_id",
				"type": "bytes32"
			}
		],
		"name": "retrieve_mon_dev_details",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "enum Monitoring_devices.MDTYPES",
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
var mon_dev_sca = '0xEE4603EA3f372026e00Ba691d0957c23BF492d48'; 



var smart_mtr_abi=

[
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
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "add_sm_mtr",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "give_tokens",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "a",
				"type": "address"
			}
		],
		"name": "add_acc_rights",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_mtr_id",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "ui_mtr_last_reading",
				"type": "string"
			}
		],
		"name": "mtr_last_reading_taken",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ui_mtr_type",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "ui_home_id",
				"type": "bytes32"
			}
		],
		"name": "reg_meter",
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
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "a",
				"type": "address"
			}
		],
		"name": "rem_acc_rights",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_mtr_id",
				"type": "bytes32"
			}
		],
		"name": "retrieve_mtr_dev_details",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "enum Smart_Meter.MTYPES",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ui_mtr_id",
				"type": "bytes32"
			}
		],
		"name": "tot_units_con",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
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
				"name": "units",
				"type": "uint256"
			}
		],
		"name": "update_units",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

var smart_mtr_sca = '0xBefd306b8d2a581c1D5F0B4156dDE66729C49a3E'; 

