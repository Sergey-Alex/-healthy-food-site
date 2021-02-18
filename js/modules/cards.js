function cards() {
    class MenuCard{
        constructor(src, alt, title,desc, price, parentSelector, ...classes){
            this.src = src
            this.alt = alt
            this.title = title
            this.desc = desc
            this.price = price
            this.transfer = 75
            this.classes = classes
            this.changeToRub()
            this.parent = document.querySelector(parentSelector)
        }
        changeToRub() {
            this.price = this.price*this.transfer
        }

        render(){
            const elem = document.createElement('div')
            if (this.classes.length === 0){
                this.elem = 'menu__item'
                elem.classList.add(this.elem)
            } else {
                this.classes.forEach(className => elem.classList.add(className))
            }
            elem.innerHTML = `  
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.desc}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div>`
            this.parent.append(elem)
        }

    }

    const getResources = async (url) =>{
        const  res = await fetch(url)
        if (!res.ok){
            throw new Error(`Could not fetch ${url} status ${res.status}`)
        }

        return await res.json();
    }


    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render()
            })
        })
}

export default cards;