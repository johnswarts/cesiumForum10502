
       describe('Test Threejs', function(){

            it('Check if corn is displayed', function() {
                browser.setWindowSize(1920,1040);
                browser.url('https://go.pioneer.com/cornrevolution#');
                browser.verifyTitle('Pioneer – Corn. Revolutionized.');
                const menu=$("//section[contains(@class,'menu sectionBase')]")
                menu.waitForExist();
            });
            it('Check if gucci belt is displayed', function() {
                browser.setWindowSize(1920,1040);
                browser.url('https://1955horsebit.gucci.com/#/handbags');
                browser.verifyTitle('Gucci 1955 Horsebit Bag');
                const scroll=$("//div[contains(text(),'Scroll to explore')]")
                scroll.waitForExist();
            });
            it('Checks cesium sandcastle', function() {
            browser.setWindowSize(1920,1040);
            browser.url('https://sandcastle.cesium.com/');
            const magGlass=$('//*[@id="cesiumContainer"]/div/div[5]/div[1]/form/span/svg');
            magGlass.waitForExist;
            })
        });
