import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
    <section className="taskList">
        {extraHeaderContent}
        <h2 className="container__header2">{title}</h2>
        {body}
    </section>

);

export default Section;