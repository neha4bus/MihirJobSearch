# 🚀 START HERE - Deploy to GitHub Pages

Follow these simple steps to get your Job Search Tracker online!

---

## ✅ Before You Start

Make sure you have:
- [ ] A GitHub account (create free at https://github.com/signup)
- [ ] Git installed (check with: `git --version`)
- [ ] Node.js installed (check with: `node --version`)

---

## 🎯 Option 1: Automatic Setup (Easiest)

### Run the Setup Script

```bash
cd /Users/neha/Downloads/MihirJobSearch
./setup-github-pages.sh
```

The script will:
1. Install all dependencies
2. Set up Git
3. Configure GitHub connection
4. Deploy your app

Just follow the prompts! 🎉

---

## 🎯 Option 2: Manual Setup (Step by Step)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `MihirJobSearch`
3. **Important**: Choose **Private** (to keep job data secure)
4. **Don't** check "Initialize with README"
5. Click "Create repository"

### Step 2: Install and Deploy

Open Terminal and run these commands:

```bash
# Go to your project folder
cd /Users/neha/Downloads/MihirJobSearch

# Install dependencies (takes 2-3 minutes)
npm install

# Initialize Git
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/MihirJobSearch.git
git push -u origin main

# Deploy to GitHub Pages (takes 1-2 minutes)
npm run deploy
```

### Step 3: Enable GitHub Pages

1. Go to: `https://github.com/YOUR_USERNAME/MihirJobSearch/settings/pages`
2. Under "Source":
   - Branch: Select **gh-pages**
   - Folder: **/ (root)**
3. Click **Save**
4. Wait 2-3 minutes

### Step 4: Access Your App! 🎉

Visit: `https://YOUR_USERNAME.github.io/MihirJobSearch/`

(Replace YOUR_USERNAME with your actual GitHub username)

---

## 📱 Share with Family

Send them your app URL:
```
https://YOUR_USERNAME.github.io/MihirJobSearch/
```

They can:
- Open in any browser
- Add to home screen on mobile (works like an app!)
- Bookmark for quick access

---

## 🔄 Making Updates Later

Whenever you want to update the app:

```bash
cd /Users/neha/Downloads/MihirJobSearch
npm run deploy
```

That's it! Wait 1-2 minutes and refresh your browser.

---

## 💾 Syncing Job Data

### Save Your Data
1. Click "Export" in the app
2. Save the file
3. In Terminal:
```bash
cd /Users/neha/Downloads/MihirJobSearch
git add jobs-data.json
git commit -m "Updated jobs"
git push
```

### Get Latest Data
```bash
cd /Users/neha/Downloads/MihirJobSearch
git pull
```
Then click "Import" in the app and select `jobs-data.json`

---

## ❓ Having Issues?

### "npm: command not found"
Install Node.js from: https://nodejs.org/

### "git: command not found"
Install Git from: https://git-scm.com/downloads

### "Permission denied"
Make sure you've created the GitHub repository first!

### "404 Not Found"
- Wait 2-3 minutes after enabling GitHub Pages
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check Settings → Pages in your GitHub repo

### App looks broken
Check that `vite.config.js` has:
```javascript
base: '/MihirJobSearch/'
```
This must match your repository name!

---

## 📚 Need More Help?

Check these files in your project:
- **`QUICK_REFERENCE.md`** - Command cheat sheet
- **`GITHUB_PAGES_SETUP.md`** - Detailed setup guide
- **`README.md`** - Complete app documentation
- **`GITHUB_SETUP.md`** - Multi-user collaboration guide

---

## 🎉 You're All Set!

Once deployed, you'll have:
- ✅ Professional job tracking system
- ✅ Accessible from anywhere
- ✅ Mobile-friendly interface
- ✅ Shareable with family
- ✅ Free hosting forever

**Good luck with the job search!** 🚀
