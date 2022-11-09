function createRow({ name, email, id }) {
	document.querySelector(".userlist").innerHTML += `                        
							  <td>${id}</td>
							  <td>${name}</td>
							  <td>${email}</td>                       
						  `;
  }
  async function getUsersData() {
	const res = await fetch("https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json");
	const userList = await res.json();
	console.log(userList);
  
	const paginationDiv = document.getElementById('paginationDiv')
	  // no of pages=>total count/no of rows in each page
  
	const noOfPages = Math.ceil(userList.length / 5);
	console.log(userList.length);
	console.log(noOfPages);
  
	for (let i = 1; i <= noOfPages; i++) {
	  var paginationButton=document.createElement("li")
	  paginationButton.innerHTML +=`<a class="page-link" href="#">${i}</a>`
	  console.log(paginationButton)
	  paginationDiv.append(paginationButton)
  
	  paginationButton.addEventListener("click", function () {
		// slice (0,10)=>0-9(length=>10) i=1
		// slice  (10,20)=>10-19(length=>10) i=2
		const pageData = userList.slice((i - 1) * 5, i * 5);
		console.log(pageData);
		document.querySelector(".userlist").innerHTML = "";
		pageData.map((element) => createRow(element));
	  });
	}
  
	const firstTenUsers = userList.slice(0, 5);
	firstTenUsers.map((element) => createRow(element));
  }
  getUsersData();