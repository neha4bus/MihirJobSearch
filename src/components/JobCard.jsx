import React from 'react';
import { 
  Building2, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Mail, 
  Users, 
  CheckCircle2, 
  XCircle, 
  Clock,
  ExternalLink,
  Edit,
  Trash2,
  AlertCircle
} from 'lucide-react';
import { format } from 'date-fns';
import { PRIORITY_LEVELS, OUTCOME_LABELS } from '../types/job';
import './JobCard.css';

const JobCard = ({ job, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return null;
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (error) {
      return dateString;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case PRIORITY_LEVELS.HIGH:
        return '#ef4444';
      case PRIORITY_LEVELS.MEDIUM:
        return '#f59e0b';
      case PRIORITY_LEVELS.LOW:
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="job-card">
      {/* Header */}
      <div className="job-card-header">
        <div className="job-title-section">
          <h4 className="job-position">{job.position || 'Untitled Position'}</h4>
          <div className="company-info">
            <Building2 size={14} />
            <span>{job.company || 'Unknown Company'}</span>
          </div>
        </div>
        <div className="job-actions">
          <button 
            className="action-btn edit-btn" 
            onClick={onEdit}
            title="Edit job"
          >
            <Edit size={16} />
          </button>
          <button 
            className="action-btn delete-btn" 
            onClick={onDelete}
            title="Delete job"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Priority Badge */}
      <div className="priority-badge" style={{ backgroundColor: getPriorityColor(job.priority) }}>
        {job.priority} priority
      </div>

      {/* Job Details */}
      <div className="job-details">
        {job.location && (
          <div className="detail-item">
            <MapPin size={14} />
            <span>{job.location}</span>
          </div>
        )}
        
        {job.salary && (
          <div className="detail-item">
            <DollarSign size={14} />
            <span>{job.salary}</span>
          </div>
        )}

        {job.jobUrl && (
          <div className="detail-item">
            <a 
              href={job.jobUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="job-link"
            >
              <ExternalLink size={14} />
              <span>View Job Posting</span>
            </a>
          </div>
        )}
      </div>

      {/* Stage-specific Information */}
      <div className="stage-info">
        {/* Suitability Check */}
        {job.isSuitable !== null && (
          <div className="info-section">
            <div className="info-label">
              {job.isSuitable ? (
                <><CheckCircle2 size={14} className="icon-success" /> Suitable</>
              ) : (
                <><XCircle size={14} className="icon-error" /> Not Suitable</>
              )}
            </div>
            {job.suitabilityNotes && (
              <div className="info-content">{job.suitabilityNotes}</div>
            )}
          </div>
        )}

        {/* Referral Information */}
        {job.hasReferral !== null && (
          <div className="info-section">
            <div className="info-label">
              <Users size={14} />
              {job.hasReferral ? 'Has Referral' : 'No Referral'}
            </div>
            {job.referralContact && (
              <div className="info-content">Contact: {job.referralContact}</div>
            )}
            {job.referralNotes && (
              <div className="info-content">{job.referralNotes}</div>
            )}
          </div>
        )}

        {/* Cold Email Status */}
        {job.coldEmailSent && (
          <div className="info-section">
            <div className="info-label">
              <Mail size={14} />
              Cold Email Sent
            </div>
            {job.coldEmailDate && (
              <div className="info-content">
                <Calendar size={12} /> {formatDate(job.coldEmailDate)}
              </div>
            )}
            {job.coldEmailRecipients.length > 0 && (
              <div className="info-content">
                To: {job.coldEmailRecipients.join(', ')}
              </div>
            )}
          </div>
        )}

        {/* Application Date */}
        {job.appliedDate && (
          <div className="info-section">
            <div className="info-label">
              <Calendar size={14} />
              Applied
            </div>
            <div className="info-content">{formatDate(job.appliedDate)}</div>
            {job.applicationMethod && (
              <div className="info-content">via {job.applicationMethod}</div>
            )}
          </div>
        )}

        {/* Follow-up */}
        {job.followUpDate && (
          <div className="info-section">
            <div className="info-label">
              <Clock size={14} />
              Follow-up
            </div>
            <div className="info-content">{formatDate(job.followUpDate)}</div>
          </div>
        )}

        {/* Interviews */}
        {job.interviewDates && job.interviewDates.length > 0 && (
          <div className="info-section">
            <div className="info-label">
              <Calendar size={14} />
              Interviews ({job.interviewDates.length})
            </div>
            {job.interviewDates.map((date, index) => (
              <div key={index} className="info-content">
                Round {index + 1}: {formatDate(date)}
              </div>
            ))}
          </div>
        )}

        {/* Final Outcome */}
        {job.finalOutcome && (
          <div className="info-section">
            <div className="info-label">
              <AlertCircle size={14} />
              Outcome
            </div>
            <div className="info-content outcome">
              {OUTCOME_LABELS[job.finalOutcome] || job.finalOutcome}
            </div>
          </div>
        )}
      </div>

      {/* Tags */}
      {job.tags && job.tags.length > 0 && (
        <div className="job-tags">
          {job.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="job-footer">
        <div className="added-by">Added by {job.addedBy}</div>
        <div className="job-date">
          {formatDate(job.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
