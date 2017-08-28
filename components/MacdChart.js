import React from "react";
import * as ReStock from "react-stockcharts";
/*var {ChartCanvas,Chart, series, scale, coordinates, tooltip, axes, indicator, helper} = ReStock;
var {MACDSeries}= series;
var { discontinuousTimeScaleProvider } = scale;
var { CrossHairCursor, MouseCoordinateX, MouseCoordinateY, CurrentCoordinate } = coordinates;
var { MACDTooltip } = tooltip;
var { XAxis, YAxis } = axes;
var {macd}= indicator;*/
var { ChartCanvas, Chart, series, scale, coordinates, tooltip, axes, indicator, helper } = ReStock;

var { CandlestickSeries, BarSeries, LineSeries, AreaSeries, MACDSeries,BollingerSeries ,RSISeries } = series;
var { discontinuousTimeScaleProvider } = scale;

var { CrossHairCursor, MouseCoordinateX, MouseCoordinateY, CurrentCoordinate } = coordinates;
var { EdgeIndicator } = coordinates;

var { OHLCTooltip, MovingAverageTooltip, MACDTooltip,BollingerBandTooltip,RSITooltip } = tooltip;

var { XAxis, YAxis } = axes;
var { macd, ema, sma , bollingerBand,rsi} = indicator;

var { fitWidth, TypeChooser } = helper;


export default class MacdChart extends React.Component
{

    render(){
        var{ratio,width,type,data,macDFast,macDSlow,macDSignal}= this.props;
        var macdCalculator = macd()
            .fast(macDFast)
            .slow(macDSlow)
            .signal(macDSignal)
            .merge((d, c) => {d.macd = c;})
            .accessor(d => d.macd);
        return (
            <div>
                <ChartCanvas ratio={ratio} width={width}
                             margin={{ left: 70, right: 70, top: 20, bottom: 30 }} type={type}
                             seriesName="MSFT"
                             data={data} calculator={[macdCalculator]}
                             xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}>

                </ChartCanvas>
            </div>
        );
    }

}
