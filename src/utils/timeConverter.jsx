const timeConverter = () => {
    function timeAgo(timestamp) {
        const now = new Date();
        const timePassed = now - new Date(timestamp);
        const minutes = Math.floor(timePassed / (1000 * 60));
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(minutes / (60 * 24));
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (minutes < 1) {
            return "Just now";
        } else if (minutes === 1) {
            return "1 min ago";
        } else if (minutes < 60) {
            return `${minutes} mins ago`;
        } else if (hours === 1) {
            return "1 hour ago";
        } else if (hours < 24) {
            return `${hours} hours ago`;
        } else if (days === 1) {
            return "1 day ago";
        } else if (days < 30) {
            return `${days} days ago`;
        } else if (months === 1) {
            return "1 month ago";
        } else if (months < 12) {
            return `${months} months ago`;
        } else if (years === 1) {
            return "1 year ago";
        } else {
            return `${years} years ago`;
        }
    }

    const formatDate = (timestamp) => {

        if (timestamp === undefined) {
            return
        }
        const date = new Date(timestamp);
        const months = [
            "Jan", "Feb", "Mar", "April", "May", "June",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];
        const month = months[date.getMonth()];
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        let hour = date.getHours();
        const minute = String(date.getMinutes()).padStart(2, '0');
        const ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        hour = hour ? hour : 12;

        const formattedDate = `${month} ${day}, ${year} ${hour}:${minute}${ampm}`;
        return formattedDate;
        
        
    }


    return {timeAgo, formatDate}
}


export default timeConverter
