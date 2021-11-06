import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";
import Example from "./Example.vue";
const code = `interface Employee {
  id: number;
  name: string;
  supervisorId: Maybe<number>;
}

/**
 * @description 核心类
 */
export class Maybe<T> {
  private constructor(private value: T | null) {}

  static some<T>(value: T) {
    if (!value) {
      throw Error("Provided value must not be empty");
    }
    return new Maybe(value);
  }

  static none<T>() {
    return new Maybe<T>(null);
  }

  static fromValue<T>(value: T) {
    return value ? Maybe.some(value) : Maybe.none<T>();
  }

  getOrElse(defaultValue: T) {
    return this.value === null ? defaultValue : this.value;
  }

  map<R>(f: (wrapped: T) => R): Maybe<R> {
    if (this.value === null) {
      return Maybe.none();
    } else {
      return Maybe.fromValue(f(this.value));
    }
  }

  flatMap<R>(f: (wrapped: T) => Maybe<R>): Maybe<R> {
    if (this.value === null) {
      return Maybe.none<R>();
    } else {
      return f(this.value);
    }
  }
}

/**
 * @description 测试类
 */
export class EmployeeRepository {
  private employees: Employee[] = [
    { id: 1, name: "John", supervisorId: Maybe.none() },
    { id: 2, name: "Jane", supervisorId: Maybe.some(1) },
    { id: 3, name: "Joe", supervisorId: Maybe.some(2) },
  ];

  findById(id: number): Maybe<Employee> {
    const results = this.employees.filter((employee) => employee.id === id);
    return results.length ? Maybe.some(results[0]) : Maybe.none();
  }
}
`;
const monad: IPattern = {
  title: "monad",
  describe: "monad",
  _Event: () => {},
  // 重写code
  code,
  originArticle: "https://zhuanlan.zhihu.com/p/81568946",
  exampleComponent: Example,
};
export function MonadService() {
  basePanelService.serviceRigister(monad);
}
