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


var mon_dev_sca = '0x0c9D4008DdC91409aFabaFe6b6211D83313591f1'; 



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
				"internalType": "uint256",
				"name": "ui_units",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "ui_mtr_id",
				"type": "bytes32"
			}
		],
		"name": "tot_units_con",
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

var smart_mtr_sca = '0xE35fbE2972adFdeB38B722F6AdDED28429B14Df6'; 
