import React from "react";
import Modal from "react-modal";
const customStyles = {
    overlay: {
        backgroundColor: 'papayawhip'
    },
    content : {
        top                   : '18%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        overlay               : {zIndex: 100},
        color                 : 'lightsteelblue'
    }
};

export default class CustomizeChart extends React.Component {
    constructor(props){
        super(props);
        this.openModal=this.openModal.bind(this);
        this.afterOpenModal=this.afterOpenModal.bind(this);
        this.closeModal=this.closeModal.bind(this);
        this.state={  modalIsOpen: true}

    }
    openModal() {this.setState({modalIsOpen: true})}
    afterOpenModal() {}
    closeModal(){
        this.setState({modalIsOpen:false});
            var wMa = document.getElementById("wMaa").value;
            if(!wMa){ console.log('no wma');wMa=10; console.log(wMa)}else{(console.log(wMa));}
            var eMa = document.getElementById("eMaa").value;
            if(!eMa){console.log('no ema');eMa=20}else{(console.log(eMa));}
            var sMa = document.getElementById("sMaa").value;
            if(!sMa){console.log('no sma');sMa=10}else{(console.log(sMa));}
            var aTr = document.getElementById("aTrr").value;
            if(!aTr){console.log('no atr');aTr=14}else{(console.log(aTr));}
            var macDSlow = document.getElementById("macDSloww").value;
            if(!macDSlow){console.log('no macdSlow');macDSlow=26}else{(console.log(macDSlow));}
            var macDFast = document.getElementById("macdFastt").value;
            if(!macDFast){console.log('no macdFast');macDFast=12}else{(console.log(macDFast));}
            var macDSignal = document.getElementById("macdSignall").value;
            if(!macDSignal){console.log('no macdSignal');macDSignal=9}else{(console.log(macDSignal));}
            var rsIPeriod = document.getElementById("rsIPeriodd").value;
            if(!rsIPeriod){console.log('no rsi period');rsIPeriod=14}else{(console.log(rsIPeriod));}



    }
    render(){
        return(
        <div>
               {/* <button onClick={this.openModal}>Customize charts</button>*/}
                <Modal

                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Customize charts"
                    shouldCloseOnOverlayClick={true}>
                    {/*<h2 ref="subtitle">Customize indicator</h2>

                    */}


                    <center><div>Indicators:</div></center>
                        <form>
                        SMA period: <input className="form-group" size="4" id="sMaa"  /> EMA period: <input className="form-group" size="4" id="eMaa"/> WMA period: <input className="form-group"  size="4" id="wMaa" /><br/>
                        MACD Slow: <input className="form-group" size="4" id="macDSloww"/> Fast: <input className="form-group" size="4" id="macdFastt"/> Signal: <input className="form-group" size="4" id="macdSignall"/><br/>
                            RSI period: <input size="4" id="rsIPeriodd" /> ATR period: <input size="4" id="aTrr"/> <br/>
                            <center><button onClick={this.closeModal}>Submit</button></center>

                        </form>
                    </Modal>
          </div>
            );
    }
}