import { message } from "ant-design-vue";

export const renderMessage = (type: number | MessageScenes, info: string) => {
  switch (type) {
    case 200:
    case "success":
      message.success(info);
      return true;

    case 500:
    case "error":
      message.error(info);
      return false;

    case "warning":
      message.warning(info);
      break;

    case "loading":
      return message.loading(info);

    default:
      break;
  }
};
