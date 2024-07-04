/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDropzone } from "react-dropzone";

function FileDropZone({ onDrop }) {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    // eslint-disable-next-line no-use-before-define
    <div {...getRootProps()} style={styles.dropzone}>
      <input {...getInputProps()} />
      <p>Déposez votre CV ici, ou cliquez pour sélectionner le fichier</p>
    </div>
  );
}

const styles = {
  dropzone: {
    border: "2px dashed #cccccc",
    borderRadius: "5px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
  },
};

export default FileDropZone;
