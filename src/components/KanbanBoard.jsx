import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { JOB_STAGES, STAGE_LABELS, STAGE_COLORS } from '../types/job';
import JobCard from './JobCard';
import './KanbanBoard.css';

const KanbanBoard = ({ jobs, onMoveJob, onEditJob, onDeleteJob }) => {
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // Dropped outside a valid droppable
    if (!destination) {
      return;
    }

    // Dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Move job to new stage
    const jobId = draggableId;
    const newStage = destination.droppableId;
    onMoveJob(jobId, newStage);
  };

  const getJobsByStage = (stage) => {
    return jobs.filter(job => job.stage === stage);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="kanban-board">
        {Object.values(JOB_STAGES).map((stage) => {
          const stageJobs = getJobsByStage(stage);
          return (
            <div key={stage} className="kanban-column">
              <div 
                className="column-header"
                style={{ backgroundColor: STAGE_COLORS[stage] }}
              >
                <h3>{STAGE_LABELS[stage]}</h3>
                <span className="job-count">{stageJobs.length}</span>
              </div>

              <Droppable droppableId={stage}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`column-content ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                  >
                    {stageJobs.length === 0 ? (
                      <div className="empty-column">
                        No jobs in this stage
                      </div>
                    ) : (
                      stageJobs.map((job, index) => (
                        <Draggable
                          key={job.id}
                          draggableId={job.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`draggable-item ${snapshot.isDragging ? 'dragging' : ''}`}
                            >
                              <JobCard
                                job={job}
                                onEdit={() => onEditJob(job)}
                                onDelete={() => onDeleteJob(job.id)}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
