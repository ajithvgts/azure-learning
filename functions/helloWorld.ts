import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function helloWorld(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    return {
        status: 200,
        body: "Hello World!"
    };
}

app.http("helloWorld", {
    methods: ["GET", "POST"],
    authLevel: "anonymous",
    handler: helloWorld
});
