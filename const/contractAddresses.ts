import { Chain } from "@thirdweb-dev/chains"; // Import the relevant module for the Chain type

// Define the CustomChain interface extending the Chain type
interface CustomChain extends Chain {
  slug: string;
}

export const NETWORK: CustomChain = {
  chain: "OmegaMainNetwork", // Include the chain property
  name: "OmegaMainNetwork",
  chainId: 408,
  networkId: 408,
  rpc: ["https://mainnet-rpc.omtch.com/"],
  faucets: [],
  nativeCurrency: {
    name: "OmegaMainNetwork",
    symbol: "OMN",
    decimals: 18,
  },
  infoURL: "https://explorer.omtch.com/",
  shortName: "OMN",
  testnet: false,
  slug: "omega-main-network",
};

export const MARKETPLACE_ADDRESS = "0x9D71f10Df7387C35756aE7a3f56B178Fa42D6fAf";
export const NFT_COLLECTION_ADDRESS =
  "0x2c47544a8cDCc089E851e7BC8A6Cbfc05d96229B";
export const ETHERSCAN_URL = "https://explorer.omtch.com/";
