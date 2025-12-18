const categories = [
  {
    id: '87a59b5f-d16c-4273-be07-b51ccc0640cc',
    name: 'Burgers and Sandwiches',
    description: 'Hearty burgers and delicious sandwiches',
    display_order: 1
  },
  {
    id: '5f2e8a1d-c9b7-4e6f-a2c3-b8d4e9f1a5c7',
    name: 'Rolls',
    description: 'Delicious hand-rolled creations with flavorful fillings',
    display_order: 2
  },
  {
    id: 'ea9e5d67-f3e5-48ad-845f-e0aa29b35966',
    name: 'Snacks',
    description: 'Delicious light bites and tasty snacks',
    display_order: 3
  },
  {
    id: 'f094e4ce-b57e-4242-8732-3924c16e9b1c',
    name: 'Beverages',
    description: 'Refreshing drinks to complement your meal',
    display_order: 4
  }
];

const menuItems = [
  {
    category_id: '87a59b5f-d16c-4273-be07-b51ccc0640cc',
    name: 'Paneer Tikki Burger',
    description: 'A succulent and flavorful veggie burger featuring perfectly paneer, crisp lettuce offering a delightful culinary experience.',
    price: 149.00,
    image_url: '/paneer-burger.jpeg',
    display_order: 1
  },
  {
    category_id: '87a59b5f-d16c-4273-be07-b51ccc0640cc',
    name: 'Achari Paneer Burger',
    description: 'Burger combines succulent paneer slice, potato patty with zesty achari sauces for an unforgettable veg delight.',
    price: 149.00,
    image_url: '/achaari-paneer-burger.jpeg',
    display_order: 2
  },
  {
    category_id: '87a59b5f-d16c-4273-be07-b51ccc0640cc',
    name: 'Aloo Vada Burger',
    description: 'A mouthwatering fusion of crispy aloo vada and classic burger goodness that will leave you craving for more.',
    price: 119.00,
    image_url: '/aloo-vada-burger.jpeg',
    display_order: 3
  },
  {
    category_id: '87a59b5f-d16c-4273-be07-b51ccc0640cc',
    name: 'Veggie Burger',
    description: 'A colorful and flavorful burger bursting with fresh vegetables.',
    price: 119.00,
    image_url: '/veggie-burger.jpeg',
    display_order: 4
  },
  {
    category_id: '87a59b5f-d16c-4273-be07-b51ccc0640cc',
    name: 'Aloo Tikki Burger',
    description: 'A mouthwatering, flavorful burger with a delightful blend of spices and a delectable potato patty with sauces.',
    price: 119.00,
    image_url: '/aloo-tikki-burger.jpeg',
    display_order: 5
  },
  {
    category_id: '87a59b5f-d16c-4273-be07-b51ccc0640cc',
    name: 'Beet Root Tikki Burger',
    description: 'A delectable veggie burger featuring a flavorful beetroot tikki patty, perfect for burger enthusiasts seeking a scrumptious and satisfying twist.',
    price: 149.00,
    image_url: '/beetroot.jpeg',
    display_order: 6
  },
  {
    category_id: '87a59b5f-d16c-4273-be07-b51ccc0640cc',
    name: 'Egg and Cheese Burger',
    description: 'Savor the delectable two egg omelettes burger bursting with flavors and textures, a delightful choice for egg lovers.',
    price: 149.00,
    image_url: '/egg-cheese-burger.jpeg',
    is_veg: false,
    display_order: 7
  },
  {
    category_id: '87a59b5f-d16c-4273-be07-b51ccc0640cc',
    name: 'Chicken Salami Burger',
    description: 'A delectable non veg burger featuring succulent chicken salami.',
    price: 149.00,
    image_url: '/chicken-salami-burger.jpeg',
    is_veg: false,
    display_order: 8
  },
  {
    category_id: '87a59b5f-d16c-4273-be07-b51ccc0640cc',
    name: 'Chicken Burger',
    description: 'A delectable chicken burger topped with a luscious golden crown, promising a burst of flavors in every bite.',
    price: 169.00,
    image_url: '/chicken-burger.jpeg',
    is_veg: false,
    display_order: 9
  },
  {
    category_id: '5f2e8a1d-c9b7-4e6f-a2c3-b8d4e9f1a5c7',
    name: 'Chilli Paneer Roll',
    description: 'A scrumptious fusion of paneer and flavorsome fillings, wrapped in a warm roll for an unforgettable culinary experience.',
    price: 149.00,
    image_url: '/chilli-paneer-roll.jpeg',
    is_veg: true,
    display_order: 1
  },
  {
    category_id: '5f2e8a1d-c9b7-4e6f-a2c3-b8d4e9f1a5c7',
    name: 'Paneer Roll',
    description: 'A scrumptious fusion of paneer and flavorsome fillings, wrapped in a warm roll for an unforgettable culinary experience.',
    price: 149.00,
    image_url: '/paneer-roll_-_copy.jpeg',
    is_veg: true,
    display_order: 2
  },
  {
    category_id: '5f2e8a1d-c9b7-4e6f-a2c3-b8d4e9f1a5c7',
    name: 'Veggie Roll',
    description: 'Delight in the regal flavors of this exquisite veggie roll, a culinary masterpiece that will tantalize your taste buds.',
    price: 119.00,
    image_url: '/veggie-roll.jpeg',
    is_veg: true,
    display_order: 3
  },
  {
    category_id: '5f2e8a1d-c9b7-4e6f-a2c3-b8d4e9f1a5c7',
    name: 'Single Egg Roll',
    description: 'Homemade. Indulge in a flavorful blend of eggs and a burst of tanginess, wrapped inside a delightful crispy roll.',
    price: 109.00,
    image_url: '/single-egg-roll.jpeg',
    is_veg: false,
    display_order: 4
  },
  {
    category_id: '5f2e8a1d-c9b7-4e6f-a2c3-b8d4e9f1a5c7',
    name: 'Double Egg Roll',
    description: 'Homemade. Indulge in a flavorful blend of eggs and a burst of tanginess, wrapped inside a delightful crispy roll.',
    price: 119.00,
    image_url: '/double-egg-roll.jpeg',
    is_veg: false,
    display_order: 5
  },
  {
    category_id: '5f2e8a1d-c9b7-4e6f-a2c3-b8d4e9f1a5c7',
    name: 'Double Egg Rainbow Roll',
    description: 'The Double Egg Rainbow Roll is a tasty wrap with eggs, tomatoes, green chilies, and onions, served with green chutney.',
    price: 119.00,
    image_url: '/double-egg-roll-rainbow.jpeg',
    is_veg: false,
    display_order: 6
  },
  {
    category_id: '5f2e8a1d-c9b7-4e6f-a2c3-b8d4e9f1a5c7',
    name: 'Chicken Roll',
    description: 'Homemade. A delectable and flavorful crispy roll filled with succulent boneless chicken pieces and vegetables. Sauces also served.',
    price: 169.00,
    image_url: '/chicken_roll.jpeg',
    is_veg: false,
    display_order: 7
  },
  {
    category_id: '5f2e8a1d-c9b7-4e6f-a2c3-b8d4e9f1a5c7',
    name: 'Chicken Seekh Kebab Roll',
    description: 'Deliciously grilled chicken seekh kebab with lots of vegetables and sauces served on a crispy tawa paratha roll.',
    price: 169.00,
    image_url: '/chicken_seekh_roll.jpeg',
    is_veg: false,
    display_order: 8
  },
  {
    category_id: 'ea9e5d67-f3e5-48ad-845f-e0aa29b35966',
    name: 'Beetroot Cutlet [4 Pieces]',
    description: 'Homemade, delightful and vibrant cutlet made with ruby beetroots and potatoes. Perfect for a tasty and satisfying snack.',
    price: 149.00,
    image_url: '/beetroot-cutlet.jpeg',
    is_veg: true,
    display_order: 1
  },
  {
    category_id: 'ea9e5d67-f3e5-48ad-845f-e0aa29b35966',
    name: 'French Fries',
    description: 'Hand cut crispy, golden fries made from locally sourced potatoes.',
    price: 99.00,
    image_url: '/french-fries.jpeg',
    is_veg: true,
    display_order: 2
  },
  {
    category_id: 'ea9e5d67-f3e5-48ad-845f-e0aa29b35966',
    name: 'Garlic Bread Toast [4 Pieces]',
    description: 'Indulge in the savory delight of warm and aromatic garlic infused bread perfect for satisfying your cravings.',
    price: 89.00,
    image_url: '/garlic-bread.jpeg',
    is_veg: true,
    display_order: 3
  },
  {
    category_id: 'ea9e5d67-f3e5-48ad-845f-e0aa29b35966',
    name: 'Peri Peri French Fries',
    description: 'A savory delight of crispy French fries tossed with spicy peri peri seasoning, perfect for those who love a bold kick of flavor.',
    price: 109.00,
    image_url: '/peri-peri-fries.jpeg',
    is_veg: true,
    display_order: 4
  },
  {
    category_id: 'ea9e5d67-f3e5-48ad-845f-e0aa29b35966',
    name: 'Chicken Garlic Bread Toast [4 Pieces]',
    description: 'A savory delight of garlic infused bread topped with perfectly cooked chicken.',
    price: 119.00,
    image_url: '/chciken-garlic-bread.jpeg',
    is_veg: false,
    display_order: 5
  },
  {
    category_id: 'f094e4ce-b57e-4242-8732-3924c16e9b1c',
    name: 'Coke Soft Beverage [250 ml]',
    description: 'Refreshing Coke in a convenient 250 ml bottle',
    price: 20.00,
    image_url: '/coca-cola.jpeg',
    is_veg: true,
    display_order: 1
  },
  {
    category_id: 'f094e4ce-b57e-4242-8732-3924c16e9b1c',
    name: 'Diet Coke Soft Beverage [180 ml]',
    description: 'Zero sugar Diet Coke in a convenient 180 ml bottle',
    price: 25,
    image_url: '/diet-coke.jpeg',
    is_veg: true,
    display_order: 2
  },
  {
    category_id: 'f094e4ce-b57e-4242-8732-3924c16e9b1c',
    name: 'Fanta Soft Beverage [180 ml]',
    description: 'Refreshing Fanta in a convenient 180 ml bottle',
    price: 25.00,
    image_url: '/fanta.jpeg',
    is_veg: true,
    display_order: 3
  },
  {
    category_id: 'f094e4ce-b57e-4242-8732-3924c16e9b1c',
    name: 'Sprite Soft Beverage [180 ml]',
    description: 'Refreshing Sprite in a convenient 180 ml bottle',
    price: 25.00,
    image_url: '/sprite.jpeg',
    is_veg: true,
    display_order: 4
  }
];

function renderMenu() {
  const menuContainer = document.getElementById('menu-container');
  const loading = document.getElementById('loading');

  loading.classList.add('hidden');

  let html = '';

  categories.forEach(category => {
    const categoryItems = menuItems.filter(item => item.category_id === category.id);

    if (categoryItems.length === 0) return;

    html += `
      <div class="menu-category">
        <div class="text-center mb-8">
          <h2 class="category-title">${category.name}</h2>
          ${category.description ? `<p class="category-description">${category.description}</p>` : ''}
        </div>

        <div class="menu-grid">
          ${categoryItems.map(item => `
            <div class="menu-item">
              <div class="menu-item-image">
                ${item.image_url ?
                  `<img src="${item.image_url}" alt="${item.name}" />` :
                  ''
                }
              </div>
              <div class="menu-item-content">
                <div class="menu-item-header">
                  <div class="menu-item-name-container">
                    <div class="veg-indicator${item.is_veg === false ? ' non-veg' : ''}">
                      <div class="veg-dot${item.is_veg === false ? ' non-veg' : ''}"></div>
                    </div>
                    <h3 class="menu-item-name">${item.name}</h3>
                  </div>
                  <span class="menu-item-price">₹${Math.round(item.price)}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  if (categories.length === 0) {
    html = `
      <div class="text-center py-16">
        <h3 class="text-2xl font-semibold text-white mb-2">Menu Coming Soon</h3>
        <p class="text-amber-100">We're preparing something delicious for you!</p>
      </div>
    `;
  }

  menuContainer.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderMenu);
