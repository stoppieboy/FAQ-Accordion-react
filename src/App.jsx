import './App.css'
import Question from './Question'

const questions = [
    {
        id: 1,
        title: "Is this a good product?",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore ma[oei awwenljh oanesvjh sovh osxime, assumenda"
    },
    {
        id: 2,
        title: "How much does it cost?",
        info: "Lorem ipsum dolor, sit amet consectetur adipisic lkafj kldsjfl jalk sjdflklskj dfalkjslf kjing elit. Qui facere in labore maxime, assumenda"
    },
    {
        id: 3,
        title: "When can i get it?",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in jlaksjdfljslkafl dksjfl jklj askjfldsj lfkj ls kjdflabore maxime, assumenda"
    },
];

function App() {
    
    return (
        <>
            <h1>FAQ/Accordion</h1>
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="questions">
                    {questions.map((question) => (
                        <Question key={question.id} question={question}></Question>
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
