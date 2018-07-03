let service = axios.create({
  baseURL: "https://raw.githubusercontent.com/mc100s/module-3-react/master/labs/lab-axios-functional-programming/" 
})

function displayDataInTheConsole(page) {
  return service.get(`result-${page}.json`)
  .then(response => {
    console.log('response.data ==> ', response.data);
  })
}

function getTotalResults(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 1
    // Update that function so it only displays the value of "total_results" (18966)
    return response.data.total_results; // You should write it "response.data.something"
  })
}

function getFirstResultName(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 2
    // Update that function so it only displays the name of the first actor
    return response.data.results[0].name;
  })
}

function getNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 3
    const names = response.data.results.map(names => names.name);
    return names;
  })
}

function getIdsAndNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 4
    return response.data.results.map(x => `#${x.id} ${x.name}`);
  })
}

function getSortedNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 
    return response.data.results
      .map(names => names.name)
      .sort()
  })
}

function getNamesFiltered(page, searchTerm) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 6
    return response.data.results.map(names=>names.name).filter(name=>{
      return name.toUpperCase().includes (searchTerm.toUpperCase())
    })
    sort((a,b)=>{
      return a.length-b.length;
    })
  })
}


function getActorNamesWithTheirKnownForMovies(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 7
    return response.data.results
      .map(z => {
        let titles = z.known_for.map(movie => movie.title)
        return z.name + " ("+titles.join(", ")+")"
    })
  })
}