# GitHub Pages Setup Guide

This guide will help you deploy your Job Search Tracker to GitHub Pages so it's accessible from anywhere on the internet.

## 📋 Prerequisites

- A GitHub account (free)
- Git installed on your computer
- Node.js and npm installed

## 🚀 Step-by-Step Setup

### Step 1: Update the Base Path (Already Done!)

The `vite.config.js` file has been configured with:
```javascript
base: '/MihirJobSearch/'
```

**Important**: If your GitHub repository has a different name, update this line to match:
```javascript
base: '/YOUR-REPO-NAME/'
```

### Step 2: Install Dependencies

```bash
cd /Users/neha/Downloads/MihirJobSearch
npm install
```

This will install all required packages including `gh-pages` for deployment.

### Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `MihirJobSearch` (or your preferred name)
3. **Choose**: Private (to keep job search data confidential)
4. **DO NOT** check: "Initialize this repository with a README"
5. Click "Create repository"

### Step 4: Initialize Git and Push to GitHub

```bash
# Navigate to your project folder
cd /Users/neha/Downloads/MihirJobSearch

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Job Search Tracker"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/MihirJobSearch.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

### Step 5: Deploy to GitHub Pages

```bash
# Build and deploy in one command
npm run deploy
```

This command will:
1. Build your app (`npm run build`)
2. Create a `gh-pages` branch
3. Push the built files to GitHub
4. Take about 1-2 minutes

### Step 6: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/MihirJobSearch`
2. Click **Settings** (top right)
3. Scroll down and click **Pages** (left sidebar)
4. Under "Source":
   - Branch: Select `gh-pages`
   - Folder: Select `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 7: Access Your App! 🎉

Your app will be available at:
```
https://YOUR_USERNAME.github.io/MihirJobSearch/
```

**Example**: If your GitHub username is `neha123`, the URL would be:
```
https://neha123.github.io/MihirJobSearch/
```

---

## 🔄 Making Updates

### When You Make Changes to the App:

1. **Make your changes** in the code
2. **Export your data** (click Export button to save jobs-data.json)
3. **Test locally**:
   ```bash
   npm run dev
   ```
4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
6. **Wait 1-2 minutes** and refresh your browser
7. **Import your data back** (click Import and select jobs-data.json)

### When Job Data Changes (Using the App):

You don't need to redeploy for data changes! Just:

1. **Export** your data (Download button)
2. **Commit to Git**:
   ```bash
   git add jobs-data.json
   git commit -m "Updated job applications"
   git push
   ```

Other users can then:
```bash
git pull
# Refresh browser
# Import the latest jobs-data.json
```

---

## 👥 Sharing Access with Family

### Share the URL

Send this URL to your son and family members:
```
https://YOUR_USERNAME.github.io/MihirJobSearch/
```

They can:
- Open it in any browser
- Bookmark it
- Add to home screen on mobile (works like an app!)

### Mobile Access (Make It Feel Like an App)

**iOS (iPhone/iPad):**
1. Open the URL in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name it "Job Tracker"
5. Tap "Add"

**Android:**
1. Open the URL in Chrome
2. Tap menu (three dots)
3. Tap "Add to Home screen"
4. Name it "Job Tracker"
5. Tap "Add"

### For Collaborators (GitHub Access)

If family members want to help update data:

1. **You** invite them:
   - Go to your GitHub repo
   - Settings → Collaborators
   - Click "Add people"
   - Enter their GitHub username or email
   
2. **They** can then:
   ```bash
   # Clone the repository
   git clone https://github.com/YOUR_USERNAME/MihirJobSearch.git
   cd MihirJobSearch
   
   # Install dependencies
   npm install
   
   # Run locally
   npm run dev
   ```

---

## 🔐 Security & Privacy

### Keep Repository Private

⚠️ **Important**: Your repository should be **PRIVATE** because:
- Job applications contain sensitive information
- Salary expectations are private
- Contact information should be protected
- Interview notes are confidential

### Access Control

- **Public URL**: Anyone with the link can view the app
- **Data Storage**: Each user's browser stores their own data locally
- **GitHub Repo**: Only collaborators can access the source code and commit data
- **Recommendation**: Only share the URL with trusted family members

### Data Synchronization

Since each browser stores data separately:
- Use **Export/Import** to share data between users
- Or commit `jobs-data.json` to GitHub and share via Git

---

## 🛠️ Troubleshooting

### Problem: 404 Page Not Found

**Solution:**
1. Check that GitHub Pages is enabled (Settings → Pages)
2. Verify the `gh-pages` branch exists
3. Wait 2-3 minutes after deployment
4. Clear browser cache and try again
5. Make sure the URL matches: `https://USERNAME.github.io/REPO-NAME/`

### Problem: Page Shows But Looks Broken

**Solution:**
1. Check that `base` in `vite.config.js` matches your repo name:
   ```javascript
   base: '/MihirJobSearch/', // Must match your repo name
   ```
2. Redeploy:
   ```bash
   npm run deploy
   ```

### Problem: Deploy Command Fails

**Solution:**
```bash
# Make sure dependencies are installed
npm install

# Try deploying again
npm run deploy

# If still fails, check for errors and try:
npm run build
# If build succeeds, then:
npm run deploy
```

### Problem: Changes Not Showing Up

**Solution:**
1. Wait 1-2 minutes after `npm run deploy`
2. Hard refresh your browser:
   - **Mac**: Cmd + Shift + R
   - **Windows**: Ctrl + Shift + R
3. Clear browser cache
4. Try in incognito/private mode

### Problem: Can't Push to GitHub

**Solution:**
```bash
# Check your remote URL
git remote -v

# If it's wrong, update it:
git remote set-url origin https://github.com/YOUR_USERNAME/MihirJobSearch.git

# Then push again
git push -u origin main
```

### Problem: Permission Denied (GitHub)

**Solution:**
1. Make sure you're logged into GitHub
2. Check if you have access to the repository
3. You may need to set up SSH keys or use a Personal Access Token
4. See: https://docs.github.com/en/authentication

---

## 📊 Complete Command Reference

```bash
# Initial setup
npm install                    # Install dependencies
git init                       # Initialize Git
git add .                      # Stage all files
git commit -m "message"        # Commit changes
git remote add origin URL      # Connect to GitHub
git push -u origin main        # Push to GitHub

# Deploy to GitHub Pages
npm run deploy                 # Build and deploy

# Development
npm run dev                    # Run locally (http://localhost:5173)
npm run build                  # Build for production
npm run preview                # Preview production build

# Git operations
git status                     # Check status
git add filename               # Stage specific file
git commit -m "message"        # Commit with message
git push                       # Push to GitHub
git pull                       # Get latest changes

# Update job data
git add jobs-data.json         # Stage data file
git commit -m "Updated jobs"   # Commit data
git push                       # Push to GitHub
```

---

## 🎯 Quick Start Checklist

- [ ] Install dependencies: `npm install`
- [ ] Create GitHub repository (Private)
- [ ] Update `vite.config.js` base path if repo name is different
- [ ] Initialize Git: `git init`
- [ ] Add remote: `git remote add origin URL`
- [ ] Push to GitHub: `git push -u origin main`
- [ ] Deploy: `npm run deploy`
- [ ] Enable GitHub Pages (Settings → Pages → gh-pages branch)
- [ ] Wait 2 minutes
- [ ] Visit: `https://YOUR_USERNAME.github.io/MihirJobSearch/`
- [ ] Share URL with family
- [ ] Bookmark on all devices

---

## 💡 Pro Tips

1. **Bookmark the URL** on all devices for quick access
2. **Add to home screen** on mobile for app-like experience
3. **Export data regularly** as backup (before deploying)
4. **Use descriptive commit messages** to track changes
5. **Communicate with team** before making major changes
6. **Test locally first** with `npm run dev` before deploying
7. **Keep repo private** to protect sensitive job search data

---

## 📞 Need Help?

If you encounter issues:

1. **Check the error message** carefully
2. **Verify all commands** were run in the correct directory
3. **Check GitHub repository** settings and branches
4. **Try in incognito mode** to rule out caching issues
5. **Review this guide** for troubleshooting steps

**GitHub Pages Documentation**: https://docs.github.com/en/pages

---

## 🎉 Success!

Once deployed, you can:
- ✅ Access from anywhere with internet
- ✅ Share with family members
- ✅ Use on desktop and mobile
- ✅ Update anytime with `npm run deploy`
- ✅ Keep full version history in Git

**Your app is now live and ready for tracking job applications!** 🚀
