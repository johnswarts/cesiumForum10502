var baseUrl;
var timeout;


baseUrl = 'https://test2.onesky.xyz';


if(process.env.DEBUG === 'true'){
timeout = 99999999;
}else {
timeout = 300000;
};

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    //
    // Override default path ('/wd/hub') for chromedriver service.
    path: '/wd/hub',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
       'test/specs/threejs.js'
//       './test/specs/homepage.js'
//       './test/specs/keycloakLogin.js'
//       './test/specs/globe.js'
//       './test/specs/settings.js',
//       './test/specs/editPointFlight.js'
//      './test/specs/createPointFlight.js'
//        './test/specs/flightDetails.js'

    ],
    // Patterns to exclude.
    exclude: [
        'pageObjects/*_Page.js',
//        './test/specs/flightDetails.js'

        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 4,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
//    {
//      maxInstances: 2,
//      browserName: 'firefox',
//      "moz:firefoxOptions":{
////         "args":["-headless"]
//       }
//    },
    {
      maxInstances: 2,

      browserName: 'chrome',
      'goog:chromeOptions': {
              'w3c': false,
              "args":[
////              '--ignore-certificate-errors',
//              "--proxy-server='direct://'",
//              "--proxy-bypass-list=*",
              '--headless',
////              '--no-proxy-server',
//              "--disable-gpu"
////              '--no-sandbox',
////              '--disable-setuid-sandbox',
////              '--disable-dev-shm-usage',
////              '--disable-accelerated-2d-canvas',
////              '--no-first-run',
////              '--no-zygote'
            ]
          }
    },
//    {
//      maxInstances: 4,
//      browserName: 'MicrosoftEdge',
//    }
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    //sync:true,
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'debug',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner, @wdio/lambda-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
//     logLevels: {
//        webdriver: 'silent',
//     },
    //
    // If you only want to run your tests until a specific amount of tests have failednpm use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: baseUrl,
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 20000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 40000,
    //
    // Default request retries count
    connectionRetryCount: 2,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['selenium-standalone'],
     seleniumLogs: 'logs',
      seleniumInstallArgs: {
        drivers: {
          chrome: {
          version: '83.0.4103.39',
          arch: process.arch,
          baseURL: 'https://chromedriver.storage.googleapis.com'
          },
          firefox: {
            version: '0.26.0',
            arch: process.arch,
            baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
          },
        }
      },
      seleniumArgs: {
        drivers: {
          chrome: {
          version: '83.0.4103.39',
          arch: process.arch,
          baseURL: 'https://chromedriver.storage.googleapis.com'
          },
          firefox: {
            version: '0.26.0',
            arch: process.arch,
            baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
          },
        }
      },
    
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters:
        [   'spec',
            ['junit', {
                    outputDir: './results/junit-results',
                    outputFileFormat: function(options) { // optional
                        return `results-${options.cid}.${options.capabilities.browserName}.xml`
                    }
                }]
        ],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: timeout
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
     before: function (capabilities, specs) {
         chai = require('chai');
         expect = chai.expect;
         should = chai.should();
         assert = chai.assert;

         browser.addCommand('verifyDC', function (locator, name) {
             const displayed = locator.isDisplayed();
             const clickable = locator.isClickable();
             expect(displayed, name + ' is Displayed').to.equal(true);
             expect(clickable, name + ' is Clickable').to.equal(true);
         });
         browser.addCommand('verifyNotDC', function (locator, name) {
              const displayed = locator.isDisplayed();
              const clickable = locator.isClickable();
              expect(displayed, name + ' is Displayed').to.equal(false);
              expect(clickable, name + ' is Clickable').to.equal(false);
          });
         browser.addCommand('verifyTitle', function (title) {
             const currentTitle = browser.getTitle();
             expect(currentTitle, 'Page Title Check').to.equal(title);
         });
     },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    // },


    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
//     after: function (result, capabilities, specs) {
//
//     },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
//afterSession: function (config, capabilities, specs) {
//
//},
//    afterSession: async function(){
//        // workaround to make sure the chromedriver shuts down
//        await browser.pause(1000);
//    },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
//     onComplete: function(exitCode, config, capabilities, results) {
//
//     },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}