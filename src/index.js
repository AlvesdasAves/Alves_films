let index = 0;

const sliderTitle = document.getElementById("sliderTitle");
const sliderDescription = document.getElementById("sliderDescription");
const mirrorDownload = document.getElementById("btn-download")
const drive = document.getElementById("btn-drive")
const container = document.getElementById("container");

const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");

const films = [
	{
		name: "O Conto Da Princesa Kaguya",
		description: "Kaguya era uma bebê que foi encontrada dentro de um tronco de bambu brilhante. Passado o tempo, ela se transforma em uma bela jovem que passa a ser cobiçada por cinco nobres, dentre eles, o próprio imperador.",
		download: "https://drive.google.com/u/0/uc?id=14HUaV0bW-NSJHh_KzWCO4AxbDYnpHMtt&export=download",
		img: "0",
	},
	{
		name: "Intocáveis",
		description: "Um milionário tetraplégico contrata um homem da periferia para ser o seu acompanhante, apesar de sua aparente falta de preparo. No entanto, a relação que antes era profissional cresce e vira uma amizade que mudará a vida dos dois.",
		download: "https://drive.google.com/u/0/uc?id=1ggn-Pxd8cM8NITOyoLgEqgUzbhT6N9bp&export=download",
		img: "1",
	},
	{
		name: "Central Do Brasil",
		description: "Dora, uma amargurada ex-professora, ganha a vida escrevendo cartas para pessoas analfabetas, que ditam o que querem contar às suas famílias. Ela embolsa o dinheiro sem sequer postar as cartas. Um dia, Josué, o filho de nove anos de idade de uma de suas clientes, acaba sozinho quando a mãe é morta em um acidente de ônibus. Ela reluta em cuidar do menino, mas se junta a ele em uma viagem pelo interior do Nordeste em busca do pai de Josué, que ele nunca conheceu.",
		download: "https://drive.google.com/u/0/uc?id=1oMG0H92f7T02EdGe_ruw3wU2hZ4HgU7o&export=download",
		img: "2",
	},
	{
		name: "Quando Voam as Cegonhas",
		description: "Em Moscou, o jovem casal Veronika (Tatyana Samoylova) e Boris (Aleksey Batalov) estão profundamente apaixonados. Com a Segunda Guerra Mundial, Boris entra no exército e é enviado para a linha da frente no dia antes do aniversário de Veronika, e eles não têm a chance de se despedir um do outro. Enquanto aguardava ter notícias de Boris, Veronika é estuprada pelo primo dele, Mark (Aleksandr Shvorin) e acabam casando. Porém, ela jamais esquece Boris e continua esperando por ele.",
		download: "https://drive.google.com/u/0/uc?id=1cv0dFO0Dl51QxkoX4GM0sTjKAyYaqHYo&export=download",
		img: "3",
	},
	{
		name: "Lanternas Vermelhas",
		description: "Na China de 1920, Songlian é uma universitária que é forçada a se casar com um homem mais velho depois que sua mãe morre e sua tia não tem mais dinheiro para custear seus estudos.",
		download: "https://drive.google.com/u/0/uc?id=0B-ldX7CySbXRaGVPTmFuREFFZGc&export=download&resourcekey=0-WhdmSZb3Zi3ntATO2v9DVg",
		img: "4",
	},
];

const limit = films.length - 1;

function updateSlider() {
  const film = films[index];
  sliderTitle.textContent = film.name;
  sliderDescription.textContent = film.description;
  mirrorDownload.href = film.download;
  container.style.backgroundImage = `url(./src/assets/img${film.img}.png)`;
}

updateSlider(); // Coloquei pra vc testar se nao der certo tira. Qnd o site abre não aparece nada nos slides por isso ativar a função aq

buttonRight.addEventListener("click", (e) => {
	index++;

	if(index > limit) {
		index = 0
	}
	console.log(index)	
	
	updateSlider()
})

buttonLeft.addEventListener("click", (e) => {
	index--;

	if(index < 0) {
		index = limit
	}
	

	console.log(index)	
	updateSlider()
})
