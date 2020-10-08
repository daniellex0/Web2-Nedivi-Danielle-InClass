import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Essays from './Essays.jsx';
import Template from '../../Shared/Template.jsx';

const Homework = () => {

    // ... functional component logic

    return (
        <HomeworkStyled>
            <Template
                title='Welcome'
                aside={ false }
            >
                <Essays essays={ essays }/>
            </Template> 
        </HomeworkStyled>
    )
}

export default Homework;

const HomeworkStyled = styled.div`
    padding: 20px;
    border: dashed teal 5px;
    background-color: #ccc;
`;

const essays = [
    {
        title: '01',
        question: 'What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                    Single Page Apps (SPAs) are web applications that consist of just a single page. Instead of reloading every time a user interacts with the site 
                (communicating with the server and taking up more bandwidth), 
                this version of a web app processes all of the interactions immediately 
                without reloading the page. Many major web apps today are Single Page, 
                including Twitter, Facebook, and Gmail.                    
                    </p>
                    <p>
                    These differ from a multi-page app (MPA), which consists of several pages 
                and always needs to reload when users interact with it. SPAs are easier 
                to debug, faster, a smoother experience for users, and simple to transition 
                into a mobile app with the same backend code. However, MPAs have better SEO 
                (search engine optimization), although there has been progress on this front 
                with SPAs more recently. SPAs are also much less complex to develop than MPAs.                     
                    </p>
                    <p>
                    Ultimately, websites that are content-heavy and need many different categories/pages 
                may be better suited for MPAs, while SPAs work well for all other sites. 
                However there is now also an option for a Hybrid site - which is really a 
                Single Page App with an option for multiple pages built in.                    
                </p>
                </div>
            );
        }
    },
    {
        title: '02',
        question: 'In React, what does prop drilling mean..? etc.',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat commodi soluta ipsum eligendi. Quas provident, excepturi illo doloremque accusamus, porro at dolor asperiores voluptas perferendis laborum explicabo maiores reiciendis repellat.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, quae enim? Incidunt consequatur quod tempore consectetur! Ducimus magnam incidunt laudantium nulla cupiditate quas eius distinctio voluptatum iusto similique. At, quaerat?
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, quae enim? Incidunt consequatur quod tempore consectetur! Ducimus magnam incidunt laudantium nulla cupiditate quas eius distinctio voluptatum iusto similique. At, quaerat?
                    </p>
                </div>
            );
        }
    }
];