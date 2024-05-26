document.addEventListener('DOMContentLoaded', function () {
    const meals = {
        breakfast: [
            { name: 'Pancakes', price: '$5.99' },
            { name: 'Omelette', price: '$4.99' },
            { name: 'Smoothie', price: '$3.99' }
        ],
        lunch: [
            { name: 'Chicken Salad', price: '$6.99' },
            { name: 'Grilled Cheese', price: '$4.99' },
            { name: 'Sushi', price: '$8.99' }
        ],
        dinner: [
            { name: 'Spaghetti', price: '$7.99' },
            { name: 'Steak', price: '$14.99' },
            { name: 'Tofu Stir Fry', price: '$9.99' }
        ],
        desserts: [
            { name: 'Brownie', price: '$2.99' },
            { name: 'Ice Cream', price: '$3.99' },
            { name: 'Fruit Salad', price: '$4.99' }
        ],
        beverages: [
            { name: 'Coffee', price: '$1.99' },
            { name: 'Tea', price: '$1.49' },
            { name: 'Juice', price: '$2.99' }
        ]
    };

    function loadMenu() {
        for (const [category, items] of Object.entries(meals)) {
            const menu = document.getElementById('${category}-menu');
            menu.innerHTML = '';
            items.forEach(item => {
                if (category === 'breakfast') {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    const itemName = document.createElement('h4');
                    itemName.textContent = item.name;
                    const itemPrice = document.createElement('p');
                    itemPrice.textContent = item.price;
                    card.appendChild(itemName);
                    card.appendChild(itemPrice);
                    menu.appendChild(card);
                } else {
                    const li = document.createElement('li');
                    li.textContent ='${item.name} - ${item.price}';
                    menu.appendChild(li);
                }
            });
        }
    }

    loadMenu();

    const form = document.getElementById('subscription-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const subscriptionType = document.getElementById('subscription-type').value;
        alert('Subscribed to a Box of ${subscriptionType} meals!');
    });
});