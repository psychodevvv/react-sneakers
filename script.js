const sliderWrapper = document.querySelector('.slider-wrapper');
const dots = document.querySelectorAll('.dot');

setInterval(() => {
    sliderWrapper.classList.toggle('slide-active');

    dots.forEach(dot => {
        dot.classList.toggle('active-dot');
    });
        
}, 3500);

const sneakers = [
    {
        id: 1,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: '12 999',
        img: './assets/sneaker-1.png',
        favoriteStatus: '',
        cartStatus: ''
    },
    {
        id: 2,
        title: 'Мужские Кроссовки Nike Air Max 270',
        price: '12 999',
        img: './assets/sneaker-2.png',
        favoriteStatus: '',
        cartStatus: ''
    },
    {
        id: 3,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: '8 499',
        img: './assets/sneaker-3.png',
        favoriteStatus: '',
        cartStatus: ''
    },
    {
        id: 4,
        title: 'Кроссовки Puma X Aka Boku Future Rider',
        price: '8 999',
        img: './assets/sneaker-4.png',
        favoriteStatus: '',
        cartStatus: ''
    },
    {
        id: 5,
        title: 'Мужские Кроссовки Under Armour Curry 8',
        price: '15 199',
        img: './assets/sneaker-5.png',
        favoriteStatus: '',
        cartStatus: ''
    },
    {
        id: 6,
        title: 'Мужские Кроссовки Nike Kyrie 7',
        price: '11 299',
        img: './assets/sneaker-6.png',
        favoriteStatus: '',
        cartStatus: ''
    },
    {
        id: 7,
        title: 'Мужские Кроссовки Jordan Air Jordan 11',
        price: '10 799',
        img: './assets/sneaker-7.png',
        favoriteStatus: '',
        cartStatus: ''
    },
    {
        id: 8,
        title: 'Мужские Кроссовки Nike LeBron XVIII',
        price: '16 499',
        img: './assets/sneaker-8.png',
        favoriteStatus: '',
        cartStatus: ''
    },
    {
        id: 9,
        title: 'Мужские Кроссовки Nike LeBron XVIII Low',
        price: '13 999',
        img: './assets/sneaker-9.png',
        favoriteStatus: '',
        cartStatus: ''
    },
    {
        id: 10,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: '8 499',
        img: './assets/sneaker-10.png',
        favoriteStatus: '',
        cartStatus: ''
    },
    {
        id: 11,
        title: 'Кроссовки Puma X Aka Boku Future Rider',
        price: '8 999',
        img: './assets/sneaker-11.png',
        favoriteStatus: '',
        cartStatus: ''
    },
    {
        id: 12,
        title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
        price: '11 299',
        img: './assets/sneaker-12.png',
        favoriteStatus: '',
        cartStatus: ''
    }
]

const cards = document.querySelector('.cards')
const searchInput = document.querySelector('.search input')

function renderSneakers(list) {
    cards.innerHTML = '';

    if (list.length === 0) {
        cards.insertAdjacentHTML('beforeend', `
            <div class="not-found">Товар не найден...</div>
        `);
        return;
    }

    list.forEach((item) => {
        cards.insertAdjacentHTML('beforeend', `
            <div class="card">
                <img class="favorite-status" src="./assets/favorite-minus.svg" alt="favorite-status">
                <img src="${item.img}" alt="sneaker">
                <h1>${item.title}</h1>
                <div class="card-bottom">
                    <div class="card-info">
                        <span>ЦЕНА:</span>
                        <p>${item.price} руб.</p>
                    </div>
                    <img class="cart-status" src="./assets/cart-minus.svg" alt="cart-status">
                </div>
            </div>
        `);
    });
}

renderSneakers(sneakers);

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = sneakers.filter(item => 
        item.title.toLowerCase().includes(query)
    );
    renderSneakers(filtered);
})