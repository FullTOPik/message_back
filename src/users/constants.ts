export const userAlreadyExists = (text: 'login' | 'email' | 'phone', userData: string) =>
  `Пользователь с ${text} ${userData} уже существует`;
