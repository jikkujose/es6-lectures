function computeTotal(gems, table) {
  let gemMap = Object.entries(gems)

  return gemMap.reduce((total, [name, count], index) => {
    total += count * table[name]
    return total
  }, 0)
}

module.exports = computeTotal;
