/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOps, IOpsInterface } from "./IOps";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "taskId",
        type: "bytes32",
      },
    ],
    name: "cancelTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "execAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "execData",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "enum LibDataTypes.Module[]",
            name: "modules",
            type: "uint8[]",
          },
          {
            internalType: "bytes[]",
            name: "args",
            type: "bytes[]",
          },
        ],
        internalType: "struct LibDataTypes.ModuleData",
        name: "moduleData",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
    ],
    name: "createTask",
    outputs: [
      {
        internalType: "bytes32",
        name: "taskId",
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
        name: "_execAddress",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_execSelector",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "_resolverAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_resolverData",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_feeToken",
        type: "address",
      },
    ],
    name: "createTaskNoPrepayment",
    outputs: [
      {
        internalType: "bytes32",
        name: "task",
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
        name: "taskCreator",
        type: "address",
      },
      {
        internalType: "address",
        name: "execAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "execData",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "enum LibDataTypes.Module[]",
            name: "modules",
            type: "uint8[]",
          },
          {
            internalType: "bytes[]",
            name: "args",
            type: "bytes[]",
          },
        ],
        internalType: "struct LibDataTypes.ModuleData",
        name: "moduleData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "txFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "useTaskTreasuryFunds",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "revertOnFailure",
        type: "bool",
      },
    ],
    name: "exec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gelato",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFeeDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "taskCreator",
        type: "address",
      },
    ],
    name: "getTaskIdsByUser",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum LibDataTypes.Module[]",
        name: "modules",
        type: "uint8[]",
      },
      {
        internalType: "address[]",
        name: "moduleAddresses",
        type: "address[]",
      },
    ],
    name: "setModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "taskTreasury",
    outputs: [
      {
        internalType: "contract ITaskTreasuryUpgradable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "timedTask",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "nextExec",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "interval",
            type: "uint128",
          },
        ],
        internalType: "struct IOps.Time",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IOps__factory {
  static readonly abi = _abi;
  static createInterface(): IOpsInterface {
    return new utils.Interface(_abi) as IOpsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IOps {
    return new Contract(address, _abi, signerOrProvider) as IOps;
  }
}
