import { message } from "ant-design-vue";
import { ref } from "vue";
import { PartternService } from "../../PartternService";
const { commenService } = PartternService();
export function FactoryService() {
  function _Event() {
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
        constructor(type: string, name: string) {
          try {
            return pets[type](name);
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
  const { code, showCode, redirect } = commenService(_Event);

  return {
    _Event,
    code,
    showCode,
    redirect,
  };
}
