# Quick Reference - GitHub Pages Deployment

## 🎯 Your App URL (After Setup)
```
https://YOUR_GITHUB_USERNAME.github.io/MihirJobSearch/
```

---

## ⚡ Quick Commands

### First Time Setup
```bash
cd /Users/neha/Downloads/MihirJobSearch
npm install
./setup-github-pages.sh
```

### Deploy Updates
```bash
npm run deploy
```

### Run Locally
```bash
npm run dev
```
Then open: http://localhost:5173

---

## 📝 Common Tasks

### Update the App
```bash
# 1. Make changes
# 2. Test locally
npm run dev

# 3. Deploy
npm run deploy

# 4. Wait 1-2 minutes, then refresh browser
```

### Save Job Data to GitHub
```bash
# 1. Export data (click Export in app)
# 2. Replace jobs-data.json file
# 3. Commit
git add jobs-data.json
git commit -m "Updated job applications"
git push
```

### Get Latest Data from GitHub
```bash
git pull
# Then import jobs-data.json in the app
```

---

## 🔧 If Something Goes Wrong

### App Shows 404
```bash
# Check GitHub Pages settings
# Go to: https://github.com/YOUR_USERNAME/MihirJobSearch/settings/pages
# Make sure gh-pages branch is selected
```

### Deploy Fails
```bash
npm install
npm run build
npm run deploy
```

### Changes Not Showing
```bash
# Hard refresh browser:
# Mac: Cmd + Shift + R
# Windows: Ctrl + Shift + R
```

---

## 📱 Share with Family

Send them this URL:
```
https://YOUR_USERNAME.github.io/MihirJobSearch/
```

They can add it to their home screen for quick access!

---

## 📚 Full Documentation

- **Complete Setup**: `GITHUB_PAGES_SETUP.md`
- **Usage Guide**: `README.md`
- **GitHub Storage**: `GITHUB_SETUP.md`
- **All Deployment Options**: `DEPLOYMENT.md`
