import App from "./App";

export default {
    title: "App",
    component: App,
}

export const Default = () => <App/>;
export const Loading = () => <App state="loading" />;
export const Error = () => <App state="error" />;