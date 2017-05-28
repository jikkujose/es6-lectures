const gemValueMap = require('./data/gemValueMap.js')
const aggregateGemsFromCollectors = require('./aggregateGemsFromCollectors.js')
const computeTotal = require('./computeTotal.js')

const collectors = require('./sample-data/collectors.js')

let gems = aggregateGemsFromCollectors(collectors)
let totalValue = computeTotal(
  gems,
  gemValueMap
)

console.log(gems)
console.log(totalValue)
