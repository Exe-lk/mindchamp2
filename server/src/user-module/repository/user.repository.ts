export interface UserRepository {
  getAllUsers(): Promise<Array<any>>;
  getUserByUsernameAndPassword(
    username: string,
    password: string,
  ): Promise<any>;
}
