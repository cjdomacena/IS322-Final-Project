import { depositToAccount } from '../../redux/AccountSlice';
import { useAppDispatch } from '../../redux/hooks';

export enum TransactionType {
  withdraw = 'Withdraw',
  deposit = 'Deposit',
}

type Props = {
  type: TransactionType;
};

const Modal = (props: Props) => {
  const dispatch = useAppDispatch();
  const transact = () => {

      const t = {
        amount: +294.12,
        description: 'Testing withdrawal',
        type: props.type,
        created_at: Math.floor(Date.now() / 1000),
        account_id: '1d74d7db-643b-4058-9b41-a26bf4e59d4b',
      };
	  dispatch(depositToAccount(t))
 
  };

  return <div><button onClick={transact}>Submit</button></div>;
};

export default Modal;
