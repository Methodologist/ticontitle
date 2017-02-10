import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {Splashscreen} from 'ionic-native';
...
    hideSplashScreen() {
        if (Splashscreen) {
            setTimeout(() => {
                Splashscreen.hide();
            }, 100);
        }
    })
}

platformBrowserDynamic().bootstrapModule(AppModule);
