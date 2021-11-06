import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";

import Example from "./Example.vue";

const code = `class Employee {
  constructor(public name: string, public salary: number) {}
}

class Department {
  constructor(public employees: Employee[]) {}

  /**
   * @description 查找是否有
   */
  works(employee: Employee): boolean {
    return this.employees.indexOf(employee) > -1;
  }
}

type Predicate = (e: Employee) => boolean;

// 提取出的函数
function and(predicates: Predicate[]): Predicate {
  return (e) => predicates.every((p) => p(e));
}

// 提取出的函数
function average(nums: number[]): number {
  const total = nums.reduce((a, b) => a + b, 0);
  return nums.length == 0 ? 0 : total / nums.length;
}

// 提取出的函数
function employeeSalaries(
  employees: Employee[],
  conditions: Predicate[]
): number[] {
  const filtered = employees.filter(and(conditions));
  return filtered.map((e) => e.salary);
}

// 终极方案
function averageSalary(employees: Employee[], conditions: Predicate[]): number {
  return average(employeeSalaries(employees, conditions));
}

const empls: Employee[] = [
  new Employee("Jim", 100),
  new Employee("John", 200),
  new Employee("Liz", 120),
  new Employee("Penny", 30),
];

const sales = new Department([empls[0], empls[1]]);

// (function () {
//   console.log(
//     averageSalary(empls, [(e) => e.salary > 50, (e) => sales.works(e)])
//   );
//   console.log(averageSalary(empls, [(e) => e.salary > 50]));
// })();
`;

const functional: IPattern = {
  title: "函数式编程",
  describe:
    "谈到函数式编程时，我们常提到机制、方法，而不是核心原则。函数式编程不是关于 Monad、Monoid 和 Zipper 这些概念的，虽然它们确实很有用。从根本上来说，函数式编程就是关于如使用通用的可复用函数进行组合编程。",
  _Event: () => {},
  code,
  exampleComponent: Example,
  originArticle: "https://segmentfault.com/a/1190000007038278",
};
export function FunctionalService() {
  basePanelService.serviceRigister(functional);
}
