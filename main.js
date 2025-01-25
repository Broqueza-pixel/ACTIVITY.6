// Transaction and Cart Management
class TransactionManager {
  constructor() {
    this.cart = [];
    this.transactionHistory = [];
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    const buyButtons = document.querySelectorAll('.btn1, .card-prices .card-icon[data-action="buy"]');
    buyButtons.forEach(button => {
      button.addEventListener('click', (e) => this.handleBuyAction(e));
    });
  }

  handleBuyAction(event) {
    event.preventDefault();

    // Determine the product details
    const productCard = event.target.closest('.product-item-inner') || event.target.closest('.about-text');
    const productName = productCard ?
      productCard.querySelector('.card-name p')?.textContent ||
      'Smart Broqueza Watch' : 'Product';

    const productPrice = productCard ?
      productCard.querySelector('.card-price-now')?.textContent ||
      '$45.00' : '$45.00';

    // Show transaction modal
    this.showTransactionModal(productName, productPrice);
  }

  showTransactionModal(productName, productPrice) {
    // Create modal dynamically
    const modal = document.createElement('div');
    modal.className = 'transaction-modal';
    modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Confirm Purchase</h2>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>You are about to purchase:</p>
                    <div class="product-details">
                        <h3>${productName}</h3>
                        <p>Price: ${productPrice}</p>
                    </div>
                    <form class="payment-form">
                        <input type="text" placeholder="Card Number" required>
                        <div class="card-details">
                            <input type="text" placeholder="MM/YY" required>
                            <input type="text" placeholder="CVV" required>
                        </div>
                        <button type="submit" class="btn1">Complete Purchase</button>
                    </form>
                </div>
            </div>
        `;

    // Add to body
    document.body.appendChild(modal);

    // Add event listeners
    const closeButton = modal.querySelector('.close-modal');
    const paymentForm = modal.querySelector('.payment-form');

    closeButton.addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.processTransaction(productName, productPrice, modal);
    });

    // Add styles
    this.addModalStyles();
  }

  addModalStyles() {
    const styles = `
        .transaction-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .transaction-modal .modal-content {
            background: white;
            padding: 30px;
            border-radius: 10px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
            margin-bottom: 20px;
        }
        .close-modal {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #A800A8;
        }
        .modal-body .product-details {
            text-align: center;
            margin-bottom: 20px;
        }
        .payment-form input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .payment-form .card-details {
            display: flex;
            gap: 10px;
        }
        .payment-form .card-details input {
            flex: 1;
        }
        `;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }

  processTransaction(productName, productPrice, modal) {
    // Simulate transaction processing
    const transactionId = this.generateTransactionId();

    // Replace modal content with success message
    modal.querySelector('.modal-content').innerHTML = `
            <div class="modal-body">
                <h2 style="color: #A800A8; text-align: center;">Transaction Successful!</h2>
                <div class="transaction-details">
                    <p><strong>Product:</strong> ${productName}</p>
                    <p><strong>Price:</strong> ${productPrice}</p>
                    <p><strong>Transaction ID:</strong> ${transactionId}</p>
                    <p>Thank you for your purchase!</p>
                </div>
                <button class="btn1 close-modal" style="width: 100%; margin-top: 20px;">Close</button>
            </div>
        `;

    // Add close functionality to new button
    const closeButton = modal.querySelector('.close-modal');
    closeButton.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }

  generateTransactionId() {
    // Generate a random transaction ID
    return `BRQZ-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }
}

// Initialize transaction manager when page loads
document.addEventListener('DOMContentLoaded', () => {
  new TransactionManager();
});

//Changing Color Product

const pic = document.querySelector("#main-watch");
const cyan = document.querySelector(".cyan");
const purple = document.querySelector(".purple");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const colors = document.querySelectorAll(".color");

const info = [
    {src: 'https://i.postimg.cc/pdrzbz2j/cyan.png'},
    {src: 'https://i.postimg.cc/tCt0D8wm/purple.png'},
    {src: 'https://i.postimg.cc/Wb7kdXzr/blue.png'},
    {src: 'https://i.postimg.cc/WbVZpQNT/pink.png'},
    {src: 'https://i.postimg.cc/5t0jYgz7/green.png'},
    {src: 'https://i.postimg.cc/VkLbnn0h/red.png'}
]

cyan.addEventListener("click", function() { pic.src = info[0].src; })
purple.addEventListener("click", function() { pic.src = info[1].src; })
blue.addEventListener("click", function() { pic.src = info[2].src; })
pink.addEventListener("click", function() { pic.src = info[3].src; })
green.addEventListener("click", function() { pic.src = info[4].src; })
red.addEventListener("click", function() { pic.src = info[5].src; })

function color(){
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));

//Sticky navbar

var navbar = document.querySelector(".navbar");
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

// Navbar Toggling

const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-btn");

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}

// Closing Menu when navlink is clicked

const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active");
}

navLink.forEach(n => n.addEventListener("click", linkAction));
navl