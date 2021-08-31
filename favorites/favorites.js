const fs = require('fs')
const [, , action, type, ...items] = process.argv

const addFavorites = () => {
  const favorite = items.join(' ')
  // let favorite = ''
  // for (let i = 4; i < process.argv.length; i++) {
  //   favorite += `${process.argv[i]} `
  // }

  fs.appendFile(`${type}.txt`, `${favorite}, `, err => {
    if (err) { console.log(err) }
  })
}

const viewFavorites = () => {
  fs.readFile(`${type}.txt`, 'utf8', (err, favorites) => {
    if (err) { console.log(err) }
    favorites = favorites.split(', ')
    favorites.pop()
    favorites.forEach((favorite, i) => {
      console.log(`#${i + 1}: ${favorite}`)
    })
  })
}

switch (action) {
  case 'add':
    addFavorites()
    break
  case 'view':
    viewFavorites()
    break
}

// let arr = [1,2,3]

// console.log(['a', 'b', 'c', ...arr])
