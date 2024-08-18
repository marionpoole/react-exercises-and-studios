export default function HobbyLinks() {
    let hobbyLinks = ["https://www.everythingcrossstitch.com/", "https://journeywithminnie.com/", "https://www.alltrails.com/"];
    return (
        <div>
        <ul>
        <li><a href = {hobbyLinks[0]}>Everything Cross Stitch</a></li>
        <li><a href = {hobbyLinks[1]}>Travel Blogging</a></li>
        <li><a href = {hobbyLinks[2]}>Hiking</a></li>
        </ul>
        </div>
    );
}