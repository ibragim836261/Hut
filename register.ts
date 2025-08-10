import axios from 'axios';

async function register(email: string, password: string) {
  try {
    const response = await axios.post('/register', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Некорректные почта или пароль');
  }
}

export default register;
