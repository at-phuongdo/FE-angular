var $btn = document.getElementById(`js-submit`);
var $input = document.getElementById(`js-name`);
var $content = document.getElementById(`js-member`);
class Member{	
	domElement: any;	
	constructor(private name: string){		
		this.domElement = document.createElement('li');		
		this.domElement.className = 'list-group-item';		
		this.addMember();		
		this.addingButton();	
	}	
	addMember(){		
		let $span = document.createElement('span');		
		$span.innerHTML = this.name;		
		this.domElement.appendChild($span);	
	}	
	addButton(){		
		let $delBtn = document.createElement('button');		
		$delBtn.className = 'btn btn-danger btn-xs pull-right';		
		$delBtn.innerHTML = 'Delete';		
		this.domElement.appendChild($delBtn);		
		$delBtn.addEventListener('click', (event) => {			
			let $parentElement = event.target.parentNode;			
			$content.removeChild($parentElement);		
		});
	}}
	$btn.addEventListener('click', function(){	
		let name: any = $input.value;	
		let member = new Member(name);	
		$content.appendChild(member.domElement);
	});
