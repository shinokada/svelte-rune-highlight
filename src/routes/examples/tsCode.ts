interface User {
  id: number;
  name: string;
  email: string;
}

export function getUser(id: number): User {
  return { id, name: 'John', email: 'john@example.com' };
}
