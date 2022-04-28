import { Link, useMatch, useResolvedPath } from 'react-router-dom';
type Props = {
  text: string;
  path: string;
  svgIcon: JSX.Element;
};

const ListItem = (props: Props) => {
  const resolved = useResolvedPath(props.path);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={props.path}>
      <li
        className={`p-2 dark:hover:bg-neutral-900 rounded hover:bg-gray-300 text-neutral-800 dark:text-white transition-colors my-2 flex items-center gap-2 ${match ? ' dark:bg-neutral-900 bg-gray-300 font-bold' : null}`}>
          {props.svgIcon}
          {props.text}
      </li>
    </Link>
  );
}

export default ListItem;