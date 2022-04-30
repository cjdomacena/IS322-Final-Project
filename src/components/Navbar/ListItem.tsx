import { Link, useMatch, useResolvedPath } from 'react-router-dom';
type Props = {
  text: string;
  path: string;
  svgIcon: JSX.Element;
  minimized: boolean
};

const ListItem = (props: Props) => {
  const resolved = useResolvedPath(props.path);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={props.path} title={props.text}>
      <li
        className={`p-2 dark:hover:bg-neutral-900 rounded hover:bg-gray-300 transition-colors my-2 flex items-center gap-2  ${match ? ' dark:bg-neutral-900 bg-gray-300 font-bold dark:text-neutral-50 text-neutral-900' : 'text-neutral-500 dark:text-neutral-500'} ${props.minimized ? 'w-fit mx-auto' : 'w-auto'}`}>
          {props.svgIcon}
        {props.minimized ? null : props.text}
      </li>
    </Link>
  );
}

export default ListItem;