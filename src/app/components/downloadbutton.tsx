import React from "react";
import { Button } from "@mui/material";
const DownloadResumeButton: React.FC = () => {
  const handleDownload = () => {
    const resumeUrl = "/WenChenResume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownload}
      className="text-white hover:scale-110 hover:shadow-lg"
    >
      Download My Resume
    </Button>
  );
};

export default DownloadResumeButton;
