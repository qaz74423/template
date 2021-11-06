import { message } from "ant-design-vue";

export function _Event() {
  const Pet = (() => {
    const pets = {
      dog(name: string) {
        message.success("For sale a dog named " + name);
      },
      cat(name: string) {
        message.success("For sale a cat named " + name);
      },
      duck(name: string) {
        message.success("For sale a duck named " + name);
      },
    };

    return class {
      constructor(type: keyof typeof pets, name: string) {
        try {
          pets[type](name);
        } catch (e) {
          message.error("no pet");
        }
      }
    };
  })();

  return {
    Pet,
  };
}
