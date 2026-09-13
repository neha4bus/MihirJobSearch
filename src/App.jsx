import React, { useState } from 'react';
import { Plus, Download, Upload, Search, Filter, GitBranch } from 'lucide-react';
import KanbanBoard from './components/KanbanBoard';
import JobForm from './components/JobForm';
import GitHubGuide from './components/GitHubGuide';
import { useJobs } from './hooks/useJobs';
import { exportToJSON, importFromJSON } from './utils/storage';
import './App.css';

function App() {
  const {
    jobs,
    loading,
    addJob,
    updateJob,
    deleteJob,
    moveJob,
    replaceData,
    exportData
  } = useJobs();

  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [showGitHubGuide, setShowGitHubGuide] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');

  const handleAddJob = () => {
    setEditingJob(null);
    setShowForm(true);
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setShowForm(true);
  };

  const handleSaveJob = (jobOrId, updates) => {
    if (typeof jobOrId === 'string') {
      // Editing existing job
      updateJob(jobOrId, updates);
    } else {
      // Adding new job
      addJob(jobOrId);
    }
    setShowForm(false);
    setEditingJob(null);
  };

  const handleDeleteJob = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      deleteJob(jobId);
    }
  };

  const handleExport = () => {
    exportToJSON(exportData());
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      importFromJSON(file)
        .then(data => {
          if (window.confirm('This will replace all current data. Continue?')) {
            replaceData(data);
          }
        })
        .catch(error => {
          alert('Error importing file: ' + error.message);
        });
    }
    event.target.value = '';
  };

  // Filter jobs
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchTerm === '' || 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.location && job.location.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesPriority = filterPriority === 'all' || job.priority === filterPriority;
    
    return matchesSearch && matchesPriority;
  });

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading jobs...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <h1>Job Search Tracker</h1>
            <p className="subtitle">Track your job applications from review to offer</p>
          </div>
          
          <div className="header-actions">
            <button className="btn-icon" onClick={handleAddJob} title="Add new job">
              <Plus size={20} />
              <span>Add Job</span>
            </button>
            
            <button className="btn-icon" onClick={handleExport} title="Export to JSON">
              <Download size={20} />
              <span>Export</span>
            </button>
            
            <label className="btn-icon" title="Import from JSON">
              <Upload size={20} />
              <span>Import</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                style={{ display: 'none' }}
              />
            </label>

            <button 
              className="btn-icon btn-github" 
              onClick={() => setShowGitHubGuide(true)} 
              title="GitHub Setup Guide"
            >
              <GitBranch size={20} />
              <span>GitHub Guide</span>
            </button>
          </div>
        </div>

        <div className="filters">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search by company, position, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <Filter size={18} />
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
            >
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>

          <div className="stats">
            <span className="stat-item">
              Total Jobs: <strong>{jobs.length}</strong>
            </span>
            <span className="stat-item">
              Showing: <strong>{filteredJobs.length}</strong>
            </span>
          </div>
        </div>
      </header>

      <main className="app-main">
        <KanbanBoard
          jobs={filteredJobs}
          onMoveJob={moveJob}
          onEditJob={handleEditJob}
          onDeleteJob={handleDeleteJob}
        />
      </main>

      {showForm && (
        <JobForm
          job={editingJob}
          onSave={handleSaveJob}
          onCancel={() => {
            setShowForm(false);
            setEditingJob(null);
          }}
        />
      )}

      {showGitHubGuide && (
        <GitHubGuide onClose={() => setShowGitHubGuide(false)} />
      )}
    </div>
  );
}

export default App;
