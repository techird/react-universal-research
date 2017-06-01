import * as React from "react";
import { renderToString } from "react-dom/server";
import serialize from "serialize-javascript";

const VENDOR_BASE = "//imgcache.qq.com/qcloud/main/scripts/release/common/vendors/";
const VENDORS_MIN = [
    VENDOR_BASE + "babel/polyfill.6.23.min.js",
    VENDOR_BASE + "react/react-with-addons.15.5.4.min.js",
    VENDOR_BASE + "react/react-dom.15.5.4.min.js",
];
const VENDORS = [
    VENDOR_BASE + "babel/polyfill.6.23.js",
    VENDOR_BASE + "react/react-with-addons.15.5.4.js",
    VENDOR_BASE + "react/react-dom.15.5.4.js",
];


export function ServerHTML({ title, component, js, preloadState }) {
    return (
        <html>
            <head>
                <title>{ title }</title>
            </head>
            <body>
                <div id="react-root" dangerouslySetInnerHTML={{ __html: renderToString(component) }}></div>
                { VENDORS.map(vendor => <script key={vendor} src={vendor}></script>) }
                <script src={js}></script>
                <script></script>
                <script dangerouslySetInnerHTML={{ __html: `ReactDOM.render(getEntryComponent(${serialize(preloadState)}), document.getElementById('react-root'));` }}></script>
            </body>
        </html>
    );
}