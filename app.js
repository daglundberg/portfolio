var text = document.querySelector(".typed");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";
console.log(splitText);
for (let i = 0; i < splitText.length; i++)
{
	if (splitText[i] === '|')
	{
		text.innerHTML +="<br>";
	}
	else
	{
		text.innerHTML += "<span>" + splitText[i] + "</span>";
	}

}

let char = 0;
let timer = setInterval(onTick, 70);

function onTick()
{
	const span = text.querySelectorAll('span')[char];
	span.classList.add('visible');
	char++;

	if (char === splitText.length-1)
	{
		complete();
		return;
	}
}

function complete()
{
	clearInterval(timer);
	timer = null;
}

wave();
var isRotated = true;
function wave()
{
	if (isRotated)
	{
		document.getElementById("hand").style.transform="rotate(0deg)";
		isRotated = false;			
	}
	else
	{
		document.getElementById("hand").style.transform="rotate(30deg)";
		isRotated = true;			
	}

	setTimeout(wave, 1000);
}