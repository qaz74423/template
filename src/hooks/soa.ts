import { inject, InjectionKey, provide } from "vue";

type Service<T> = (...arg: any) => T;

const binding = <T>(_service: Service<T>) => undefined as unknown as T;

function getServiceToken<T>(service: Service<T>): InjectionKey<T> {
  const serviceBinding: T = binding(service);
  const serviceToken: InjectionKey<typeof serviceBinding> = Symbol(
    service.name //function原型上的name
  );
  return serviceToken;
}

export function createService<T>(service: Service<T>) {
  const serviceToken: InjectionKey<T> = getServiceToken(service);

  const serviceRigister = (...args: any) => {
    const instance = service(...args);
    provide(serviceToken, instance);
    return instance;
  };

  const serviceDiscovery = () => {
    const instance = inject(serviceToken);
    if (!instance) throw Error(`[${service.name}-${serviceToken}]-服务未注册`);
    return instance;
  };

  return {
    serviceRigister,
    serviceDiscovery,
  };
}
