import moment from "moment";

const Date = () => {
    const dateString = moment().format('LL').toString()

    return <time dateTime={dateString}>{dateString}</time>
}

export default Date