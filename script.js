document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('invoice-form');
    const itemsContainer = document.querySelector('.items-container');
    const addItemButton = document.getElementById('add-item');
    const totalAmount = document.getElementById('total-amount');
  
    const updateTotal = () => {
      let total = 0;
      document.querySelectorAll('.item-row').forEach(row => {
        const quantity = row.querySelector('.item-quantity').value;
        const price = row.querySelector('.item-price').value;
        total += quantity * price;
      });
      totalAmount.textContent = total.toFixed(2);
    };
  
    addItemButton.addEventListener('click', () => {
      const itemRow = document.createElement('div');
      itemRow.classList.add('item-row');
      itemRow.innerHTML = `
        <input type="text" class="item-description" placeholder="Item Description" required>
        <input type="number" class="item-quantity" placeholder="Quantity" required>
        <input type="number" class="item-price" placeholder="Price" required>
        <button type="button" class="remove-item">Remove</button>
      `;
      itemsContainer.appendChild(itemRow);
  
      itemRow.querySelector('.item-quantity').addEventListener('input', updateTotal);
      itemRow.querySelector('.item-price').addEventListener('input', updateTotal);
      itemRow.querySelector('.remove-item').addEventListener('click', () => {
        itemRow.remove();
        updateTotal();
      });
  
      updateTotal();
    });
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Invoice generated!');
      // You can add further functionality here to save or send the invoice
    });
  
    // Initial event listeners for the first item row
    document.querySelector('.item-quantity').addEventListener('input', updateTotal);
    document.querySelector('.item-price').addEventListener('input', updateTotal);
    document.querySelector('.remove-item').addEventListener('click', (e) => {
      e.target.parentElement.remove();
      updateTotal();
    });
  
    updateTotal();
  });