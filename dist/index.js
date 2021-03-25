Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var Navbar = function () {
    var navbarExpanded = React.useState(false)[0];
    var onNavbarClicked = function (event) {
        console.log('🚀 ~ file: index.tsx ~ line 6 ~ onNavbarClicked ~ event', event);
        // setNavbarExpanded(!navbarExpanded)
    };
    return (React__namespace.createElement("nav", { className: "navbar", role: "navigation", "aria-label": "main navigation" },
        React__namespace.createElement("div", { className: "navbar-brand" },
            React__namespace.createElement("a", { href: "https://bulma.io", className: "navbar-item" },
                React__namespace.createElement("img", { src: "https://bulma.io/images/bulma-logo.png", alt: "Logo", width: 120, height: 80 })),
            React__namespace.createElement("a", { role: "button", className: "navbar-burger", "aria-label": "menu", "aria-expanded": navbarExpanded, "data-target": "navbarBasicExample", onClick: onNavbarClicked },
                React__namespace.createElement("span", { "aria-hidden": "true" }),
                React__namespace.createElement("span", { "aria-hidden": "true" }),
                React__namespace.createElement("span", { "aria-hidden": "true" }))),
        React__namespace.createElement("div", { id: "navbarBasicExample", className: "navbar-menu" },
            React__namespace.createElement("div", { className: "navbar-start" },
                React__namespace.createElement("a", { className: "navbar-item" }, "Home"),
                React__namespace.createElement("a", { className: "navbar-item" }, "About Us"),
                React__namespace.createElement("div", { className: "navbar-item has-dropdown is-hoverable" },
                    React__namespace.createElement("a", { className: "navbar-link" }, "Locations"),
                    React__namespace.createElement("div", { className: "navbar-dropdown" },
                        React__namespace.createElement("a", { className: "navbar-item" }, "Location 1"),
                        React__namespace.createElement("a", { className: "navbar-item" }, "Location 2"))),
                React__namespace.createElement("a", { className: "navbar-item" }, "Storage Tips"),
                React__namespace.createElement("a", { className: "navbar-item" }, "Contact Us")),
            React__namespace.createElement("div", { className: "navbar-end" },
                React__namespace.createElement("div", { className: "navbar-item" },
                    React__namespace.createElement("div", { className: "buttons" },
                        React__namespace.createElement("a", { className: "button is-primary" },
                            React__namespace.createElement("strong", null, "Pay Rent")),
                        React__namespace.createElement("a", { className: "button is-light" }, "Log in")))))));
};

exports.default = Navbar;
//# sourceMappingURL=index.js.map
