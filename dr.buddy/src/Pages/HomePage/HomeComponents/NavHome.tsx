const Link = (props: { title: string }): JSX.Element => {
  return <a href="">{props.title}</a>;
};

export const Nav = () => {
  return (
    <nav className="homeNav">
      <Link title="Home" />
      <Link title="Menù" />
      <Link title="Contacts" />
      <Link title="Home" />
    </nav>
  );
};
