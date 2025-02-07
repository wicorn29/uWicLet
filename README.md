# Welcome to uWicLet!

**uWicLet** is a tool that allows you to execute and manage bookmarklets using **uBlock Origin** by leveraging the **uBlock Run** exploit. This is especially useful if bookmarklets are blocked by your administrator or do not work on your device. **uWicLet** also includes some CSP bypassing techniques, making it functional on sites where regular **uBlock Run** or **uRun** fail, such as Blooket.

---

## **How to Set Up uWicLet**

### 1. **Install uBlock Origin**
Ensure you have **uBlock Origin** installed in your browser. If not, download it [here](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm).

### 2. **Modify Advanced Settings**
   - Navigate to:  
     `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/advanced-settings.html`  
   - Locate `userResourcesLocation`.
   - Change its value from `unset` to:  
     `https://raw.githubusercontent.com/wicorn29/uWicLet/main/payload.js`

### 3. **Modify Custom Filters**
   - Navigate to:  
     `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/1p-filters.html`  
   - Add the following line:
     ```
     *##+js(blob.js)
     ```

---

## **How to Use uWicLet**

### 1. **Opening uWicLet**
   - Press `CTRL + Shift + ~` to open uWicLet.
   - If you receive a warning about a strict **Content Security Policy (CSP)**, some bookmarklets may not work properly—especially those that load scripts from external sources.

### 2. **Adding Bookmarklets**
   - Locate the **"Enter bookmarklet code here"** text input.
   - You can either:
     - Copy and paste the bookmarklet code.
     - Drag a bookmarklet from your bookmarks bar into the input field.
   - Click the green **"Add Bookmarklet"** button.
   - Assign a name to your bookmarklet (which can be changed later).
   - You can store multiple bookmarklets, and they will persist even after closing your browser or restarting your device.

### 3. **Executing Bookmarklets**
   - Once added, your bookmarklet will appear with four buttons:
     - **Blue button**: Run the bookmarklet.
     - **Red button**: Delete the bookmarklet.
     - **Yellow buttons**: Edit the bookmarklet's name and code.

Some websites, such as **GitHub** or any **Google subdomain**, may completely block uWicLet due to strict **Content Security Policies** that are difficult to bypass. However, these cases are rare.

---

Enjoy using **uWicLet**!

