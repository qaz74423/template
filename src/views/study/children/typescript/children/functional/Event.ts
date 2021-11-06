class Employee {
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
