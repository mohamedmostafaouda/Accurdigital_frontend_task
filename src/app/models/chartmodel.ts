export default class ChartModel{
    chartName:string;
    chartIconSrc:string
    id:number;
    constructor(chartName:string, chartIconSrc:string, id:number){
        this.chartName = chartName;
        this.chartIconSrc = chartIconSrc;
        this.id = id;
    }
}