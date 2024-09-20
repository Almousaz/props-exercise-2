function InventoryItem({ name, type, quantity = 0, price = 0 }) {
  const lowStockThreshold = 5;
  const valueThreshold = 500;

  const totalValue = price * quantity;

  return (
    <div>
      <h3>
        {name} ({type})
      </h3>
      {quantity < lowStockThreshold && (
        <Message>
          <p>Low Stock ! {quantity} remained .</p>
        </Message>
      )}
      {totalValue > valueThreshold && (
        <Message>
          <p>High value - consider extra protection !</p>
        </Message>
      )}
    </div>
  );
}
