export async function getUsers(sort = 'ACTIVITY') {
  /// Fetching sorted users general information
  const response = await fetch(
    `http://localhost:3000/api/search?length=32&sorting=${sort}`
  )
  const json = await response.json()
  const data = json.items

  // Fetching users detailed profiles
  const queryProfilesList = data.map(item => item.id).join('&ids=')
  const profilesList = await fetch(
    `http://localhost:3000/api//profiles?ids=${queryProfilesList}`
  )
  const detailedData = await profilesList.json()

  // Merging general and detailed profiles to populate the cards
  const mergedProfile = await data.map(function(item) {
    const same = detailedData.find(el => el.id === item.id)
    return { ...same, ...item }
  })

  return mergedProfile
}
