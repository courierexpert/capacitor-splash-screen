/// <reference types="@capacitor/cli" />
/**
 * If a plugin call is rejected, the error will contain a string .code property
 * whose value will be one of these.
 */
export var SplashScreenErrorType;
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
})(SplashScreenErrorType || (SplashScreenErrorType = {}));
