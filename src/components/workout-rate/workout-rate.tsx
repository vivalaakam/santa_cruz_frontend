import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { Button, Icons, Modal, TextArea } from '../ui';
import { WorkoutRateProps, WorkoutRateRef } from './types';
import { commentField, container, rates, title } from './styled';
import { RateButton } from './rate-button';

const ratios = [
  ['rate_1', 'disgusting', 1],
  ['rate_2', 'bad', 2],
  ['rate_3', 'normal', 3],
  ['rate_4', 'god', 4],
  ['rate_5', 'excellent', 5],
];

export const WorkoutRate = forwardRef<WorkoutRateRef, WorkoutRateProps>(({ onSubmit }, ref) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState('');

  useImperativeHandle(ref, () => ({
    showModal: () => {
      setModalOpen(true);
    },
    hideModal: () => {
      setModalOpen(false);
    },
  }));

  const onCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const onClickSubmit = useCallback(() => {
    onSubmit({ comment, rate });
  }, [comment, rate]);

  const onClickRate = useCallback((ratio) => {
    setRate(ratio);
  }, []);

  const onChangeComment = useCallback((e) => {
    setComment(e.target.value);
  }, []);

  return (
    <Modal isOpen={modalOpen} handleClose={onCloseModal} className={container}>
      <h3 className={title}>How is your training?</h3>
      <div className={rates}>
        {ratios.map((item) => (
          <RateButton
            key={item[1]}
            icon={item[0] as Icons}
            onClick={onClickRate}
            active={rate}
            index={item[2]}
          />
        ))}
      </div>
      <TextArea className={commentField} value={comment} onChange={onChangeComment} />
      <Button onClick={onClickSubmit}>Submit</Button>
      <Button onClick={onCloseModal}>Skip</Button>
    </Modal>
  );
});
