class CureHeader extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" })
		shadow.appendChild(this.build())
		shadow.appendChild(this.style())
		this.attachEvents(shadow);
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

		//cria o ícone do menu hamburguer
		const hamburgerIcon = document.createElement("div");
		hamburgerIcon.classList.add("hamburger-icon");
		hamburgerIcon.innerHTML = `<ion-icon id="nav-icon" name="menu"></ion-icon>`;
		nav.appendChild(hamburgerIcon);

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
				suporter: "./src/pages/campaign.html",
				pharmacy: "./src/pages/pharma-form.html",
				user: "./src/pages/user-form.html",
				campaign: "./src/pages/campaign.html",
				login: "./src/pages/login.html",
				profile: "./src/pages/perfil.html"
			},
			page: {
				home: "../../index.html",
				suporter: "./campaign.html",
				pharmacy: "./pharma-form.html",
				user: "./user-form.html",
				campaign: "./campaign.html",
				login: "./login.html",
				profile: "./perfil.html"
			}
		}
		const labels = {
			suporter: "Quero ajudar!",
			pharmacy: "Farmácia parceira",
			user: "Pacientes",
			campaign: "Campanhas",
			login: "Login",
			profile: "Perfil"
		}
		const Tag = document.createElement('li')
		const Link = document.createElement('a')
		if (item === "home") {
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
			width: 100%;
			background-color: #3E8A9B;
		  }
		  
		  nav {
			display: flex;
			align-items: center;
			flex-direction: row;
			justify-content: space-between;
			margin: 0 0 0 10px;
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
		  .hamburger-icon {
			display: none; /* Oculta o ícone de menu hamburguer em telas maiores */
		}

		@media screen and (max-width: 450px) {
			ul {
				display: none;
				position: absolute;
				top: 40px; /* Ajusta a posição do menu hamburguer */
				left: 0;
				width: 90vw;
				flex-direction: column;
				justify-content: unset;
				background-color: #3E8A9B;
				z-index: 1; /* Garante que o menu hamburguer esteja acima do conteúdo da página */
			}

			ul > li {
				height: 20px !important;
				width: 100%;
				margin-top: 30px !important;
				margin-bottom: 30px !important;
			}

			.hamburger-icon {
				display: block; /* Exibe o ícone de menu hamburguer em telas menores */
				cursor: pointer;
				margin-right: 1rem;
				color: #FFFFFF !important;
			}

			.menu-itens {
				text-align: center;
				padding: 10px 0;
				width: 100%;
				height: 10px !important;
			}

			.menu-itens:hover {
				color: #073742;
				background-color: rgba(252, 250, 239, 0.5);
			}
		}

		.menu-visible {
			display: block !important;
		}
		.menu-invisible {
			display: none;
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
	// Adiciona eventos para lidar com a visibilidade do menu
	attachEvents(shadow) {
		const hamburgerIcon = shadow.querySelector(".hamburger-icon");
		const menuList = shadow.querySelector('ul');

		

		// Alterna a visibilidade do menu quando o ícone do menu hamburguer é clicado
		hamburgerIcon.addEventListener("click", () => {
			//testa se a lista do menu está visivel
			const isVisible = menuList.style.display === 'block';

			if (isVisible) {
				//se a lista estiver visivel, setamos um display none no css da lista ul
				menuList.style.display = 'none';
			} else {
				//se a lista estiver visivel, setamos um display block no css da lista ul
				menuList.style.display = 'block';
			}

		});

		// // Fecha o menu quando um item é clicado (opcional)
		menuList.addEventListener("click", () => {
			menuList.classList.remove("menu-visible");
		});
	}
}

customElements.define("cure-header", CureHeader);