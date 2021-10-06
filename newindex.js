let tableDOM = document.querySelector('.table');

const columns = ['id', 'name', 'phone', 'email', 'username', 'website'];



// function renderTable() {
// 	let tableHead = `<table border = "1"><thead><tr>`;
//   // let tableData = `<tr>`  
// 	for (let i = 0; i < columns.length; i++) {
// 		tableHead += `<th>${columns[i].toUpperCase()}</th>`;
// 	}
//   tableHead += `</tr>`;
// 	tableDOM.innerHTML = tableHead;
// };

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    var tableHead = `<table border="1"><thead><tr>`;
    var tableData = ``;
    for(let i=0; i<columns.length; i++){
      tableHead += `<th>${columns[i].toUpperCase()}</th>`;
    }
    tableHead += `</tr>`
    for(let i=0; i<json.length; i++){
      tableData += `<tr><td>${json[i].id}</td><td>${json[i].name}</td><td>${json[i].phone}</td><td>${json[i].email}</td><td>${json[i].username}</td><td>${json[i].website}</td>`
    }
    tableData += `</tr>`;
    // tableDOM.innerHTML = tableData;
    // tableData += `</tr>`;
    `</tr></thead></table>`;
	tableDOM.innerHTML = tableHead + tableData;
  })
