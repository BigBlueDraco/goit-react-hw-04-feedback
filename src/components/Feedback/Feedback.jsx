import PropTypes from 'prop-types';

import { Button } from 'components/Button/Button';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import React from 'react';

export class Feedback extends React.Component{

    constructor(props){
        super(props);
        const state = this.props.feedbackOptions.reduce((acc, elem) =>{
            const obj = {[elem]: 0}
            return{...acc, ...obj}
        }, {});
        this.state = {...state};
    }
    onLeaveFeedback = (e) => {
        this.setState(state => ({ 
            [e.target.textContent]: state[e.target.textContent]+1, 
        }))
    }

    percentage = (id) => {
        const total = Object.values(this.state).reduce((acc, elem)=>{
            return acc+elem;
        }, 0);
        if(total <= 0) return 0; 
        return Math.round(this.state[id]/total*10000)/100 ;
    }
    render(){
        return(
        <>
        <Section title={this.props.feedbackTitle}>
            <div className='feedback-wrap'>
                {this.props.feedbackOptions.map(elem=>(
                    <Button key ={elem} func = {this.onLeaveFeedback} text = {elem}/>
                ))}
            </div>
        </Section>
        
        <Section title={this.props.statisticTitle} >
            <Statistics  
                names={Object.keys(this.state)}
                values={Object.values(this.state)}
                percentageOptions = {{iDs: this.props.percentageOptions, func: this.percentage}}  />
        </Section>
        
        </>
    );
    }
    
}

Feedback.propTypes = {
    statisticTitle: PropTypes.string,
    feedbackTitle: PropTypes.string,
    feedbackOptions: PropTypes.arrayOf(PropTypes.string,).isRequired,
    percentageOptions: PropTypes.arrayOf(PropTypes.string,),
}