import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgrouncColor: "gray.100",
        color: "red.800",
      },
    },
  },
});
export default theme;
