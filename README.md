# Cool Alerts by DedeProgrammer
### Hey everyone! I'm thrilled to share the enhanced version of Cool Alerts, my visually appealing alternative to the standard JavaScript ```alert()```. My goal was to make it even more user-friendly for you.

## 🚀 Getting Started

### Integrating Cool Alerts into your project is super straightforward!

### 1. Setup

### Just add the provided code to your HTML. Make sure you place the CSS link in your ```<head>``` section and the JavaScript script right before the closing ```</body>``` tag for optimal loading.

### 2. Code Integration

```html
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DedeProgrammer/cool-alerts@main/cool-alerts/alertStyle.css">
</head>
<body>
    <div id="backgroundAlert">
        <div id="alertIntegration" data-companyname="myCompany" data-themecolor="rgb(108, 108, 236)">
            <h1 class="header" id="title">Your Alert Title</h1>
            <div id="pageContent"></div>
            <button class="bnt footer" onclick="triggerAlert()">OK</button>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/gh/DedeProgrammer/cool-alerts@main/cool-alerts/alertScript.js"></script>
</body>
```

### 3. Done!

### Once you've integrated this code, you're all set to start using its features.

## ✨ Features & Customization
### I've packed Cool Alerts with various CSS attributes to boost your productivity and make designing your notifications a breeze.
## 🎨 Color Attributes for Content (```<div id="pageContent">```)
### I've included some handy predefined colors you can use directly to quickly style your alerts:

- ```red```

- ```orange```

- ```yellow```

- ```green```

- ```blue```

- ```violet```

- ```themecolor (uses your custom defined theme color)```

- ```rainbow (a fun, vibrant option!)```

## 📝 Additional Attributes for Content (```<div id="pageContent">```)

- ```result```: Double underlines your text.

- ```result-input```: Single underlines your text.

- ```betterText```: Makes your text responsive for different screen sizes.

- ```computing-area```: Creates a free-form writing area within the alert.

- ```code-area```: Generates a dedicated container perfect for displaying code snippets.

### ⚙️ Custom Adjustments
### Want to make it truly yours? Here's how to fine-tune your alerts:

## 
- Custom Main Color ```data-themecolor```: Define your own main theme color by changing the ```data-themecolor``` attribute's value within the ```#alertIntegration``` element.
```html
<div id="alertIntegration" data-companyname="myCompany" data-themecolor="rgb(108, 108, 236)">
```
- Company Name ```data-companyname```: Easily customize your company name by updating the ```data-companyname``` attribute in the same ```#alertIntegration``` element.
##
### ▶️ Opening & Closing Alerts
### You can open and close your custom alerts in your projects using the simple JavaScript function ```triggerAlert()```. Just call it whenever you need your alert to appear or disappear!

### Feedback and Support
### If you run into any issues, spot a bug, or have suggestions for enhancements, please don't hesitate to let me know. Your feedback is incredibly important to me.

### For any comments or ideas, just reach out to me via email. You'll find my contact details in my profile.





