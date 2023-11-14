var ethers = require("ethers");
var url = "https://fufi.finance/rpc";
require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
var Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || url);
const abi = fs.readFileSync("./abis/referral.json", "utf-8");
const abi1 = fs.readFileSync("./abis/abi_entry.json", "utf-8");
const abi2 = fs.readFileSync("./abis/abi_Stable.json", "utf-8");
const abi3 = fs.readFileSync("./abis/abi_HRewards.json", "utf-8");
const abi4 = fs.readFileSync("./abis/Test.json", "utf-8");

const schedule = require("node-schedule");

//const job = schedule.scheduleJob("20-55 * *  * *", function () {

async function RefarraleDelete() {
  var myAddress = process.env.REFERRAL_ADDRESS;
  var privateKey = process.env.REFERRAL_PRIVATEKEY;
  var contractAddress = process.env.REFERRAL_CONTRACT_ADDRESS1;

  const abiArray = JSON.parse(abi);
  var contract = new web3.eth.Contract(abiArray, contractAddress, {
    from: myAddress,
  });
   
  var gasPriceGwei = 53;
  console.log("gasPriceGwei", gasPriceGwei);
  var gasLimit = 800000;
  console.log("gasLimit", gasLimit);

  var rawTransaction = {
    from: myAddress,
    gasPrice: web3.utils.toHex(gasPriceGwei * 1e9),
    gasLimit: web3.utils.toHex(gasLimit),
    to: contractAddress,
    value: "0x0",
    data: contract.methods.reset().encodeABI(),
  };
  console.log(
    `Raw of Transaction: \n${JSON.stringify(
      rawTransaction,
      null,
      "\t"
    )}\n------------------------`
  );
  const signPromise = web3.eth.accounts.signTransaction(
    rawTransaction,
    privateKey
  );

  signPromise
    .then((signedTx) => {
      const sentTx = web3.eth.sendSignedTransaction(
        signedTx.raw || signedTx.rawTransaction
      );
      sentTx.on("receipt", (receipt) => {
        console.log("https://fufiscan.com/tx/" + receipt.transactionHash);
        return receipt.transactionHash;
        // return resolve(receipt.transactionHash);
      });
      sentTx.on("error", (err) => {
        console.log(err);
        // return rejects(err);
      });
    })
    .catch((err) => {
      console.log(err);
      // return rejects(err);
    });

  // });
}

async function poolDelete() {
  await sleep(20000);

  var myAddress = process.env.POOL_ADDRESS;
  var privateKey = process.env.POOL_PRIVATEKEY;
  var contractAddress = process.env.CONTRACT_ADDRESS;

  const abiArray = JSON.parse(abi1);
  var contract = new web3.eth.Contract(abiArray, contractAddress, {
    from: myAddress,
  });
   
  var gasPriceGwei = 53;
  console.log("gasPriceGwei", gasPriceGwei);
  var gasLimit = 800000;
  console.log("gasLimit", gasLimit);

  var rawTransaction = {
    from: myAddress,
    gasPrice: web3.utils.toHex(gasPriceGwei * 1e9),
    gasLimit: web3.utils.toHex(gasLimit),
    to: contractAddress,
    value: "0x0",
    data: contract.methods.reset().encodeABI(),
  };
  console.log(
    `Raw of Transaction: \n${JSON.stringify(
      rawTransaction,
      null,
      "\t"
    )}\n------------------------`
  );
  const signPromise = web3.eth.accounts.signTransaction(
    rawTransaction,
    privateKey
  );

  signPromise
    .then((signedTx) => {
      const sentTx = web3.eth.sendSignedTransaction(
        signedTx.raw || signedTx.rawTransaction
      );
      sentTx.on("receipt", (receipt) => {
        console.log("https://fufiscan.com/tx/" + receipt.transactionHash);
        return receipt.transactionHash;
        // return resolve(receipt.transactionHash);
      });
      sentTx.on("error", (err) => {
        console.log(err);
        // return rejects(err);
      });
    })
    .catch((err) => {
      console.log(err);
      // return rejects(err);
    });

  // });
}

async function RewardDelete() {
  await sleep(20000);
  var myAddress = process.env.HREWARDS_ADDRESS;
  var privateKey = process.env.HREWARDS_PRIVATEKEY;
  var contractAddress = process.env.HReward;

  const abiArray = JSON.parse(abi3);
  var contract = new web3.eth.Contract(abiArray, contractAddress, {
    from: myAddress,
  });
   
  var gasPriceGwei = 53;
  console.log("gasPriceGwei", gasPriceGwei);
  var gasLimit = 800000;
  console.log("gasLimit", gasLimit);

  var rawTransaction = {
    from: myAddress,
    gasPrice: web3.utils.toHex(gasPriceGwei * 1e9),
    gasLimit: web3.utils.toHex(gasLimit),
    to: contractAddress,
    value: "0x0",
    data: contract.methods.reset().encodeABI(),
  };
  console.log(
    `Raw of Transaction: \n${JSON.stringify(
      rawTransaction,
      null,
      "\t"
    )}\n------------------------`
  );
  const signPromise = web3.eth.accounts.signTransaction(
    rawTransaction,
    privateKey
  );

  signPromise
    .then((signedTx) => {
      const sentTx = web3.eth.sendSignedTransaction(
        signedTx.raw || signedTx.rawTransaction
      );
      sentTx.on("receipt", (receipt) => {
        console.log("https://fufiscan.com/tx/" + receipt.transactionHash);
        return receipt.transactionHash;
        // return resolve(receipt.transactionHash);
      });
      sentTx.on("error", (err) => {
        console.log(err);
        // return rejects(err);
      });
    })
    .catch((err) => {
      console.log(err);
      // return rejects(err);
    });

  // });
}

async function StableDelete() {
  await sleep(20000);

  var myAddress = process.env.STABLE_ADDRESS;
  var privateKey = process.env.STABLE_PRIVATEKEY;
  var contractAddress = process.env.Hstable;

  const abiArray = JSON.parse(abi2);
  var contract = new web3.eth.Contract(abiArray, contractAddress, {
    from: myAddress,
  });
   
  var gasPriceGwei = 53;
  console.log("gasPriceGwei", gasPriceGwei);
  var gasLimit = 800000;
  console.log("gasLimit", gasLimit);

  var rawTransaction = {
    from: myAddress,
    gasPrice: web3.utils.toHex(gasPriceGwei * 1e9),
    gasLimit: web3.utils.toHex(gasLimit),
    to: contractAddress,
    value: "0x0",
    data: contract.methods.reset().encodeABI(),
  };
  console.log(
    `Raw of Transaction: \n${JSON.stringify(
      rawTransaction,
      null,
      "\t"
    )}\n------------------------`
  );
  const signPromise = web3.eth.accounts.signTransaction(
    rawTransaction,
    privateKey
  );

  signPromise
    .then((signedTx) => {
      const sentTx = web3.eth.sendSignedTransaction(
        signedTx.raw || signedTx.rawTransaction
      );
      sentTx.on("receipt", (receipt) => {
        console.log("https://fufiscan.com/tx/" + receipt.transactionHash);
        return receipt.transactionHash;
        // return resolve(receipt.transactionHash);
      });
      sentTx.on("error", (err) => {
        console.log(err);
        // return rejects(err);
      });
    })
    .catch((err) => {
      console.log(err);
      // return rejects(err);
    });

  // });
}

async function TestDelete() {
  await sleep(20000);

  var myAddress = process.env.POOL_ADDRESS;
  var privateKey = process.env.POOL_PRIVATEKEY;
  var contractAddress = process.env.TEST_CONTRACT_ADDRESS;

  const abiArray = JSON.parse(abi4);
  var contract = new web3.eth.Contract(abiArray, contractAddress, {
    from: myAddress,
  });
   
  var gasPriceGwei = 53;
  console.log("gasPriceGwei", gasPriceGwei);
  var gasLimit = 800000;
  console.log("gasLimit", gasLimit);

  var rawTransaction = {
    from: myAddress,
    gasPrice: web3.utils.toHex(gasPriceGwei * 1e9),
    gasLimit: web3.utils.toHex(gasLimit),
    to: contractAddress,
    value: "0x0",
    data: contract.methods.reset().encodeABI(),
  };
  console.log(
    `Raw of Transaction: \n${JSON.stringify(
      rawTransaction,
      null,
      "\t"
    )}\n------------------------`
  );
  const signPromise = web3.eth.accounts.signTransaction(
    rawTransaction,
    privateKey
  );

  signPromise
    .then((signedTx) => {
      const sentTx = web3.eth.sendSignedTransaction(
        signedTx.raw || signedTx.rawTransaction
      );
      sentTx.on("receipt", (receipt) => {
        console.log("https://fufiscan.com/tx/" + receipt.transactionHash);
        return receipt.transactionHash;
        // return resolve(receipt.transactionHash);
      });
      sentTx.on("error", (err) => {
        console.log(err);
        // return rejects(err);
      });
    })
    .catch((err) => {
      console.log(err);
      // return rejects(err);
    });

  // });
}

//});
//console.log(job,"The answer to life, the universe, and everything!");

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}
const sleepINTERVALE = () => {
  setInterval(() => {}, 30000);
};

async function getCurrentGasPrices() {
  let response = await axios.get(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
  };
  return prices;
}

let rule2 = new schedule.RecurrenceRule();
rule2.dayOfWeek = [0, 1, 2, 3, 4, 5, 6];
rule2.hour = 01;
rule2.minute = 50;
schedule.scheduleJob(rule2, function () {
  console.log("This runs at 3:10AM every Friday, 24 h delete.");
  RefarraleDelete().then((res) => {
      console.log("&&**", res);
   
    }).catch((err) => {
      console.log("ERRRRRRRRRR", err);
    });

    poolDelete().then((res) => {
      console.log("&&**", res);
     
    }).catch((err) => {
      console.log("ERRRRRRRRRR", err);
    });

    RewardDelete().then((res) => {
      console.log("&&**", res);
    
    }).catch((err) => {
      console.log("ERRRRRRRRRR", err);
    });

    StableDelete().then((res) => {
      console.log("&&**", res);
    }).catch((err) => {
      console.log("ERRRRRRRRRR", err);
    });
});
//  // RefarraleDelete();
// poolDelete();
// //RewardDelete();
// //StableDelete();
// //TestDelete();



module.exports = {
  RefarraleDelete,
  poolDelete,
  RewardDelete,
  StableDelete,
//  TestDelete

}
