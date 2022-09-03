// nested loop concept chess board

let table=document.getElementById("table");
let tbody=document.getElementById("tbody");

for(let i=0 ;i <= 8 ;i++){

	if(i % 2 != 0){

	let tr=document.createElement("tr");
	


	for(let j=0 ; j <= 8 ; j++){	

		if(j % 2 !=0){

		let td=document.createElement("td");
		td.classList.add("white");
		tr.appendChild(td);

		}else{
			let td=document.createElement("td");
			td.classList.add("black");
			tr.appendChild(td);
		}

	
		tbody.appendChild(tr);

	}

	}else{

	let tr=document.createElement("tr");
	

	for(let j=0 ; j <= 8 ; j++){

		if(j % 2 !=0){

		let td=document.createElement("td");
		td.classList.add("black");
		tr.appendChild(td);

		}else{
			let td=document.createElement("td");
			td.classList.add("white");
			tr.appendChild(td);
		}

	}
	tbody.appendChild(tr);

	}
	
}

// End Chess Board



