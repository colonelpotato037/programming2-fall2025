let counter = 0;

function mode() {

	if (counter % 2 == 0) {
		document.body.style.color = "white";
		document.body.style.backgroundColor = "MidnightBlue"
		document.getElementById("navbar").style.color = "white";
		document.getElementById("navbar").style.backgroundColor = "MidnightBlue";


		let links = document.getElementsByClassName("link")

		for (const item of links){
			item.style.color = "white";
		}
		let sections = document.getElementsByTagName('section')

		for (const item of sections){
			item.style.color = "white";
			item.style.backgroundColor = "MidnightBlue";
		}

		let cards = document.getElementsByClassName("card")
		for (const item of cards){
			item.style.color = "white";
			item.style.backgroundColor = "MidnightBlue";
		}

		let test_cards = document.getElementsByClassName("testimonial-card")
		for (const item of test_cards){
			item.style.color = "white";
			item.style.backgroundColor = "MidnightBlue";
		}

		document.getElementById("footer").style.color = "white";
		document.getElementById("footer").style.backgroundColor = "MidnightBlue";

		document.getElementById("mode").innerText = "light";
		counter = counter + 1;

	} else{
		document.getElementById("mode").innerText = "dark 🌙"
		counter = counter + 1;

				document.body.style.color = "black";
		document.body.style.backgroundColor = "white"
		document.getElementById("navbar").style.color = "black";
		document.getElementById("navbar").style.backgroundColor = "white";


		let links = document.getElementsByClassName("link")

		for (const item of links){
			item.style.color = "black";
		}
		let sections = document.getElementsByTagName('section')

		for (const item of sections){
			item.style.color = "black";
			item.style.backgroundColor = "white";
		}

		let cards = document.getElementsByClassName("card")
		for (const item of cards){
			item.style.color = "black";
			item.style.backgroundColor = "white";
		}

		let test_cards = document.getElementsByClassName("testimonial-card")
		for (const item of test_cards){
			item.style.color = "black";
			item.style.backgroundColor = "white";
		}

		document.getElementById("footer").style.color = "black";
		document.getElementById("footer").style.backgroundColor = "white";


	} 
}