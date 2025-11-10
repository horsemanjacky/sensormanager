import { IconColor } from "sap/ui/core/library";
// import { form } from "sap/ui/layout/library";

export const enum Threshold{
    Warm = 4,
    Hot = 5
}


export default {
	formatValue: (value: string) => {
		return value?.toUpperCase();
	},
    formatIconColor: (temperature: Threshold): IconColor | string => {
        if(temperature <= Threshold.Warm){
            return "#0984e3";;
        } else if (temperature >= Threshold.Warm && temperature < Threshold.Hot){
            return IconColor.Critical;
        } else {
            return IconColor.Negative;
        }
    }
};
