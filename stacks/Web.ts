import { StackContext, StaticSite, use } from "sst/constructs";
import { Api } from "./Api";

export function Web({ stack }: StackContext) {
  const api = use(Api);

  const web = new StaticSite(stack, "site", {
    path: "packages/web",
    buildOutput: "dist",
    buildCommand: "pnpm run build",
    environment: {
      VITE_TRPC_URL: api.url + "/trpc",
    },
  });

  stack.addOutputs({
    SiteUrl: web.url,
  });
}
