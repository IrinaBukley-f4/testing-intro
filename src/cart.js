function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity = 1) {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new RangeError('Количество должно быть положительным целым числом');
  }

  const existing = cart.find((item) => item.id === product.id);
  const currentQuantity = existing ? existing.quantity : 0;
  const nextQuantity = currentQuantity + quantity;

  if (nextQuantity > product.stock) {
    throw new RangeError('Нельзя добавить больше товара, чем есть на складе');
  }

  if (existing) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: nextQuantity } : item
    );
  }

  return [...cart, { ...product, quantity }];
}

function changeQuantity(cart, id, quantity) {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new RangeError('Количество должно быть положительным целым числом');
  }

  const existing = cart.find((item) => item.id === id);
  if (!existing) return cart;

  if (quantity > existing.stock) {
    throw new RangeError('Нельзя указать количество больше остатка');
  }

  return cart.map((item) =>
    item.id === id ? { ...item, quantity } : item
  );
}

function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function calculateOrderTotal(cart, promoCode = '') {
  const subtotal = calculateCartSubtotal(cart);

  let discount = 0;
  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = Math.round(subtotal * 0.1);
  }

  const delivery = subtotal >= 50000 ? 0 : 30000;
  const total = subtotal - discount + delivery;

  return { subtotal, discount, delivery, total };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;