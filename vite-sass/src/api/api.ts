import axios from 'axios';

export const getGreeting = async function () {
  try {
    const res = await axios.get('http://localhost:3001/api');
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
    return { errorMessage: 'Something goes wrong...' };
  }
};
