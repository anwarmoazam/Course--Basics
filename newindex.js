let tableDOM = document.querySelector('.table');

let searchDOM = document.querySelector('.txt');
searchDOM.addEventListener('keyup',getData);

function getData(){
  for(let row of tableDOM.children[0].children[1].children){
    if(row.innerText.toUpperCase().includes(searchDOM.value.toUpperCase())){
      row.classList.remove('hide');
    } else{
      row.classList.add('hide');
    }
  }
}

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
	.then((response) => response.json())
	.then((json) => {
		let table = `<table border="1"><thead><tr>`;
		for (let i = 0; i < columns.length; i++) {
			table += `<th>${columns[i].toUpperCase()}</th>`;
		}
		table += `</tr></thead><tbody>`;
		for (let i = 0; i < json.length; i++) {
			table += `
        <tr>
          <td>${json[i].id}</td>
          <td>${json[i].name}</td>
          <td>${json[i].phone}</td>
          <td>${json[i].email}</td>
          <td>${json[i].username}</td>
          <td>${json[i].website}</td>
        </tr>`;
		}

    table += `</tbody></table>`;
		tableDOM.innerHTML = table;
	});

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => {
//   for(let i=0; i<json.length; i++){
//   // console.log(json[i]);
//   var a = Object.entries(json[i]);
//   }
//   console.log(a[0]);
// })
