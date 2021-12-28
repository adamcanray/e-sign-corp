import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={[
        `px-2 py-3 hover:bg-white/20 text-white font-bold flex items-center`,
        match ? `line-through text-gray-400` : `bg-transparent`,
      ].join(" ")}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
