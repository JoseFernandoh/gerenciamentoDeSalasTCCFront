import {format} from "date-fns";

export default function FormatarData(data, pattern){
    return format(new Date(data), pattern)
}