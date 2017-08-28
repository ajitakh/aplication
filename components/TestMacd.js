import React from "react";
import * as ReStock from "react-stockcharts";
import MacdChart from "./MacdChart";
var { ChartCanvas, Chart, series, scale, coordinates, tooltip, axes, indicator, helper } = ReStock;

var { CandlestickSeries, BarSeries, LineSeries, AreaSeries, MACDSeries,BollingerSeries ,RSISeries } = series;
var { discontinuousTimeScaleProvider } = scale;

var { CrossHairCursor, MouseCoordinateX, MouseCoordinateY, CurrentCoordinate } = coordinates;
var { EdgeIndicator } = coordinates;

var { OHLCTooltip, MovingAverageTooltip, MACDTooltip,BollingerBandTooltip,RSITooltip } = tooltip;

var { XAxis, YAxis } = axes;
var { macd, ema, sma , bollingerBand,rsi} = indicator;

var { fitWidth, TypeChooser } = helper;
export default class TestMacd extends React.Component {
constructor(props) {
super(props);
this.handleClickk=this.handleClickk.bind(this);
this.rsiClick=this.rsiClick.bind(this);
this.state={
showRsi: false,
showMacd: false
}
}

handleClickk(){
console.log('handleClickk in child');
{this.props.changeEMA(25)}

}
rsiClick(){
this.setState({showRsi: !this.state.showRsi})
}

render() {
var {type,ratio,width,data, eMa, eMa1, sMa, macDSlow, macDFast, macDSignal, rsIPeriod}= this.props;

var ema20 = ema()
.windowSize(20) // optional will default to 10
.sourcePath("close") // optional will default to close as the source
.skipUndefined(true) // defaults to true
.merge((d, c) => {d.ema20 = c}) // Required, if not provided, log a error
.accessor(d => d.ema20) // Required, if not provided, log an error during calculation
.stroke("blue") // Optional

var sma20 = sma()
.windowSize(sMa)
.sourcePath("close")
.merge((d, c) => {d.sma20 = c})
.accessor(d => d.sma20)
.stroke("green")

var ema50 = ema()
.windowSize(50)
.sourcePath("close")
.merge((d, c) => {d.ema50 = c})
.accessor(d => d.ema50)
.stroke("orange")

var ema26 = ema()
.id(0)
.windowSize(eMa)
.merge((d, c) => { d.ema26 = c; })
.accessor(d => d.ema26)
.stroke("red");

var ema12 = ema()
.id(1)
.windowSize(eMa1)
.merge((d, c) => {d.ema12 = c;})
.accessor(d => d.ema12)
.stroke("purple");


var macdCalculator = macd()
.fast(macDFast)
.slow(macDSlow)
.signal(macDSignal)
.merge((d, c) => {d.macd = c;})
.accessor(d => d.macd);

var rsiCalculator = rsi()
.windowSize(rsIPeriod)
.merge((d, c) => {d.rsi = c})
.accessor(d => d.rsi);

var smaVolume50 = sma()
.id(3)
.windowSize(10)
.sourcePath("volume")
.merge((d, c) => {d.smaVolume50 = c;})
.accessor(d => d.smaVolume50);
var bb = bollingerBand()
.merge((d, c) => {d.bb = c})
.accessor(d => d.bb);



return (
<div>
    <button style={{marginLeft:30}} onClick={this.handleClickk}>change ema</button>
    <div>{this.state.showRsi && <h1>rsi clicked</h1>}</div>

    <ChartCanvas ratio={ratio} width={width} height={600}
                 margin={{ left: 70, right: 70, top: 20, bottom: 30 }} type={type}
                 seriesName="MSFT"
                 data={data} calculator={[ema26, ema12, smaVolume50,ema20,ema50,sma20,bb, rsiCalculator,macdCalculator]}
                 xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}>



                <MacdChart macDFast={macDFast} macDSlow={macDSlow} macDSignal={macDSignal} />


                <CrossHairCursor />
                </ChartCanvas>
</div>

);
}
};

TestMacd.propTypes = {
data: React.PropTypes.array,
width: React.PropTypes.number,
type: React.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

TestMacd.defaultProps = {
type: "svg",
};

TestMacd = fitWidth(TestMacd);



