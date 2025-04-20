import styles from "@/styles/NoteBoxes.module.css"

export default function NoteBoxes({ type, name, content }) {
    const allowedTypes = ["Example", "Literature Review", "Key Words"];
    if (!allowedTypes.includes(type)) {
        console.warn(`Invalid NoteBox type: "${type}"`);
        return null;
    }

    let emoji;
    

    switch (type) {
        case "Example":
            emoji = "💡";
            break;
        case "Literature Review":
            emoji = "📖";
            break;
        case "Key Words":
            emoji = "✏️";
            break;
        default:
            emoji = "💡";
            break;
    }

    let heading = type;

    if (type === "Example")
        heading = heading + " " + "of" + " " + name;
    else if (type === "Literature Review")
        heading = heading + " " + "on" + " " + name;

    return (
        <div className={styles.noteBoxes}>
            <p><strong><span className={styles.emoji}>{ emoji }</span> { heading }</strong></p>
            <div className={styles.content}>
                { content }
            </div>
        </div>
    );
}