import { addons } from "@storybook/manager-api";
import { create, themes } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: themes.light.base,

    // logo
    brandUrl: "https://github.com/BlaxBerry333/venomous-ui-react",
    brandTitle: "Venomous UI React",
    brandImage: "band-image.png",
    brandTarget: "_blank",
  }),
});
