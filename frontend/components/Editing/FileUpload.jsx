/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
  fileTooLarge,
  fileTooLargeKnowMore,
  issueKnowMore,
  tooManyFileUpload,
  genericError,
  fileConfig,
  dropzoneWriteup,
} from '../../constants/writeups/index';
import { generateAPIKey } from '../../utils/generateAPIKey';

// 1 B to 10MB limit
const FileUpload = (props) => {
  const [progress, updateProgress] = useState(0);
  const [uploadStarted, setUploadStarted] = useState(false);
  const { callback } = props;
  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();
      if (acceptedFiles[0].size > 10 * 1024 * 1024) {
        Swal.fire({
          icon: 'error',
          title: fileTooLargeKnowMore.title,
          text: fileTooLargeKnowMore.text,
          footer: `<a href=${fileTooLargeKnowMore.link}>${issueKnowMore}</a>`,
        });
        return;
      }
      formData.append('image', acceptedFiles[0]);
      formData.append('apiKey', generateAPIKey());
      if (!uploadStarted) {
        setUploadStarted(true);
      }
      axios({
        method: 'post',
        url: '/upload/single',
        data: formData,
        onUploadProgress(progressEvent) {
          updateProgress(
            Math.round((progressEvent.loaded * 100) / progressEvent.total),
          );
        },
      })
        .then((res) => {
          setUploadStarted(false);
          const { data } = res;
          const { url, fileName } = data;
          callback(url, fileName);
        })
        .catch((err) => {
          if (err.response.status === 413) {
            Swal.fire({
              icon: 'error',
              title: fileTooLargeKnowMore.title,
              text: fileTooLargeKnowMore.text,
              footer: `<a href=${fileTooLargeKnowMore.link}>${issueKnowMore}</a>`,
            });
          } else if (err.response.status === 429) {
            Swal.fire({
              icon: 'error',
              title: tooManyFileUpload.title,
              text: `${err.response.data}`,
              footer: `<a href=${tooManyFileUpload.link}>${issueKnowMore}</a>`,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: `${err.message}`,
              text: genericError.text,
              footer: `<a href=${genericError.link}>${issueKnowMore}</a>`,
            });
          }
        });
    }
  };

  return (
    <>
      {uploadStarted && (
        <LinearProgress
          variant="determinate"
          value={progress}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
      )}
      <Dropzone
        onDrop={handleDrop}
        accept={fileConfig.accept}
        minSize={fileConfig.minSize}
        maxSize={fileConfig.maxSize}
        maxFiles={fileConfig.maxFiles}
        multiple={false}
        canCancel={false}
        style={{ marginBottom: '4rem' }}
      >
        {({
          getRootProps,
          getInputProps,
          isDragAccept,
          isDragReject,
          fileRejections,
        }) => {
          // additional CSS depends on dragging status
          // eslint-disable-next-line no-nested-ternary
          const additionalClass = isDragAccept
            ? 'accept'
            : isDragReject
            ? 'reject'
            : '';

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`,
              })}
            >
              {fileRejections.length > 0 && (
                <Alert severity="error">{fileTooLarge}</Alert>
              )}
              <input {...getInputProps()} />
              <p>{dropzoneWriteup}</p>
            </div>
          );
        }}
      </Dropzone>
    </>
  );
};
FileUpload.propTypes = {
  callback: PropTypes.func.isRequired,
};
export { FileUpload };
