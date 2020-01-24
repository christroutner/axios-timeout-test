"use strict";

const lib = require("./lib/lib");

async function runTest() {
  try {
    const data = await lib.getData();
    console.log(`data: ${JSON.stringify(data, null, 2)}`);
  } catch (err) {
    console.error(`Error: `, err);
  }
}

runTest();
