import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import styles from '@/components/UploadAvatar/UploadAvatar.css';
import SpinnerLoader from '@/components/SpinnerLoader';
import IconProfile from '@/assets/images/icons/web/profile-image.svg';

const ONE_MEGA_BYTE = 1000000;
const MAX_SIZE = ONE_MEGA_BYTE * 10;

interface Props {
  imageTypes: string[];
  imageUrl?: string;
  maxSize: number;
  onChange: (e: any) => void;
  variablesClassName?: string;
}

type Error = {
  message: string;
  isVisible: boolean;
  action: () => void;
};

const UploadAvatar: React.FC<Props> = props => {
  const { variablesClassName, imageUrl, maxSize, imageTypes, onChange } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const initialError = {
    message: '',
    isVisible: false,
    action: () => undefined
  };

  const [imageSrc, setImageSrc] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isOverlayHovered, setIsOverlayHovered] = useState(false);
  const [error, setError] = useState<Error>(initialError);
  const maxSizeConfirured = maxSize ? maxSize * ONE_MEGA_BYTE : MAX_SIZE;
  const acceptedImageTypes = imageTypes
    .map(image => image)
    .join(', ')
    .replace(/(^,)|(,$)/g, '');

  const formatedAcceptedImageTypes = acceptedImageTypes.replace(/(image\/)/g, ' .');

  const isValidImageFormat = (image: File) => imageTypes.includes(image.type);

  const isValidImageSize = (image: File) => image.size <= maxSizeConfirured;

  const isValidImage = (image: File | null) =>
    !!image && isValidImageFormat(image) && isValidImageSize(image);

  const handleFileChange = async event => {
    const file = event.target?.files?.[0];
    setError(initialError);

    if (!file) return;
    setIsUploading(true);

    if (!isValidImageSize(file)) {
      setIsUploading(false);
      setError({
        isVisible: true,
        action: () => inputRef?.current?.click(),
        message: 'Image exceeded size limit'
      });
      return;
    }

    if (!isValidImageFormat(file)) {
      setIsUploading(false);
      setError({
        isVisible: true,
        action: () => inputRef?.current?.click(),
        message: `The file extension is not supported - only ${formatedAcceptedImageTypes}`
      });
      return;
    }

    if (isValidImage(file)) {
      setImageSrc(URL.createObjectURL(file));
      setIsUploading(false);
      onChange(event);
    }
  };

  useEffect(() => {
    if (imageUrl) {
      setImageSrc(imageUrl);
    }
  }, [imageUrl]);

  return (
    <>
      <div
        className={classnames(styles.container, variablesClassName)}
        onMouseEnter={() => setIsOverlayHovered(true)}
        onMouseLeave={() => setIsOverlayHovered(false)}
      >
        <input
          type='file'
          onChange={handleFileChange}
          accept={acceptedImageTypes}
          className={styles['upload-image-input']}
          ref={inputRef}
        />
        {!isUploading && imageSrc && (
          <img alt='' src={imageSrc} className={styles['upload-avatar']} />
        )}
        <div
          className={classnames(styles['image-overlay'], {
            [styles['has-image']]: !!imageSrc,
            [styles['image-empty']]: !imageSrc,
            [styles['is-uploading']]: isUploading
          })}
        >
          {isUploading ? (
            <>
              <SpinnerLoader />
              <p className={classnames(styles['image-overlay-text'])}>Uploading</p>
            </>
          ) : (
            <>
              <div className={styles['image-overlay-icon']}>
                <IconProfile
                  className={classnames(
                    styles['image-profile-icon'],
                    isOverlayHovered && styles['image-profile-icon-hover']
                  )}
                />
              </div>
              <p
                className={classnames(styles['image-overlay-text'], {
                  [styles['image-empty']]: !imageSrc
                })}
              >
                {`${maxSize}MB Max.`}
              </p>
              <p
                className={classnames(styles['image-overlay-text'], {
                  [styles['image-empty']]: !imageSrc
                })}
              >
                {`${formatedAcceptedImageTypes}`}
              </p>
            </>
          )}
        </div>
      </div>
      {error.isVisible && (
        <div className={styles['notification-container']}>
          <span className={styles['notification-message']}>{error.message}</span>
          <button
            className={styles['notification-button']}
            onClick={() => {
              error.action();
            }}
          >
            Try again
          </button>
        </div>
      )}
    </>
  );
};

UploadAvatar.defaultProps = {
  imageTypes: ['image/jpeg', 'image/jpg', 'image/png'],
  maxSize: 10
};

export default UploadAvatar;
