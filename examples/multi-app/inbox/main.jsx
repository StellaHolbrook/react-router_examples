import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import InboxApp from "./App";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* "Mount" this app under the /inbox URL pathname. All routes and links
        are relative to this name. */}
        <BrowserRouter basename="inbox">
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <InboxApp/>
            </DevSupport>
        </BrowserRouter>
    </React.StrictMode>
);
