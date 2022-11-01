const { default: Modal } = require('components/commons/Modal');
const { COLORS } = require('helpers/enums/colors');
const React = require('react');
const { default: ProjectForm } = require('views/DashboardView/ProjectForm');

const NewProjectModal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => onClose()}
      backgroundColor={COLORS.WildSand}
    >
      <ProjectForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default NewProjectModal;
