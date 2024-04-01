import App from "./App";
import { urlBase, urlTags } from "./utils/apiVariables";

export default {
    title: "App",
    component: App,
}

export const Default = () => <App/>;
export const Loading = () => <App infiniteLoading/>;
export const Error = () => <App dataSrc={urlBase + "/" + urlTags} />;