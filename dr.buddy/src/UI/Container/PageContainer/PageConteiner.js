import "./pageContainer.css";

function PageConteiner(props) {
  return <section className="pageConteiner-cont">{props.children}</section>;
}

export default PageConteiner;
