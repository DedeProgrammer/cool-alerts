let triggeredAlert = false;

const companynameData = "'" + alertIntegration.dataset.companyname + "'";
alertIntegration.style.setProperty('--company-name', companynameData);

const themeColor = alertIntegration.dataset.themecolor;
alertIntegration.style.setProperty('--text-color', themeColor);


function triggerAlert() {
    if(triggeredAlert == false) {
        backgroundAlert.style.display = 'flex';
        triggeredAlert = true;
    } else if(triggeredAlert == true) {
        backgroundAlert.style.display = 'none';
        triggeredAlert = false;
    }
}