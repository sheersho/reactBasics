
import React from 'react';
import './User.css';


const userOutput = (props) => {

    return (
    
       <div >

        <h3>username: {props.username}</h3>
        <p className="User">Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
        </p>
        <p className="User">
            Let’s walk through a 5-step process for building a paragraph. For each step there is an explanation and example. Our example paragraph will be about slave spirituals, the original songs that African Americans created during slavery. The model paragraph uses illustration (giving examples) to prove its point.
        </p>
        </div>

    )
    
}

export default userOutput;
