function toTitleCase(str) {
    return str.replace(/-/g, ' ')
              .replace(/\b\w/g, char => char.toUpperCase());
}

export async function generateMetadata({ params }) {
const courseTitle = toTitleCase(params.courseId);
    return {title: `${courseTitle} | OER Crash Course`};
}
  
  
export default function LearnLayout({ children }) {
    return <>{children}</>;
}
  