export default class OptionModel{
    optionName:string = '';
    iconSrc:string = '';
    
    constructor(optionName:string, iconSrc:string){
        this.optionName = optionName;
        this.iconSrc = iconSrc;
    }
}