class CureHeader extends HTMLElement {
  constructor() {
    super();
		const shadow = this.attachShadow({mode: "open"})
		shadow.appendChild(this.build())
		shadow.appendChild(this.style())
  }

	build() {
		
		const origin = this.getAttribute('origin')
		//cria a raiz da sub-arvore
		const rootTemplate = document.createElement('header');

		//cria a tag nav
		const nav = document.createElement('nav');
		rootTemplate.appendChild(nav);

		//cria os dois elementos principais da barra de navegação, o logo e o menu
		const ul = document.createElement('ul');
		const headerImage = document.createElement('img')
		headerImage.id = "main-logo";
		headerImage.src = origin === 'main' ? "./src/assets/images/logo.png" : "../assets/images/logo.png"
		headerImage.alt = "cure logo"
		nav.appendChild(headerImage);
		nav.appendChild(ul);
		
		//cria os itens do menu
		const options = this.getAttribute('options');
		const optionsList = options.split(",");
		
		optionsList.forEach((item) => {
			ul.appendChild(this.buildItem(item))
		})

		return rootTemplate
	}

	buildItem(item) {
		const origin = this.getAttribute("origin")
		const paths = {
			main: {
				home: "./index.html",
				suporter: "./src/pages/pagamento.html",
				pharmacy: "./src/pages/pharma-form.html",
				user: "./src/pages/user-form.html",
				campaign: "./src/pages/campaign.html",
				login: "./src/pages/login.html"
			},
			page: {
				home: "../../index.html",
				suporter: "./pagamento.html",
				pharmacy: "./pharma-form.html",
				user: "./user-form.html",
				campaign: "./campaign.html",
				login: "./login.html"
			}	
		}
		const labels = {
			suporter: "Quero ajudar!",
			pharmacy: "Farmácia parceira",
			user: "Pacientes",
			campaign: "Campanhas",
			login: "Login"
		}
		const Tag = document.createElement('li')
		const Link = document.createElement('a')
		const icon = document.createElement('i')
		if (item === "home"){
			Link.innerHTML = `<ion-icon id="nav-icon" name="home"></ion-icon>`
		 } else {
			Link.textContent = labels[item]
		 } 
		Link.href = paths[origin][item]
		Link.setAttribute('class', 'menu-itens')
		Tag.appendChild(Link);
		
		return Tag
	  }

	  style() {
		const style = document.createElement('style');
		style.textContent = `
		header {
			height: 60px;
			width: 100wh;
			background-color: #3E8A9B;
		  }
		  
		  nav {
			display: flex;
			align-items: center;
			flex-direction: row;
			justify-content: space-between;
			margin: 0 10px;
		  
			height: 100%;
		  }
		  
		  ul {
			display: flex;
			align-items: center;
			justify-content: space-around;
			width: 50%;
			height: 100%;
			list-style: none;
		  }
		  
		  li {
			height: 100%;
			
		  }
		  a {
			text-decoration-line: none;
		  }
		  #nav-icon {
			font-size: 25px
		  }
		  
		  #main-logo {
			  max-height: 40px;
		  }
		  .menu-itens {
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: center;
			color: #FCFAEF;
			transition: 0.5s;
		  }
		  
		  .menu-itens:hover {
			color: #073742;
			background-color: rgba(252, 250, 239, 0.5);
			width: 100%;
			height: 60%;
			margin: 10px 0;
			padding: 0 4px;
			border-radius: 10px;
			box-shadow: 3px 6px 15px -4px rgba(0,0,0,0.75);
		  }
		`

		return style
	  }
}

customElements.define("cure-header", CureHeader);