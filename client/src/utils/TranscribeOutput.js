import React from "react";

const useStyles = () => ({
  root: {
    maxWidth: '800px',
    display: 'flex'
  },
  outputText: {
    marginLeft: '8px',
    color: '#ef395a',
  }
});

const TranscribeOutput = ({ transcribedText, interimTranscribedText}) => {
  if (transcribedText.length === 0 && interimTranscribedText.length === 0) {
    return <p variant="body1">...</p>;
  }

  return (
    <div className={"text-base"}>
      <p variant="body1">{transcribedText}</p>
      <p className={""} variant="body1">{interimTranscribedText}</p>
    </div>
  )
}

export default TranscribeOutput;
