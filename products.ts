async function addProduct(standoffId: number, name: string, price: number) {
  try {
    const response = await axios.post('/products', { standoffId, name, price });
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при добавлении товара');
  }
}

export default addProduct;
