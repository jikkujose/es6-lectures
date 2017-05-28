const gemValueMap = require('./data/gemValueMap.js')

function emptyGemBag(valueMap) {
  let table = Object.entries(valueMap)
  return table.reduce((bag, [name, _]) => {
    bag[name] = 0
    return bag
  }, {})
}

function aggregateGemsFromCollectors(collectors) {
  return collectors.reduce((bag, collector) => {
    collector.gems.map(gem => {
      bag[gem.gemName] += gem.totalCollected
    })

    return bag
  },
    emptyGemBag(gemValueMap)
  )
}

module.exports = aggregateGemsFromCollectors;
