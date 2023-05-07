var capacitorSplashScreen = (function (exports, core, app) {
    'use strict';

    var info = {
      name: "@aparajita/capacitor-splash-screen",
      version: "2.0.2"
    };

    /// <reference types="@capacitor/cli" />
    /**
     * If a plugin call is rejected, the error will contain a string .code property
     * whose value will be one of these.
     */
    exports.SplashScreenErrorType = void 0;
    (function (SplashScreenErrorType) {
        /**
         * show() was called and no splash resource could be found
         *
         * @since 1.0.0
         */
        SplashScreenErrorType["notFound"] = "notFound";
        /**
         * hide() or animate() was called when show() rejected with 'notFound'.
         *
         * @since 1.0.0
         */
        SplashScreenErrorType["noSplashScreen"] = "noSplashScreen";
        /**
         * show() was called when a splash screen is already active
         *
         * @since 2.0.0
         */
        SplashScreenErrorType["alreadyActive"] = "alreadyActive";
        /**
         * animate() was called but no animation method could be found in the app.
         *
         * @since 1.0.0
         */
        SplashScreenErrorType["animateMethodNotFound"] = "animateMethodNotFound";
        /**
         * animate() was called but the animation method threw an error.
         */
        SplashScreenErrorType["animateMethodFailed"] = "animateMethodFailed";
    })(exports.SplashScreenErrorType || (exports.SplashScreenErrorType = {}));

    const kDurationMsThreshold = 10;
    function durationToMs(duration) {
        return duration >= kDurationMsThreshold ? duration : duration * 1000;
    }
    function durationToSeconds(duration) {
        return duration >= kDurationMsThreshold ? duration / 1000 : duration;
    }

    console.log(`loaded ${info.name} v${info.version}`);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const proxy = core.registerPlugin('SplashScreen', {
        web: async () => Promise.resolve().then(function () { return base; }).then((module) => new module.SplashScreenBase()),
        ios: async () => Promise.resolve().then(function () { return native; }).then((module) => new module.SplashScreen(proxy)),
        android: async () => Promise.resolve().then(function () { return native; }).then((module) => new module.SplashScreen(proxy))
    });

    // eslint-disable-next-line import/prefer-default-export
    class SplashScreenBase extends core.WebPlugin {
        // @native
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async show(options) {
            return Promise.resolve();
        }
        // @native
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async hide(options) {
            return Promise.resolve();
        }
        // @native
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async animate(options) {
            return Promise.resolve();
        }
        async listenToAppState(options) {
            const listener = ({ isActive }) => {
                var _a, _b;
                if (options) {
                    if (isActive) {
                        (_a = options.onResume) === null || _a === void 0 ? void 0 : _a.call(options);
                    }
                    else {
                        (_b = options.onSuspend) === null || _b === void 0 ? void 0 : _b.call(options);
                    }
                }
            };
            return app.App.addListener('appStateChange', listener);
        }
    }

    var base = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SplashScreenBase: SplashScreenBase
    });

    // eslint-disable-next-line import/prefer-default-export
    class SplashScreen extends SplashScreenBase {
        constructor(capProxy) {
            super();
            this.show = capProxy.show;
            this.hide = capProxy.hide;
            this.animate = capProxy.animate;
        }
    }

    var native = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SplashScreen: SplashScreen
    });

    exports.SplashScreen = proxy;
    exports.durationToMs = durationToMs;
    exports.durationToSeconds = durationToSeconds;
    exports.kDurationMsThreshold = kDurationMsThreshold;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports, app);
