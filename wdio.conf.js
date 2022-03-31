const { join } = require('path')

exports.config = {
    host: 'localhost',
    waitForTimeout: 5000,
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "8.0",
        "deviceName": "emulator-5556",
        "automationName": "UIAutomator2",
        "app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "appWaitActivity": "com.wdiodemoapp.MainActivity"

    }]
}