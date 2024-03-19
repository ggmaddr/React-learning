import {EXAMPLES} from '../data/data-with-examples'
import TabButton from './TabButton'
import { useState } from 'react';

export default function Examples() {
    const [selectTopic, setSelectTopic] = useState("No Topic Selected")

    function handleSelect(selectButton){
        setSelectTopic(selectButton)
      }
    return (
        <>
            <section id="examples">
                {/* The argument to handleSelect (or selectTopic state) must match EXAMPLES obj's attributes because we'll use EXAMPLES[selectTopic]) */}
                {/* isSelect is for style (set className) in TabButton */}
                <menu>
                    <TabButton isSelect={selectTopic === "components"} onSelect={() => handleSelect('components')}>
                        Components
                    </TabButton>
                    <TabButton isSelect={selectTopic === "jsx"} onSelect={() => handleSelect('jsx')}>
                        JSX
                    </TabButton>
                    <TabButton isSelect={selectTopic === "props"} onSelect={() => handleSelect('props')}>
                        Props
                    </TabButton>
                    <TabButton isSelect={selectTopic === "state"} onSelect={() => handleSelect('state')}>
                        States
                    </TabButton>
                </menu>

            </section>

            <div id="tab-content">
                {selectTopic == "No Topic Selected" ? (
                    "Please select a topic."
                ) : (
                    <>
                        <h3>{EXAMPLES[selectTopic].title}</h3>

                        <p>{EXAMPLES[selectTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectTopic].code}</code>
                        </pre>
                    </>)}

            </div>

        </>
    )
}