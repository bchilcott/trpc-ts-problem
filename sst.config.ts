import { SSTConfig } from "sst";
import { Api } from "./stacks/Api";
import { Web } from "./stacks/Web";

export default {
  config(_input) {
    return {
      name: "trpc-issue",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(Api).stack(Web);
  },
} satisfies SSTConfig;
