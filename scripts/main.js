var rock = document.querySelector(".rock"),
		paper = document.querySelector(".paper"),
		scissors = document.querySelector(".scissors"),
		container = document.querySelector(".container"),
		restartButton = document.querySelector(".restartButton"),
		resultContainer = document.querySelector(".resultContainer"),
		choicePlayer = 0,
		choiceComputer = 0,
		computerScoreStorage = document.querySelector(".computerScoreStorage"),
		playerScoreStorage = document.querySelector(".playerScoreStorage"),
		scorePlayer = 0,
		scoreComputer = 0,
		opponentExist = false,
		result = "",
		username = "Username",
		changeUsername = document.querySelector(".changeUsername"); 

setInterval(function() {
	computerScoreStorage.innerHTML = scoreComputer + "<br/> Computer"; 
	playerScoreStorage.innerHTML = scorePlayer + "<br/>" +  username; 
},2000); 

function playerClick(choice) {
	choicePlayer = parseInt(choice); 
	if(opponentExist == false) {
		choiceComputer = Math.floor(Math.random()*3)+1;
		createOpponent(choiceComputer); 
	}
	restartButton.style.opacity = "1"; 

	switch(choicePlayer) {
		case 1 :
			switch(choiceComputer) {
				case 1 :  
					result = "tie"; 
					break; 
				case 2 : 
					result = "loss"; 
					break; 
				case 3 : 
					result = "win"; 
					break; 
			}
			paper.style.opacity = "0"; 
			scissors.style.opacity = "0"; 
			setTimeout(function() {
				paper.style.display = "none"; 
				scissors.style.display = "none"; 
			},400);
			setTimeout(function() {
				rock.style.left = "550px"; 
			},500);
			break;
		case 2 :
			switch(choiceComputer) {
				case 1 :  
					result = "win"; 
					break; 
				case 2 : 
					result = "tie"; 
					break; 
				case 3 : 
					result = "loss"; 
					break; 
			}
			rock.style.opacity = "0"; 
			scissors.style.opacity = "0"; 
			setTimeout(function() {
				rock.style.display = "none"; 
				scissors.style.display = "none"; 
			},400); 
			setTimeout(function() {
				paper.style.left = "550px"; 
			},500);
			break; 
		case 3 :
			switch(choiceComputer) {
				case 1 :  
					result = "loss"; 
					break; 
				case 2 : 
					result = "win"; 
					break; 
				case 3 : 
					result = "tie"; 
					break; 
			}
			rock.style.opacity = "0"; 
			paper.style.opacity = "0"; 
			setTimeout(function() {
				rock.style.display = "none"; 
				paper.style.display = "none"; 
			},400); 
			setTimeout(function() {
				scissors.style.left = "550px"; 
			},500);
			break; 
	}

	switch(result) {
		case "tie" : 
			resultContainer.innerHTML = "TIE"; 
			break; 
		case "loss" : 
			resultContainer.innerHTML = "LOSS";
			scoreComputer++; 
			break;
		case "win" : 
			resultContainer.innerHTML = "WIN";
			scorePlayer++; 
			break;
	}
	setTimeout(function() {
		resultContainer.style.opacity = "1";
	},700);

}

function createOpponent(choice) {
	opponentExist = true; 
	opponent = document.createElement("div"); 
	opponent.classList.add("choices"); 
	opponent.style.right = "150px"; 
	container.appendChild(opponent); 
	
	computerImg = document.createElement("img");
	opponent.appendChild(computerImg);
	
	switch(choice) {
		case 1 : 
			computerImg.setAttribute("src","images/rock.png"); 
			break; 
		case 2 : 
			computerImg.setAttribute("src","images/paper.png"); 
			break; 
		case 3 : 
			computerImg.setAttribute("src","images/scissors.png"); 
			break; 
	} 
	setTimeout(function() {
		opponent.style.opacity = "1"; 
	},500)
	setTimeout(function() {
		opponent.style.right = "550px"; 
	},600); 
}


restartButton.addEventListener(
	'click',
	function(event) {
		event.preventDefault(); 
		choicePlayer = 0;
		choiceComputer = 0; 

		resultContainer.style.opacity = "0";
		restartButton.style.opacity = "0";

		rock.style.left = "150px";
		paper.style.left = "300px";
		scissors.style.left = "450px";

		setTimeout(function() {
			rock.style.display = "block";
			paper.style.display = "block";
			scissors.style.display = "block";
		},300)

		setTimeout(function() {
			rock.style.opacity = "1";
			paper.style.opacity = "1";
			scissors.style.opacity = "1";
		},400)

		if(opponentExist == true) {
			opponentExist = false;
			opponent.style.right = "150px"; 
			opponent.style.opacity = "0"; 
			setTimeout(function() {
				container.removeChild(opponent); 
			},500)
		}
	},
	false
); 

changeUsername.addEventListener(
	'click',
	function(event) {
		event.preventDefault(); 
		username = window.prompt("Définir un nouveau pseudo"); 
	}
)
