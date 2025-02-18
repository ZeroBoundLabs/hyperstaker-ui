import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "What's in it for you?",
  desc: "Predict which public goods projects should be funded. Fund them, and be rewarded for their success.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Prospectively fund projects",
      desc: "Get projects moving forward, and receive a hypercert",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Signal with your hypercerts which projects should be funded",
      desc: "The higher your conviction, the more benefit you receive.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Hypercert stakers are rewarded upon Retro payout",
      desc: "If and when someone pays for the work the project has done, you get paid.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const alloRegistryAbi = [{
  inputs: [
    { internalType: "uint256", name: "_nonce", type: "uint256" },
    { internalType: "string", name: "_name", type: "string" },
    {
      components: [
        { internalType: "uint256", name: "protocol", type: "uint256" },
        { internalType: "string", name: "pointer", type: "string" },
      ],
      internalType: "struct Metadata",
      name: "_metadata",
      type: "tuple",
    },
    { internalType: "address", name: "_owner", type: "address" },
    { internalType: "address[]", name: "_members", type: "address[]" },
  ],
  name: "createProfile",
  outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
  stateMutability: "nonpayable",
  type: "function",
}]

const alloAbi = [{
  inputs:[
    {internalType:"bytes32",name:"_profileId",type:"bytes32"},
    {internalType:"address",name:"_strategy",type:"address"},
    {internalType:"bytes",name:"_initStrategyData",type:"bytes"},
    {internalType:"address",name:"_token",type:"address"},
    {"internalType":"uint256","name":"_amount","type":"uint256"},
    {
      components:[
        {internalType:"uint256","name":"protocol","type":"uint256"},
        {internalType:"string","name":"pointer","type":"string"}
      ],
      internalType:"struct Metadata",name:"_metadata",type:"tuple"
    },
    {internalType:"address[]",name:"_managers",type:"address[]"}
  ],
  name:"createPool",
  outputs:[
    {internalType:"uint256",name:"poolId",type:"uint256"}
  ],
  stateMutability:"payable",
  type:"function"
}]

const hyperfundFactoryAbi = [{
  inputs:[
    {internalType:"uint256",name:"hypercertId",type:"uint256"},
    {internalType:"address",name:"manager",type:"address"}
  ],
  name:"createHyperfund",
  outputs:[
    {internalType:"address",name:"",type:"address"}
  ],
  stateMutability:"nonpayable",
  type:"function"
}, {
  "inputs": [{ "internalType": "uint256", "name": "hypercertId", "type": "uint256" }, { "internalType": "address", "name": "manager", "type": "address" }], "name": "createHyperstaker", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "nonpayable", "type": "function"
}]

const hyperfundAbi = [{
  type: "function",
  name: "allowlistToken",
  inputs: [
    { name: "_token", type: "address", internalType: "address" },
    { name: "_multiplier", type: "int256", internalType: "int256" },
  ],
  outputs: [],
  stateMutability: "nonpayable",
},
{
  type: "function",
  name: "donate",
  inputs: [
    { name: "_token", type: "address", internalType: "address" },
    { name: "_amount", type: "uint256", internalType: "uint256" },
  ],
  outputs: [],
  stateMutability: "payable",
}, {
  type: "function",
  name: "nonfinancialContribution",
  inputs: [
    { name: "_contributor", type: "address", internalType: "address" },
    { name: "_units", type: "uint256", internalType: "uint256" },
  ],
  outputs: [],
  stateMutability: "nonpayable",
}, {
  type: "function",
  name: "redeem",
  inputs: [
    { name: "_fractionId", type: "uint256", internalType: "uint256" },
    { name: "_token", type: "address", internalType: "address" },
  ],
  outputs: [],
  stateMutability: "nonpayable",
}, {
  type: "function",
  name: "nonfinancialContributions",
  inputs: [{ name: "contributor", type: "address", internalType: "address" }],
  outputs: [{ name: "units", type: "uint256", internalType: "uint256" }],
  stateMutability: "view",
}]

const hyperstakerAbi = [
  {
    type: "function",
    name: "setReward",
    inputs: [
      { name: "_rewardToken", type: "address", internalType: "address" },
      { name: "_rewardAmount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "stake",
    inputs: [
      { name: "_hypercertId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unstake",
    inputs: [
      { name: "_hypercertId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
]

const hypercertMinterAbi = [
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contracts = {
  [11155111]: {
    hypercertMinterContract: "0xa16DFb32Eb140a6f3F2AC68f41dAd8c7e83C4941",
    hyperstakerFactoryContract: "0xFa9525E19196285Dc69D178C9Fc9F210F9e7F718",
    alloContract: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
    directGrantsSimpleStrategy: "0x8564d522b19836b7F5B4324E7Ee8Cb41810E9F9e",
    usdc: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"
  }
}

export { benefitOne, benefitTwo, alloRegistryAbi, alloAbi, hyperfundFactoryAbi, hyperfundAbi, hypercertMinterAbi, hyperstakerAbi, contracts };
