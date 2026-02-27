import { useContext } from "react";
import { IssueContext } from "../context/IssueContext";
import IssueForm from "../components/IssueForm";

const CreateIssue = () => {
  const { addIssue } = useContext(IssueContext);

  return (
    <div>
      <h2>Create Issue</h2>
      <IssueForm onSubmit={addIssue} />
    </div>
  );
};

export default CreateIssue;
