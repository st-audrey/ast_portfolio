export default function NavLink(props) {
  return (
    <a href={props.link_href} className="text-base font-orbit font-semibold">
      {props.link_name}
    </a>
  );
}
