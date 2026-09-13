import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { createJob, PRIORITY_LEVELS, FINAL_OUTCOMES, OUTCOME_LABELS, JOB_STAGES, STAGE_LABELS } from '../types/job';
import './JobForm.css';

const JobForm = ({ job, onSave, onCancel }) => {
  const isEditing = !!job;
  
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    jobUrl: '',
    jobDescription: '',
    location: '',
    salary: '',
    stage: JOB_STAGES.INITIAL_REVIEW,
    isSuitable: null,
    suitabilityNotes: '',
    hasReferral: null,
    referralContact: '',
    referralNotes: '',
    coldEmailSent: false,
    coldEmailDate: '',
    coldEmailContent: '',
    coldEmailRecipients: [],
    appliedDate: '',
    applicationMethod: '',
    followUpDate: '',
    followUpNotes: '',
    interviewDates: [],
    interviewNotes: '',
    finalOutcome: null,
    finalNotes: '',
    priority: PRIORITY_LEVELS.MEDIUM,
    addedBy: 'User',
    tags: []
  });

  const [newRecipient, setNewRecipient] = useState('');
  const [newInterviewDate, setNewInterviewDate] = useState('');
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    if (job) {
      setFormData({
        ...job,
        coldEmailDate: job.coldEmailDate ? job.coldEmailDate.split('T')[0] : '',
        appliedDate: job.appliedDate ? job.appliedDate.split('T')[0] : '',
        followUpDate: job.followUpDate ? job.followUpDate.split('T')[0] : '',
        interviewDates: job.interviewDates || [],
        coldEmailRecipients: job.coldEmailRecipients || [],
        tags: job.tags || []
      });
    }
  }, [job]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleBooleanChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addRecipient = () => {
    if (newRecipient.trim()) {
      setFormData(prev => ({
        ...prev,
        coldEmailRecipients: [...prev.coldEmailRecipients, newRecipient.trim()]
      }));
      setNewRecipient('');
    }
  };

  const removeRecipient = (index) => {
    setFormData(prev => ({
      ...prev,
      coldEmailRecipients: prev.coldEmailRecipients.filter((_, i) => i !== index)
    }));
  };

  const addInterviewDate = () => {
    if (newInterviewDate) {
      setFormData(prev => ({
        ...prev,
        interviewDates: [...prev.interviewDates, newInterviewDate]
      }));
      setNewInterviewDate('');
    }
  };

  const removeInterviewDate = (index) => {
    setFormData(prev => ({
      ...prev,
      interviewDates: prev.interviewDates.filter((_, i) => i !== index)
    }));
  };

  const addTag = () => {
    if (newTag.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (index) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const jobData = {
      ...formData,
      isSuitable: formData.isSuitable === 'true' ? true : formData.isSuitable === 'false' ? false : null,
      hasReferral: formData.hasReferral === 'true' ? true : formData.hasReferral === 'false' ? false : null,
      finalOutcome: formData.finalOutcome || null,
      coldEmailDate: formData.coldEmailDate ? new Date(formData.coldEmailDate).toISOString() : null,
      appliedDate: formData.appliedDate ? new Date(formData.appliedDate).toISOString() : null,
      followUpDate: formData.followUpDate ? new Date(formData.followUpDate).toISOString() : null,
    };

    if (isEditing) {
      onSave(job.id, jobData);
    } else {
      onSave(createJob(jobData));
    }
  };

  return (
    <div className="job-form-overlay">
      <div className="job-form-container">
        <div className="job-form-header">
          <h2>{isEditing ? 'Edit Job' : 'Add New Job'}</h2>
          <button className="close-btn" onClick={onCancel}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="job-form">
          {/* Basic Information */}
          <section className="form-section">
            <h3>Basic Information</h3>
            
            <div className="form-group">
              <label htmlFor="company">Company *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="position">Position *</label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Remote, New York, NY"
                />
              </div>

              <div className="form-group">
                <label htmlFor="salary">Salary Range</label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="e.g., $100k - $150k"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="jobUrl">Job Posting URL</label>
              <input
                type="url"
                id="jobUrl"
                name="jobUrl"
                value={formData.jobUrl}
                onChange={handleChange}
                placeholder="https://"
              />
            </div>

            <div className="form-group">
              <label htmlFor="jobDescription">Job Description</label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                rows="4"
                placeholder="Paste key requirements and responsibilities..."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value={PRIORITY_LEVELS.HIGH}>High</option>
                  <option value={PRIORITY_LEVELS.MEDIUM}>Medium</option>
                  <option value={PRIORITY_LEVELS.LOW}>Low</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="stage">Current Stage</label>
                <select
                  id="stage"
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                >
                  {Object.values(JOB_STAGES).map(stage => (
                    <option key={stage} value={stage}>
                      {STAGE_LABELS[stage]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="addedBy">Added By</label>
                <input
                  type="text"
                  id="addedBy"
                  name="addedBy"
                  value={formData.addedBy}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
            </div>
          </section>

          {/* Initial Review */}
          <section className="form-section">
            <h3>Initial Review</h3>
            
            <div className="form-group">
              <label>Is this job suitable?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="isSuitable"
                    value="true"
                    checked={formData.isSuitable === true || formData.isSuitable === 'true'}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="isSuitable"
                    value="false"
                    checked={formData.isSuitable === false || formData.isSuitable === 'false'}
                    onChange={handleChange}
                  />
                  No
                </label>
                <label>
                  <input
                    type="radio"
                    name="isSuitable"
                    value=""
                    checked={formData.isSuitable === null || formData.isSuitable === ''}
                    onChange={handleChange}
                  />
                  Not Reviewed
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="suitabilityNotes">Suitability Notes</label>
              <textarea
                id="suitabilityNotes"
                name="suitabilityNotes"
                value={formData.suitabilityNotes}
                onChange={handleChange}
                rows="3"
                placeholder="Why is this job suitable or not?"
              />
            </div>
          </section>

          {/* Referral Check */}
          <section className="form-section">
            <h3>Referral Check</h3>
            
            <div className="form-group">
              <label>Do you have a referral?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="hasReferral"
                    value="true"
                    checked={formData.hasReferral === true || formData.hasReferral === 'true'}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasReferral"
                    value="false"
                    checked={formData.hasReferral === false || formData.hasReferral === 'false'}
                    onChange={handleChange}
                  />
                  No
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasReferral"
                    value=""
                    checked={formData.hasReferral === null || formData.hasReferral === ''}
                    onChange={handleChange}
                  />
                  Not Checked
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="referralContact">Referral Contact</label>
              <input
                type="text"
                id="referralContact"
                name="referralContact"
                value={formData.referralContact}
                onChange={handleChange}
                placeholder="Name and contact info"
              />
            </div>

            <div className="form-group">
              <label htmlFor="referralNotes">Referral Notes</label>
              <textarea
                id="referralNotes"
                name="referralNotes"
                value={formData.referralNotes}
                onChange={handleChange}
                rows="2"
              />
            </div>
          </section>

          {/* Cold Email */}
          <section className="form-section">
            <h3>Cold Email Outreach</h3>
            
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="coldEmailSent"
                  checked={formData.coldEmailSent}
                  onChange={handleChange}
                />
                Cold email sent
              </label>
            </div>

            {formData.coldEmailSent && (
              <>
                <div className="form-group">
                  <label htmlFor="coldEmailDate">Email Sent Date</label>
                  <input
                    type="date"
                    id="coldEmailDate"
                    name="coldEmailDate"
                    value={formData.coldEmailDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Recipients</label>
                  <div className="list-input">
                    <input
                      type="email"
                      value={newRecipient}
                      onChange={(e) => setNewRecipient(e.target.value)}
                      placeholder="recipient@company.com"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRecipient())}
                    />
                    <button type="button" onClick={addRecipient} className="add-btn">
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="list-items">
                    {formData.coldEmailRecipients.map((recipient, index) => (
                      <div key={index} className="list-item">
                        <span>{recipient}</span>
                        <button type="button" onClick={() => removeRecipient(index)} className="remove-btn">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="coldEmailContent">Email Content</label>
                  <textarea
                    id="coldEmailContent"
                    name="coldEmailContent"
                    value={formData.coldEmailContent}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Save your personalized email content here..."
                  />
                </div>
              </>
            )}
          </section>

          {/* Application */}
          <section className="form-section">
            <h3>Application</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="appliedDate">Application Date</label>
                <input
                  type="date"
                  id="appliedDate"
                  name="appliedDate"
                  value={formData.appliedDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="applicationMethod">Application Method</label>
                <input
                  type="text"
                  id="applicationMethod"
                  name="applicationMethod"
                  value={formData.applicationMethod}
                  onChange={handleChange}
                  placeholder="e.g., Company website, LinkedIn, Referral"
                />
              </div>
            </div>
          </section>

          {/* Follow-up */}
          <section className="form-section">
            <h3>Follow-up</h3>
            
            <div className="form-group">
              <label htmlFor="followUpDate">Follow-up Date</label>
              <input
                type="date"
                id="followUpDate"
                name="followUpDate"
                value={formData.followUpDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="followUpNotes">Follow-up Notes</label>
              <textarea
                id="followUpNotes"
                name="followUpNotes"
                value={formData.followUpNotes}
                onChange={handleChange}
                rows="3"
              />
            </div>
          </section>

          {/* Interview */}
          <section className="form-section">
            <h3>Interview</h3>
            
            <div className="form-group">
              <label>Interview Dates</label>
              <div className="list-input">
                <input
                  type="date"
                  value={newInterviewDate}
                  onChange={(e) => setNewInterviewDate(e.target.value)}
                />
                <button type="button" onClick={addInterviewDate} className="add-btn">
                  <Plus size={16} />
                </button>
              </div>
              <div className="list-items">
                {formData.interviewDates.map((date, index) => (
                  <div key={index} className="list-item">
                    <span>Round {index + 1}: {new Date(date).toLocaleDateString()}</span>
                    <button type="button" onClick={() => removeInterviewDate(index)} className="remove-btn">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="interviewNotes">Interview Notes</label>
              <textarea
                id="interviewNotes"
                name="interviewNotes"
                value={formData.interviewNotes}
                onChange={handleChange}
                rows="4"
                placeholder="Questions asked, impressions, next steps..."
              />
            </div>
          </section>

          {/* Final Outcome */}
          <section className="form-section">
            <h3>Final Outcome</h3>
            
            <div className="form-group">
              <label htmlFor="finalOutcome">Outcome</label>
              <select
                id="finalOutcome"
                name="finalOutcome"
                value={formData.finalOutcome || ''}
                onChange={handleChange}
              >
                <option value="">Not Yet Determined</option>
                {Object.entries(OUTCOME_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="finalNotes">Final Notes</label>
              <textarea
                id="finalNotes"
                name="finalNotes"
                value={formData.finalNotes}
                onChange={handleChange}
                rows="3"
                placeholder="Offer details, rejection reasons, or other notes..."
              />
            </div>
          </section>

          {/* Tags */}
          <section className="form-section">
            <h3>Tags</h3>
            
            <div className="form-group">
              <label>Add Tags</label>
              <div className="list-input">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="e.g., Remote, Senior, AI/ML"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <button type="button" onClick={addTag} className="add-btn">
                  <Plus size={16} />
                </button>
              </div>
              <div className="list-items">
                {formData.tags.map((tag, index) => (
                  <div key={index} className="list-item tag-item">
                    <span>{tag}</span>
                    <button type="button" onClick={() => removeTag(index)} className="remove-btn">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div className="form-actions">
            <button type="button" onClick={onCancel} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              {isEditing ? 'Update Job' : 'Add Job'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
