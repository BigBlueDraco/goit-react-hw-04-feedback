import React from "react";
import PropTypes from 'prop-types';

import s from 'components/Statistics/statistics.module.scss'

export const Statistics = ({names, values, percentageOptions:{iDs, func}}) => {
        return(
        <>
        {values.reduce((acc, elem)=>(acc+elem))?(
            <>
                <div className={s.statisticWrap}>
                {names.map((elem, index) => (
                    <StatisticItem key={elem} name={elem} value={values[index]}/>
                ))}
                </div>
                
                <div className={s.percentageWrap}>
                    {iDs.map(elem => (
                        <StatisticPercent key = {elem} name = {elem} value = {func(elem)} />
                    ))}
                </div>
            </>)

        :<span>No feedback</span> }
        </>     
        );
}

const StatisticItem = ({name, value}) =>{
    return(
        <span>{name}: {value}</span>
    )
}
const StatisticPercent = ({name, value}) => {
    return(
        <span>{name} feedback percentage: {value}%</span>
    )  
}

Statistics.propTypes ={
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
    percentageOptions: PropTypes.exact({
        iDs: PropTypes.arrayOf(PropTypes.string).isRequired,
        func: PropTypes.func.isRequired
    })
}