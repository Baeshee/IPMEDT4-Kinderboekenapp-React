import React, { Component } from "react";

// import {DummyData} from './DummyData.js';

import { ImageVraag, ImageAntwoord, ImageUnavailable} from "./Vragen/ImageVraag";

class Test extends Component {

    state = { dummy: [
        {
            "book_isbn": 9789000339280,
            'assignment_position': 1,
            "assignment": 'Hieronder kun jij een kleur kiezen. Zoek de mooiste kleur uit en geef hem net zo’n bijzondere naam. Bedenk daarvoor dus goed waar de kleur jou precies aan doet denken.',
            'kind_of_assignment': 'color',
            'status': 'inactive',
        },
        {
            "book_isbn": 9789000339280,
            'assignment_position': 1,
            "assignment": 'Hieronder kun jij een kleur kiezen. Zoek de mooiste kleur uit en geef hem net zo’n bijzondere naam. Bedenk daarvoor dus goed waar de kleur jou precies aan doet denken.',
            'kind_of_assignment': 'text',
            'status': 'active',
        },
        {
            "book_isbn": 9789000339280,
            'assignment_position': 1,
            "assignment": 'Hieronder kun jij een kleur kiezen. Zoek de mooiste kleur uit en geef hem net zo’n bijzondere naam. Bedenk daarvoor dus goed waar de kleur jou precies aan doet denken.',
            'kind_of_assignment': 'color',
            'status': 'completed',
        },
        {
            "book_isbn": 9789000339280,
            'assignment_position': 1,
            "assignment": 'Hieronder kun jij een kleur kiezen. Zoek de mooiste kleur uit en geef hem net zo’n bijzondere naam. Bedenk daarvoor dus goed waar de kleur jou precies aan doet denken.',
            'kind_of_assignment': 'image',
            'status': 'active',
        },
        {
            "book_isbn": 9789000339280,
            'assignment_position': 1,
            "assignment": 'Hieronder kun jij een kleur kiezen. Zoek de mooiste kleur uit en geef hem net zo’n bijzondere naam. Bedenk daarvoor dus goed waar de kleur jou precies aan doet denken.',
            'kind_of_assignment': 'color',
            'status': 'inactive',
        },
    ]}

    // createAssignments = () =>{    
    //     let vragen = [];      
    //         this.state.dummy.map((assignment, i) => {
    //             switch(assignment.kind_of_assignment){
    //                 case "color":
    //                     switch(assignment.status){
    //                         case "active":
    //                             return vragen[i] = ImageVraag;
    //                         case "completed":
    //                             return vragen[i] = "color_completed";
    //                         default:
    //                             return vragen[i] = "color_unavailable";
    //                     }
    //                 case "image":
    //                     switch(assignment.status){
    //                         case "active":
    //                             return vragen[i] = ImageVraag;
    //                         case "completed":
    //                             return vragen[i] = "image_completed";
    //                         default:
    //                             return vragen[i] = "image_unavailable";
    //                     }
    //                 case "text":
    //                     switch(assignment.status){
    //                         case "active":
    //                             return vragen[i] = ImageVraag;
    //                         case "completed":
    //                             return vragen[i] = "text_completed";
    //                         default:
    //                             return vragen[i] = "text_unavailable";
    //                     }  
    //                 default:
    //                     return vragen[i] = "no special one";
    //             }
    //         });
    //     console.log(vragen);
    // }

    // componentDidMount(){
    //     this.createAssignments();
    // }
    

        
    render() {
            return (
                <article className="assignments">
                    {/* <section className="assignment-container">
                        <h2>
                            Maak een foto van jezelf met je hoed op en upload deze.
                        </h2>
                        <form action="">
                            <label className="form__label" htmlFor="color">Jouw kleur</label>
                            <input className="form__input color" type="color" id="color" name="color"/>
                            <label className="form__label" htmlFor="answer_1">De naam van jouw kleur</label>
                            <input className="form__input text" type="text" if="answer_1" name="answer_1" />
                        </form>
                    </section> */}
                    {this.state.dummy.map((assignment, i) => {
                        switch(assignment.kind_of_assignment){
                            case "color":
                                switch(assignment.status){
                                    case "active":
                                        return <ImageVraag key={i} />;
                                    case "completed":
                                        return <ImageVraag key={i} />;
                                    default:
                                        return <ImageVraag key={i} />;
                                }
                            case "image":
                                switch(assignment.status){
                                    case "active":
                                        return <ImageVraag key={i} />;
                                    case "completed":
                                        return <ImageVraag key={i} />;
                                    default:
                                        return <ImageVraag key={i} />;
                                }
                            case "text":
                                switch(assignment.status){
                                    case "active":
                                        return <ImageVraag key={i} />;
                                    case "completed":
                                        return <ImageVraag key={i} />;
                                    default:
                                        return <ImageVraag key={i} />;
                                }  
                            default:
                                return <ImageVraag key={i} />;
                        }
                    })}

                </article>
            );
        }
    }

export default Test;