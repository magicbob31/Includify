import { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import FileDropZone from "../components/FileDropZone";
import Header from "../components/Header";
import "./CvChange.scss";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [uploadedFile, setUploadedFile] = useState(null);
  const [processedFile, setProcessedFile] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        setProcessedFile(response.data.processedFileUrl);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="title">
        <h2>Processus de CV</h2>
      </div>
      <div className="content">
        <h2>Uploader votre CV</h2>
        <FileDropZone onDrop={handleDrop} />
      </div>
      <div className="content-processed">
        <h2>CV Retravaillé</h2>
        {processedFile ? (
          <a href={processedFile} download="CV_Retravaillé.pdf">
            Télécharger le CV retravaillé
          </a>
        ) : (
          <p>Votre CV retravaillé apparaîtra ici après traitement.</p>
        )}
      </div>
    </div>
  );
}

export default App;
