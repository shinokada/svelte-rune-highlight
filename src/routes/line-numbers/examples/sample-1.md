interface User { id: number; name: string; email?: string; active: boolean; createdAt: Date; lastLoginAt?: Date; }

class UserService {
  private users: User[] = [];

  async createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const newUser: User = { id: Date.now(), createdAt: new Date(), lastLoginAt: undefined, ...userData };
    this.users.push(newUser);
    return newUser;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id && user.active && user.name.length > 0 && user.email !== undefined);
  }
}