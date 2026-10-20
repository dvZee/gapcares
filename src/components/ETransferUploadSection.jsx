import React, { useState, useRef } from 'react';
import { siteConfig } from '../data/therapyData';

export default function ETransferUploadSection({
  onFileSelect,
  compact = false,
  title = "Payment via Interac e-Transfer",
  description = "Send your session fee or deposit via Interac e-Transfer to the official practice email:",
  optional = true
}) {
  const [copied, setCopied] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef(null);

  const eTransferEmail = siteConfig.eTransferEmail || siteConfig.email;

  const handleCopy = () => {
    navigator.clipboard.writeText(eTransferEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const processFile = (file) => {
    setErrorMsg('');
    if (!file) return;

    // Validate size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('File size must be under 10MB.');
      return;
    }

    // Validate type (images and pdf)
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/jpg', 'application/pdf'];
    if (!validTypes.includes(file.type) && !file.name.match(/\.(jpg|jpeg|png|webp|heic|pdf)$/i)) {
      setErrorMsg('Please upload an image screenshot (.jpg, .png, .webp) or PDF.');
      return;
    }

    setSelectedFile(file);

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }

    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
    setPreviewUrl(null);
    setErrorMsg('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (onFileSelect) {
      onFileSelect(null);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className={`etransfer-box ${compact ? 'etransfer-compact' : ''}`}>
      {/* Header with Interac Badge */}
      <div className="etransfer-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span className="etransfer-badge">Interac e-Transfer</span>
          <span className="etransfer-autodeposit">✓ Auto-Deposit Enabled</span>
        </div>
      </div>

      <div className="etransfer-title">{title}</div>
      <p className="etransfer-desc">{description}</p>

      {/* Email Copy Card */}
      <div className="etransfer-email-card">
        <div className="etransfer-email-wrap">
          <span className="etransfer-email-label">e-Transfer Recipient Email</span>
          <span className="etransfer-email-address">{eTransferEmail}</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="etransfer-copy-btn"
          aria-label="Copy e-transfer email address"
        >
          {copied ? '✓ Copied!' : 'Copy Email'}
        </button>
      </div>

      <div className="etransfer-note">
        <span>No security question or password required (funds deposit automatically into George &amp; Assenoth Psychotherapy account).</span>
      </div>

      {/* Upload Screenshot Dropzone */}
      <div className="etransfer-upload-wrapper">
        <div className="etransfer-upload-label">
          <span>Upload e-Transfer Confirmation Screenshot</span>
          {optional && <span className="etransfer-optional-tag">(Optional)</span>}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          id="etransfer-screenshot-input"
          accept="image/png, image/jpeg, image/jpg, image/webp, application/pdf"
          onChange={handleFileInput}
          style={{ display: 'none' }}
        />

        {!selectedFile ? (
          <div
            className={`etransfer-dropzone ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                fileInputRef.current && fileInputRef.current.click();
              }
            }}
          >
            <div className="dropzone-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <div className="dropzone-text">
              <span className="dropzone-primary-text">Click to upload screenshot</span> or drag &amp; drop
            </div>
            <div className="dropzone-subtext">
              PNG, JPG, WEBP, or PDF (Max 10MB)
            </div>
          </div>
        ) : (
          <div className="etransfer-file-preview-card">
            <div className="file-info-col">
              {previewUrl ? (
                <img src={previewUrl} alt="e-Transfer confirmation screenshot preview" className="file-thumb" />
              ) : (
                <div className="file-icon-pdf">PDF</div>
              )}
              <div className="file-meta">
                <div className="file-name" title={selectedFile.name}>{selectedFile.name}</div>
                <div className="file-size">{formatFileSize(selectedFile.size)} • Screenshot Attached ✓</div>
              </div>
            </div>

            <button
              type="button"
              className="file-remove-btn"
              onClick={handleRemoveFile}
              aria-label="Remove screenshot"
              title="Remove screenshot"
            >
              ✕ Remove
            </button>
          </div>
        )}

        {errorMsg && (
          <div className="etransfer-error-text">
            ⚠️ {errorMsg}
          </div>
        )}
      </div>
    </div>
  );
}
