// 1.Pick<Type, Keys>. Pass an existing Type and then declare the keys we wish to "pick" from the Type. 
// The keys have to exist on the Type bo able to "Pick" them, otherwise will be a TypeScript error.
export interface Credentials {
  name: string;
  email: string;
  password: string;
}

export class AuthService {
  constructor() {}

  async create({ name, email, password }: Credentials) {}

  async login({ email, password }: Pick<Credentials, "email" | "password">) {}

  async resetPassword({ email }: Pick<Credentials, "email">) {}
}

const authService = new AuthService();

authService.create({
  name: "TaTev Karapetyan",
  email: "tatevkarapetyan1291@gmail.com",
  password: "123"
});

authService.login({
  email: "tatevkarapetyan1291@gmail.com",
  password: "123"
});

authService.resetPassword({
  email: "tatevkarapetyan1291@gmail.com"
});


// 2.Omit<Type, Keys>, constructs a type by picking all properties from Type and then removing keys.
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

todo;
//const todo: TodoPreview

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo;
//const todoInfo: TodoInfo


// 3.Record<Keys, Type>, constracts an object type whose property keys are Keys and whose property values are Type. 
// This utility can be used to map the properties of a type to another type.
type Status = 'not_started' | 'progress' | 'completed' | 'failed';

const statusTypes: Record<Status, { icon: string, color: string }> = {
  not_started: { icon: 'icon-not-started', color: 'gray' },
  progress: { icon: 'icon-progress', color: 'orange' },
  completed: { icon: 'icon-completed', color: 'green' },
  failed: { icon: 'icon-failed', color: 'red' },
};

statusTypes.completed;


// 4.Partial<Type>Constructs a type with all properties of Type set to optional.
// This utility will return a type that represents all subsets of a given type.
// Using Partial with Arrays and Tuples
type PartialUser = Partial<[string, string]>;
const user: PartialUser = ["TaTev", "tatevkarapetyan1291@gmail.com"];
console.log(user);



// 5.Required<T>, make an optional property Required in TypeScript
/**
 * Make all properties in T required
 */
// type Required<T> = {
    // [P in keyof T]-?: T[P];
// };

interface Employee {
  id?: number;
  name: string;
  salary?: number;
}

interface EmployeeWithSalary extends Employee {
  salary: number; //  is now required
  id: number; //  is now required
}

const emp2: EmployeeWithSalary = {
  id: 1,
  name: 'Tatev',
  salary: 300,
};

