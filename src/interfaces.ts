interface User {
    name: string,
    lastname: string,
    age: number,
    work: boolean
    createdAt: Date
    wallet?: UserWallet
}

interface UserWallet{
    coins?: number,
    credits?: number
}

type CreateUserInput = Omit<User, "createdAt">;

function createUser({ name, lastname, age, work, wallet }: CreateUserInput): User {
  return {
    name,
    lastname,
    age,
    work,
    createdAt: new Date(),
    wallet,
  };
}