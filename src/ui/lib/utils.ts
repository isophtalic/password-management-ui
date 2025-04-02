import clsx from "clsx";
import moment from "moment-timezone";

export function cn(...classname: any[]) {
    return clsx(classname)
}

export function formatDate(input: number, format?: string): string {
    if (input <= 0) {
        return ""
    }
    if (!format || format === "") {
        format = "YYYY-MM-DD HH:mm:ss"
    }
    return moment.unix(input).tz(moment.tz.guess()).format(format)
}