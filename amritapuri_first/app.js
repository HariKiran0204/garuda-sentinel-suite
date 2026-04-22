const config = {
    speech: {
        key: "",
        region: ""
    },
    textAnalytics: {
        key: "",
        endpoint: ""
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const savedConfig = localStorage.getItem('azureConfig');
    if (savedConfig) {
        Object.assign(config, JSON.parse(savedConfig));
    } else {
        document.getElementById('config-modal').style.display = 'block';
    }

    document.getElementById('config-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        config.speech.key = document.getElementById('speechKey').value;
        config.speech.region = document.getElementById('speechRegion').value;
        config.textAnalytics.key = document.getElementById('textAnalyticsKey').value;
        config.textAnalytics.endpoint = document.getElementById('textAnalyticsEndpoint').value;
        
        localStorage.setItem('azureConfig', JSON.stringify(config));
        
        document.getElementById('config-modal').style.display = 'none';
        
        initializeApp();
    });

    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('config-modal').style.display = 'none';
    });
});

function isConfigValid() {
    return config.speech.key && 
           config.speech.region &&
           config.textAnalytics.key &&
           config.textAnalytics.endpoint;
}