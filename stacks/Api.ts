import { Api as SstApi, StackContext, use } from "sst/constructs";

export const FUNCTION_PATH = "packages/api/src/functions";

export function Api({ stack }: StackContext) {
  const api = new SstApi(stack, "api", {
    defaults: {
      function: {
        runtime: "nodejs20.x",
      },
    },
    routes: {
      "GET /trpc/{proxy+}": FUNCTION_PATH + "/trpc.handler",
      "POST /trpc/{proxy+}": FUNCTION_PATH + "/trpc.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return {
    url: api.customDomainUrl || api.url,
  };
}
