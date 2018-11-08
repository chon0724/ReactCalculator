import React from 'react';

class Cul extends React.Component{

    state = {
        value: ''
    }

    inputadd = (e) => {
        this.setState({
            value: this.state.value += e
        })
    }

    calculrate = () => {
        const calnumber = this.state.value // 값이 들어왔다
        const lastChar = calnumber.substr(calnumber.length - 1);
        if(isNaN(lastChar) == false){
        let result = eval(calnumber) // 최종 
        this.setState({
            value: result
        })
        }else{
            alert("잘못된 계산!");
        }
    }

    acreset = (e) => {
        this.setState({
            value: ''
        })
    }

    render() {
        return (
          <div className="mainTable">
            <table>
                <tr>
                  <td colSpan="4">
                    <input value={this.state.value}/>
                  </td>
                </tr>
                <tbody>
                <tr className="nums">
                    <td colSpan="2" className="topline" onClick={()=>this.acreset()}>AC</td>
                    <td className="topline" onClick={()=>this.inputadd("%")}>%</td>
                    <td className="spe" onClick={()=>this.inputadd("/")}>/</td>
                    
                </tr>
                <tr className="nums">
                    <td onClick={()=>this.inputadd(7)}>7</td>
                    <td onClick={()=>this.inputadd(8)}>8</td>
                    <td onClick={()=>this.inputadd(9)}>9</td>
                    <td className="spe"onClick={()=>this.inputadd("*")}>*</td>
                </tr>
                <tr className="nums">
                    <td onClick={()=>this.inputadd(4)}>4</td>
                    <td onClick={()=>this.inputadd(5)}>5</td>
                    <td onClick={()=>this.inputadd(6)}>6</td>
                    <td className="spe" onClick={()=>this.inputadd("-")}>-</td>
                </tr>
                <tr className="nums">
                    <td onClick={()=>this.inputadd(1)}>1</td>
                    <td onClick={()=>this.inputadd(2)}>2</td>
                    <td onClick={()=>this.inputadd(3)}>3</td>
                    <td className="spe"onClick={()=>this.inputadd("+")}>+</td>
                </tr>
                <tr className="nums">
                    <td colSpan="2" onClick={()=>this.inputadd(0)}>0</td>
                    <td onClick={()=>this.inputadd(".")}>.</td>
                    <td className="spe" onClick={()=>this.calculrate()}>=</td>
                </tr>
                </tbody>
            </table>
          </div>
        );
      }
}

export default Cul;