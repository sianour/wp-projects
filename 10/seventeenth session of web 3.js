let body = document.getElementById('body');
let title = document.getElementById('title');
let userId = document.getElementById('userId');
let postId = document.getElementById('id_');
	
const button = document.getElementById('button')
const jpHolder = document.getElementById('jpHolder')
const reload = document.getElementById('reload')

const row1 = document.getElementById('row1')
const action = document.getElementById('action')

let postsList = [];
let localList = [];

let editBtnFlag = false;


function submitPost(s){
	
	s.preventDefault();
	
	
	let apiCreateUrl = "https://jsonplaceholder.typicode.com/posts";
	let apiEditUrl = "https://jsonplaceholder.typicode.com/posts/"+postId.value;
	
	
	
	let post = {
			title: title.value,
			body: body.value,
			userId: Number(userId.value)
		}
		
	let content = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json',
        },
    }
	
	if(editBtnFlag){ //edit

		content.method = "PUT";
		
		fetch(apiEditUrl, content)
        .then(function (res1) {
            return res1.json()
        })
		
	}else{ //new
		
		fetch(apiCreateUrl, content)
        .then(function (res1) {
           return res1.json().then(function(nPost) {

			  localList.push(nPost); 
			   
		   });
        });
		
		jpHolder.reset();
		
	}
	
	
	editBtnFlag = false;

}


function appendPostDataToTable(posts){
	postsList = [];
	for (let b = 0; b < posts.length; b++) {
				postsList.push(posts[b]);
				
				let col0 = document.createElement('td')
				let row = document.createElement('tr')
				col0.classList.add('bg-dark', 'text-light', 'border', 'border-light')
				col0.innerText = postsList[b].id
				row.append(col0)
				
				let col = document.createElement('td')
				col.classList.add('bg-dark', 'text-light', 'border', 'border-light')
				col.innerText = postsList[b].userId
				row.append(col)
				let col2 = document.createElement('td')
				col2.classList.add('bg-secondary','text-light', 'border', 'border-light')
				col2.innerText = postsList[b].title
				row.append(col2)
				let col3 = document.createElement('td')
				col3.classList.add('bg-secondary','text-light', 'border', 'border-light')
				col3.innerText = postsList[b].body
				row.append(col3)
				//
				let col4 = document.createElement('td')
				col4.classList.add('bg-secondary','text-light', 'border', 'border-light')
				
				let deleteBtn = document.createElement('button');
				deleteBtn.classList.add('rounded-circle', 'btn', 'btn-danger');
				
				let deleteFunction = function (e) {
					fetch('https://jsonplaceholder.typicode.com/posts/1', {
						method: 'DELETE',
					}).then(function (dRes) {
						col4.parentElement.remove();
					});
				}
				deleteBtn.addEventListener('click', deleteFunction);
				
				let trashIcon = document.createElement('i');
				trashIcon.classList.add('fas', 'fa-trash-alt');
				deleteBtn.append(trashIcon);
				col4.append(deleteBtn);
				
				
				let editBtn = document.createElement('button');
				editBtn.classList.add('rounded-circle', 'btn', 'btn-info');
				
				let editFunction = function (e) {
					e.preventDefault()
					userId.value = col.innerText;
					title.value = col2.innerText;
					body.value = col3.innerText;
					editBtnFlag = true;
					postId.value = col0.innerText;
				}
				editBtn.addEventListener('click', editFunction);
				
				let editIcon = document.createElement('i');
				editIcon.classList.add('fas', 'fa-edit');
				editBtn.append(editIcon);
				col4.append(editBtn);
				
				row.append(col4)
				row1.append(row)
			}
	
	
}



function getPosts(localAppend){
	
	
	fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
		
		return response.json().then(function(posts) {
			
			postsList = [];
			
			if(localAppend == true){
				
				for (var b = 0; b < localList.length; b++) {
					postsList.unshift(localList[b]);
				
				}
				
			
				
			}
			
			for (var b = 0; b < posts.length; b++) {
				postsList.push(posts[b]);
				
			}
			

			appendPostDataToTable(postsList);
			
			 
		
				

		});

    });
	
	
}

function reloadPosts(){
	document.getElementById("row1").innerHTML = '';
	getPosts(true);
}





getPosts(false);
button.addEventListener('click', submitPost);
reload.addEventListener('click', reloadPosts);