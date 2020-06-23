var fs = require('fs');


async function copyCat(){
	
		await fs.copyFileSync('words.txt', 'clone1.txt');
		console.log("Your document was sucessfully copied");
	
	
	



	};


	copyCat();