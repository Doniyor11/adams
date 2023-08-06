import React from 'react';
import {useTranslation} from 'react-i18next';

interface IModalProps {
  onclose: () => void;
}

const Modal = ({ onclose }: IModalProps) => {
  const { t } = useTranslation();
  return (
    <>
     Modal
    </>
  );
};
// eslint-disable-next-line import/no-default-export
export default Modal;
