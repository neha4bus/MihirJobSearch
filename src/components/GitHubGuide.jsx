import React, { useState } from 'react';
import { X, GitBranch, Download, Upload, Users, CheckCircle } from 'lucide-react';
import './GitHubGuide.css';

const GitHubGuide = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="github-guide-overlay">
      <div className="github-guide-container">
        <div className="guide-header">
          <div className="guide-title">
            <GitBranch size={24} />
            <h2>GitHub Storage Guide</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="guide-tabs">
          <button
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`tab ${activeTab === 'setup' ? 'active' : ''}`}
            onClick={() => setActiveTab('setup')}
          >
            Initial Setup
          </button>
          <button
            className={`tab ${activeTab === 'workflow' ? 'active' : ''}`}
            onClick={() => setActiveTab('workflow')}
          >
            Daily Workflow
          </button>
          <button
            className={`tab ${activeTab === 'multi-user' ? 'active' : ''}`}
            onClick={() => setActiveTab('multi-user')}
          >
            Multi-User
          </button>
        </div>

        <div className="guide-content">
          {activeTab === 'overview' && (
            <div className="guide-section">
              <h3>How Data Storage Works</h3>
              <p>
                This application stores all job tracking data in a file called <code>jobs-data.json</code>.
                By committing this file to GitHub, you can:
              </p>
              <ul>
                <li>✅ Keep your data backed up automatically</li>
                <li>✅ Access your data from multiple computers</li>
                <li>✅ Collaborate with family members or mentors</li>
                <li>✅ Track the history of all changes</li>
                <li>✅ Restore previous versions if needed</li>
              </ul>

              <div className="info-box">
                <strong>Important:</strong> Use a <strong>private</strong> GitHub repository to keep your job search data confidential.
              </div>

              <h4>Two Storage Layers</h4>
              <ol>
                <li><strong>Browser Storage:</strong> Data is automatically saved in your browser</li>
                <li><strong>GitHub Storage:</strong> Export and commit to GitHub to share with others</li>
              </ol>
            </div>
          )}

          {activeTab === 'setup' && (
            <div className="guide-section">
              <h3>Initial Setup Steps</h3>
              
              <div className="step-box">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Create GitHub Repository</h4>
                  <p>Go to GitHub and create a new <strong>private</strong> repository</p>
                  <code className="code-block">
                    Name: job-search-tracker (or any name you prefer)<br/>
                    Privacy: Private ⭐<br/>
                    Initialize: No README/gitignore needed
                  </code>
                </div>
              </div>

              <div className="step-box">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Initialize Git (if needed)</h4>
                  <p>In your project folder, run:</p>
                  <code className="code-block">
                    git init<br/>
                    git add .<br/>
                    git commit -m "Initial commit"
                  </code>
                </div>
              </div>

              <div className="step-box">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Connect to GitHub</h4>
                  <p>Replace YOUR_USERNAME and YOUR_REPO with your details:</p>
                  <code className="code-block">
                    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git<br/>
                    git branch -M main<br/>
                    git push -u origin main
                  </code>
                </div>
              </div>

              <div className="step-box">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Invite Collaborators (Optional)</h4>
                  <p>In GitHub repository settings → Collaborators → Add people</p>
                  <p>Add family members who will help with the job search</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'workflow' && (
            <div className="guide-section">
              <h3>Daily Workflow</h3>
              
              <div className="workflow-box">
                <div className="workflow-icon">
                  <Download size={32} />
                </div>
                <div className="workflow-content">
                  <h4>Step 1: Pull Latest Changes</h4>
                  <p>Before starting work, get the latest data:</p>
                  <code className="code-block">
                    git pull
                  </code>
                  <p>Then <strong>refresh your browser</strong> to load the latest jobs</p>
                </div>
              </div>

              <div className="workflow-box">
                <div className="workflow-icon">
                  <CheckCircle size={32} />
                </div>
                <div className="workflow-content">
                  <h4>Step 2: Make Your Changes</h4>
                  <p>Use the app to add, edit, or update jobs</p>
                  <p>Data is automatically saved to browser storage</p>
                </div>
              </div>

              <div className="workflow-box">
                <div className="workflow-icon">
                  <Upload size={32} />
                </div>
                <div className="workflow-content">
                  <h4>Step 3: Export and Commit</h4>
                  <p>Click the <strong>Export</strong> button to download <code>jobs-data.json</code></p>
                  <p>Save it in your project folder, then commit:</p>
                  <code className="code-block">
                    git add jobs-data.json<br/>
                    git commit -m "Updated job applications"<br/>
                    git push
                  </code>
                </div>
              </div>

              <div className="tip-box">
                <strong>💡 Tip:</strong> Use descriptive commit messages like "Added 3 new applications" or "Updated Microsoft referral status"
              </div>
            </div>
          )}

          {activeTab === 'multi-user' && (
            <div className="guide-section">
              <h3>Working with Multiple Users</h3>
              
              <div className="user-box">
                <Users size={24} />
                <h4>Communication is Key</h4>
                <p>Coordinate with other users to avoid conflicts:</p>
                <ul>
                  <li>Let others know when you're making big updates</li>
                  <li>Use the "Added By" field to identify who added each job</li>
                  <li>Pull before you start, push when you're done</li>
                </ul>
              </div>

              <h4>Handling Conflicts</h4>
              <p>If two people edit the same data, Git will show a merge conflict:</p>
              
              <div className="conflict-solution">
                <h5>Option 1: Use Import/Export (Easier)</h5>
                <ol>
                  <li>Export your changes before pulling</li>
                  <li>Run: <code>git pull</code></li>
                  <li>Accept remote version: <code>git checkout --theirs jobs-data.json</code></li>
                  <li>Refresh browser</li>
                  <li>Import your exported file</li>
                  <li>Manually merge any differences</li>
                  <li>Export again and commit</li>
                </ol>
              </div>

              <div className="conflict-solution">
                <h5>Option 2: Manual Resolution</h5>
                <ol>
                  <li>Open <code>jobs-data.json</code> in a text editor</li>
                  <li>Look for conflict markers (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>)</li>
                  <li>Manually edit to keep desired changes</li>
                  <li>Remove conflict markers</li>
                  <li>Save and commit</li>
                </ol>
              </div>

              <div className="tip-box">
                <strong>💡 Best Practice:</strong> Consider using <a href="https://desktop.github.com" target="_blank" rel="noopener noreferrer">GitHub Desktop</a> for a visual interface that makes Git operations easier!
              </div>
            </div>
          )}
        </div>

        <div className="guide-footer">
          <p>
            📖 For detailed instructions, see <code>GITHUB_SETUP.md</code> in your project folder
          </p>
        </div>
      </div>
    </div>
  );
};

export default GitHubGuide;
