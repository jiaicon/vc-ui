import { HellowWorld } from "./helloWorld";
import { ThemeWelcome } from "./themeWelcome";

const components = {
  HellowWorld,
  ThemeWelcome,
};

export default {
  install(vue) {
    Object.keys(components).forEach((key) => {
      vue.component(key, components[key]);
    });
  },
};

export { HellowWorld, ThemeWelcome };
