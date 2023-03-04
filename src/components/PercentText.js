import React from "react";


class PercentText extends React.Component{
    render(){
        // @ts-ignore
        var percentValueFormatted = (this.props.amount * this.props.percent).toFixed(2).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
        var percentFormatted = this.props.percent.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
        return(<div><p>{percentFormatted} percent is {percentValueFormatted}</p></div>)
    }
}

export default PercentText;