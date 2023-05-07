import { SplashScreenBase } from './base';
// eslint-disable-next-line import/prefer-default-export
export class SplashScreen extends SplashScreenBase {
    constructor(capProxy) {
        super();
        this.show = capProxy.show;
        this.hide = capProxy.hide;
        this.animate = capProxy.animate;
    }
}
