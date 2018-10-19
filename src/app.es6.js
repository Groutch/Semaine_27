const historytab= []
const greetings = () =>{
    let nameDOM = document.getElementById('input')
    let name = nameDOM.value
    let sentence = (name=="")?"Bonjour Père Noêl !":`Bonjour ${name} !`
    document.getElementById('sentence').innerHTML=sentence
    historytab.push(name)
    nameDOM.value =""
    displayHistory(historytab)
}
const displayHistory = (tab) =>{
    let historyDOM = document.getElementById('history')
    historyDOM.innerHTML=""
    tab.map(elem=>{
        let e = document.createElement('li')
        e.innerHTML = `${elem.charAt(0).toUpperCase()}${elem.slice(1).toLowerCase()}`
        historyDOM.append(e)
    })
}
const search = () =>{
    let searchtab = []
    let searchDOM = document.getElementById('inputSearch')
    if(searchDOM.value.toUpperCase() == "GROUTCH")
        alert ("lol")
    searchtab = historytab.filter(elem => (elem.toUpperCase().startsWith(searchDOM.value.toUpperCase())))
    displayHistory(searchtab)
}

const empty = () => {
    let btemp=document.getElementById('btempty')
    btemp.classList.toggle("fallingbt")
    setTimeout(()=>{btemp.classList.toggle("fallingbt")}, 1000);
    document.getElementById('inputSearch').value =""
    displayHistory(historytab)
}