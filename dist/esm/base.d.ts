import type { PluginListenerHandle } from '@capacitor/core';
import { WebPlugin } from '@capacitor/core';
import type { SplashScreenAnimateOptions, SplashScreenAppStateListeners, SplashScreenPlugin, SplashScreenShowOptions } from './definitions';
export declare class SplashScreenBase extends WebPlugin implements SplashScreenPlugin {
    show(options?: SplashScreenShowOptions): Promise<void>;
    hide(options?: SplashScreenShowOptions): Promise<void>;
    animate(options?: SplashScreenAnimateOptions): Promise<void>;
    listenToAppState(options?: SplashScreenAppStateListeners): Promise<PluginListenerHandle>;
}
