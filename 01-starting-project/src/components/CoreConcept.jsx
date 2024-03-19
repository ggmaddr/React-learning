import {CORE_CONCEPTS} from '../data/data-with-examples'

function CoreConcept({image, title, description}){
    return(
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}
export default function CoreConcepts(){
    return(
        <>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                {CORE_CONCEPTS.map((coreConcept)=>
                (<CoreConcept {...coreConcept}/>
                ))}
                <CoreConcept 
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
                />
                <CoreConcept {...CORE_CONCEPTS[1]}/>
                <CoreConcept {...CORE_CONCEPTS[2]}/>
                <CoreConcept {...CORE_CONCEPTS[3]}/>
                </ul>
            </section>
        </>)
}