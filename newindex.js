let tableDOM = document.querySelector('.table');

let searchDOM = document.querySelector('.txt');
searchDOM.addEventListener('keyup', getData);

function getData() {
	for (let row of tableDOM.children[0].children[1].children) {
		if (row.innerText.toUpperCase().includes(searchDOM.value.toUpperCase())) {
			row.classList.remove('hide');
		} else {
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

// fetch('https://jsonplaceholder.typicode.com/users')
// 	.then((response) => response.json())
// 	.then((json) => {
// 		let table = `<table align = "center" border="1"><thead><tr>`;
// 		for (let i = 0; i < columns.length; i++) {
// 			table += `<th>${columns[i].toUpperCase()}</th>`;
// 		}
// 		table += `</tr></thead><tbody>`;
// 		for (let i = 0; i < json.length; i++) {
// 			table += `
//         <tr>
//           <td>${json[i].id}</td>
//           <td>${json[i].name}</td>
//           <td>${json[i].phone}</td>
//           <td>${json[i].email}</td>
//           <td>${json[i].username}</td>
//           <td>${json[i].website}</td>
//         </tr>`;
// 		}
//     table += `</tbody></table>`;
// 		tableDOM.innerHTML = table;
// 	});

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => {
//   for(let i=0; i<json.length; i++){
//   // console.log(json[i]);
//   var a = Object.entries(json[i]);
//   }
//   console.log(a[0]);
// })

fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => response.json())
	.then((json) => {
		let table = `<table align = "center" border="1"><thead><tr>`;
		for (let i = 0; i < 2; i++) {
			for (let j = 0; j < columns.length; j++) {
				if (i === 0) {
					table += `<td><input type="" class="txtcolumn" placeholder="Search in column"></td>`;
				} else {
					table += `<th>${columns[j].toUpperCase()}</th>`;
				}
			}
			table += `</tr>`;
		}
		table += `</tr>`;
		for (let i = 0; i < columns.length; i++) {}
		table += `</thead><tbody>`;
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

		// function getColumnData(){
		//   for(let column of tableDOM.children[0].children[1].children){
		//     if(column.children[0].innerText.toUpperCase().includes(searchColumnDOM.value.toUpperCase())){
		//       column.classList.remove('hide');
		//     } else{
		//       column.classList.add('hide');
		//     }
		//   }
		// }

		let searchColumnDOM = document.getElementsByClassName('txtcolumn');
		for (let key of searchColumnDOM) {
			key.addEventListener('keyup', getColumnData);
			// console.log(key);
		}

		function getColumnData() {
			// for(let i=0; i < tableDOM.children[0].children[1].children) {
			//   if(i.children[0].innerText.includes(searchColumnDOM[i].value)){
			//     column.classList.remove('hide');
			//   } else{
			//     column.classList.add('hide');
			//   }
			// }

			// console.log(tableDOM.children[0].children[1].children);

			for (let column of tableDOM.children[0].children[1].children) {
				if (column.children[4].innerText.toUpperCase().includes(searchColumnDOM[4].value.toUpperCase())) {
					column.classList.remove('hide');
				} else {
					column.classList.add('hide');
				}
			}

			// for(let column of tableDOM.children[0].children[1].children){
			//   console.log(searchColumnDOM[0].value);
			//   for(let i=0; i < column.children.length; i++){
			//     for(let j=0; j < column.children[i].length; j++){
			//       console.log(column.children[i].innerText);

			//       if(column.children[i].innerText.includes(searchColumnDOM[i].value)){
			//         console.log("If block");
			//         column.classList.remove('hide');
			//       } else {
			//         console.log("Else block");
			//         column.classList.add('hide');
			//       }
			//     }
			//   }
			// }
		}
	});
