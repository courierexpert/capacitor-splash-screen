#import <Capacitor/Capacitor.h>

CAP_PLUGIN(WSSplashScreen, "WSSplashScreen",
  CAP_PLUGIN_METHOD(show, CAPPluginReturnPromise);
  CAP_PLUGIN_METHOD(hide, CAPPluginReturnPromise);
)
