export type User = {
  id: number;
  name: string;
  username: string;
};

export class UsersService {
  private createUser(apiUser: any): User {
    return {
      id: apiUser.id,
      name: apiUser.name,
      username: apiUser.username,
    } as User;
  }

  async getUserById(id: number): Promise<User> {
    const response = await fetch(`${process.env.EXTERNAL_API_URL}/users/${id}`);
    const apiUser = await response.json();
    return this.createUser(apiUser);
  }
}
