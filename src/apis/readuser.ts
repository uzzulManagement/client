import { AxiosInstance } from './axiosInstance';
type readuserType = {
  token: string;
  email: string;
  password: string;
};
export const readuser = async ({ token, email, password }: readuserType) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await AxiosInstance.post('/user/readuser', { email, password }, { headers });
  console.log(response);
  window.localStorage.setItem('name', response.data.user.name);
  window.localStorage.setItem('identifier', response.data.user._id);
  return response;
};
