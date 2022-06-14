import TimeAgo from "javascript-time-ago";
import de from "javascript-time-ago/locale/de";

TimeAgo.addLocale(de);

const timeago = new TimeAgo("de-De");

export default timeago;
