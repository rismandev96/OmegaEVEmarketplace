import { Chain } from "@thirdweb-dev/chains"; // Import the relevant module for the Chain type

// Define the Chain interface to match the expected type
interface CustomChain extends Chain {
  slug: string;
}

export const NETWORK: CustomChain = {
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
  "0xFfd9bAddF3f6e427EfAa1A4AEC99131078C1d683";
export const ETHERSCAN_URL = "https://explorer.omtch.com/";
