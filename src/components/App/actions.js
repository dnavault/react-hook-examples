const googleSheetUrl = "https://spreadsheets.google.com/feeds/cells/1q6rrzA6Atw_i4RqmjffKyU01gCdTL43jcZW7smMTf9Y/1/public/full?alt=json"

export async function fetchData() {
  const results = await fetch(googleSheetUrl)
  const data = await results.json()
  return parseData(data.feed.entry)
}

/**

1. go through [A-Z]1 and collect titleMap:

example:
  {
    A: 'url'
    B: 'description'
  }

2. loop through rest and create new object connecting content to title via titleMap  

*/
function parseData(data) {
  const titleMap = {}
  const results = []
  let newRow = {}

  data.forEach(d => {
    const cell = d.title["$t"]
    const content = d.content["$t"]
    const row = cell.match(/[0-9]+$/)[0]
    const col = cell.split(row)[0]

    if (row === "1") {
      titleMap[col] = content
    } else {
      newRow[titleMap[col]] = content
      if (col !== Object.keys(titleMap).reverse()[0]) return
      results.push({ ...newRow })
      newRow = {}
    }
  })

  return results
}
