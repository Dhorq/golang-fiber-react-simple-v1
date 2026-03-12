import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    body: {
      bg: { _light: "white", _dark: "gray.900" },
      color: { _light: "gray.900", _dark: "whiteAlpha.900" },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
