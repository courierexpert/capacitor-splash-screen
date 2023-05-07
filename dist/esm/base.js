import { App } from '@capacitor/app';
import { WebPlugin } from '@capacitor/core';
// eslint-disable-next-line import/prefer-default-export
export class SplashScreenBase extends WebPlugin {
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
        return App.addListener('appStateChange', listener);
    }
}
