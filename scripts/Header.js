class Header {
	selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-button]',
	};

	stateSelectors = {
		isActive: 'is-active',
		isLock: 'is-lock',
	};

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root);
		this.overlayElement = document.querySelector(this.selectors.overlay);
		this.burgerButtonElement = document.querySelector(this.selectors.burgerButton);

		console.log(this.burgerButtonElement);
	}

	onClickBurgerButton = () => {
		this.rootElement.classList.toggle(this.stateSelectors.isActive);
		this.overlayElement.classList.toggle(this.stateSelectors.isActive);
		console.log(document.documentElement);
		document.documentElement.classList.toggle(this.stateSelectors.isLock);
	};

	bindEvents() {
		this.burgerButtonElement.addEventListener('click', this.onClickBurgerButton);
	}
}

export default Header;
