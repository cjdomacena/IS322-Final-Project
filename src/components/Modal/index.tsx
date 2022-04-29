import { depositToAccount } from '../../redux/AccountSlice';
import { useAppDispatch } from '../../redux/hooks';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { formatCurrency } from '../../utils';

export enum TransactionType {
  withdraw = 'Withdraw',
  deposit = 'Deposit',
}

type Props = {
  type: TransactionType;
  toggleModal: Dispatch<SetStateAction<boolean>>;
  account_name: string;
  account_id: string;
  balance: number;
};

const Modal = (props: Props) => {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (props.type === TransactionType.withdraw && props.balance < +amount) {
      setIsError(true);
      setAmount('');
      setDescription('');
    } else {
      const t = {
        amount: +amount,
        description: description,
        type: props.type,
        created_at: Math.floor(Date.now() / 1000),
        account_id: props.account_id,
      };
      dispatch(depositToAccount(t));
      props.toggleModal(false);
    }
  };

  return (
    <div className="fixed h-screen w-screen top-0 left-0 bg-neutral-900/20 dark:bg-neutral-900/50 grid place-items-center dark:text-neutral-100 text-neutral-900">
      <div className="max-w-96 w-96 h-auto bg-white dark:bg-neutral-900 border dark:border-neutral-700 rounded">
        <div className="dark:bg-neutral-700 bg-neutral-200 p-3 flex justify-between items-center">
          <h1 className="font-semibold">
            {props.account_name}: {props.type}
          </h1>
          <button onClick={() => props.toggleModal(false)}>
            <CgClose />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <label
              htmlFor="amount"
              className=" after:content-['*'] after:text-red-500 after:ml-0.5">
              Amount
            </label>
            <div className="w-full dark:bg-neutral-700 flex items-center rounded mt-2 bg-neutral-200">
              <p className="w-fit h-full p-3 dark:bg-neutral-600  rounded-l">
                <BsCurrencyDollar />
              </p>
              <input
                type="number"
                step="any"
                min="0.00"
                className="w-full dark:bg-neutral-700 bg-neutral-100 p-2 rounded-r focus:outline-none ml-1 appearance-none"
                placeholder={`Enter amount to ${props.type}`}
                value={amount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAmount(e.currentTarget.value)
                }
                required
              />
            </div>
            {isError ? (
              <p className="text-xs text-red-500 mt-2">
                Can't withdraw more that your available balance: {formatCurrency(props.balance)}
              </p>
            ) : null}
          </div>
          <div className="pb-4 px-4">
            <label htmlFor="amount" className="after:content-['*'] after:text-red-500 after:ml-0.5">
              Description
            </label>
            <div className="w-full dark:bg-neutral-700 flex items-center rounded mt-2">
              <input
                type="text"
                maxLength={30}
                className="w-full dark:bg-neutral-700 p-2 rounded-r focus:outline-none  appearance-none bg-neutral-100"
                placeholder={`Enter description`}
                value={description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDescription(e.currentTarget.value)
                }
                required
              />
            </div>
          </div>
          <div className="p-4 flex items-center gap-4">
            <button
              className="py-2 bg-violet-700 hover:bg-violet-500 w-full rounded transition-colors text-neutral-50 font-medium"
              type="submit"
              title="Submit">
              Submit
            </button>
            <button
              className="bg-neutral-700 rounded-full h-fit p-3 hover:bg-neutral-400 transition-colors text-neutral-50"
              type="button"
              title="Cancel"
              onClick={() => props.toggleModal(false)}>
              <CgClose />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
