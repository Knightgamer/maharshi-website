import * as easyImport from "postcss-easy-import";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    easyImport.default({ prefix: "_" }),
    autoprefixer(),
  ],
};
