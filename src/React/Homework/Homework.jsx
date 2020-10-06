import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Essays from './Essays.jsx';

const Homework = () => {

    // ... functional component logic

    return (
        <HomeworkStyled>
            <h2>Homework</h2>
            <Essays essays={ essays }/>
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
        question: 'Question 1 goes here.',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, quae enim? Incidunt consequatur quod tempore consectetur! Ducimus magnam incidunt laudantium nulla cupiditate quas eius distinctio voluptatum iusto similique. At, quaerat?
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
    },
    {
        title: '02',
        question: 'Question 2 goes here.',
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