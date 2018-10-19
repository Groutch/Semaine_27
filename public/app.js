"use strict";

var historytab = [];
var greetings = function greetings() {
    var nameDOM = document.getElementById('input');
    var name = nameDOM.value;
    var sentence = name == "" ? "Bonjour Père Noêl !" : "Bonjour " + name + " !";
    document.getElementById('sentence').innerHTML = sentence;
    historytab.push(name);
    nameDOM.value = "";
    displayHistory(historytab);
};
var displayHistory = function displayHistory(tab) {
    var historyDOM = document.getElementById('history');
    historyDOM.innerHTML = "";
    tab.map(function (elem) {
        var e = document.createElement('li');
        e.innerHTML = "" + elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
        historyDOM.append(e);
    });
};
var search = function search() {
    var searchtab = [];
    var searchDOM = document.getElementById('inputSearch');
    if (searchDOM.value.toUpperCase() == "GROUTCH") alert("lol");
    searchtab = historytab.filter(function (elem) {
        return elem.toUpperCase().startsWith(searchDOM.value.toUpperCase());
    });
    displayHistory(searchtab);
};

var empty = function empty() {
    var btemp = document.getElementById('btempty');
    btemp.classList.toggle("fallingbt");
    setTimeout(function () {
        btemp.classList.toggle("fallingbt");
    }, 1000);
    document.getElementById('inputSearch').value = "";
    displayHistory(historytab);
};
