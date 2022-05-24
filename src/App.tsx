import './App.css';
// @ts-ignore
import Accordion from "./components/accordion/accordion.tsx";
// @ts-ignore
import Rating from "./components/raiting/raiting.tsx";

const App = () => {
    //debugger
    return (

        <div>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={1}/>
            <Accordion title={'Menu Article 1'} collapsed={true}/>
            Article 2
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={0}/>
            <Accordion title={'Menu Article 2'} collapsed={false}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
