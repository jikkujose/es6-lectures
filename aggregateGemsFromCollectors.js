function aggregateGemsFromCollectors(collectors) {
  return collectors.reduce((bag, collector) => {
    collector.gems.map(gem => {
      bag[gem.gemName] += gem.totalCollected
    })

    return bag
  }, {
    "Ruby": 0,
    "Emerald": 0,
    "Moonstone": 0,
    "Diamond" : 0
  })
}

module.exports = aggregateGemsFromCollectors;
