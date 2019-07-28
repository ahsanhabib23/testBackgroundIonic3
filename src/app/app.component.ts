import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {BackgroundMode} from "@ionic-native/background-mode";

declare var cordova: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	rootPage:any = HomePage;

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private backgroundMode: BackgroundMode) {
	platform.ready().then(() => {
		// Okay, so the platform is ready and our plugins are available.
		// Here you can do any higher level native things you might need.
		statusBar.styleDefault();
		/*Checking whether the App is running or not*/
		setInterval(()=> console.log("App is Running ================================="), 1000);
		
		if(platform.is('cordova')) {
			/* Setting the Foreground and Background Mood*/
			backgroundMode.setDefaults({
				title: "DiaperSens is running...",
				text: 'Continuously monitoring sensors'
			});
			cordova.plugins.foregroundService.start('GPS Running', 'Background Service', 'myicon', 3, 10);
			this.backgroundMode.enable();
		}
		
		splashScreen.hide();
	});
	}
}

