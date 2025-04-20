'use client';

import { useParams, useRouter } from 'next/navigation';
import courses from "@/constants/course.json";
import styles from "@/styles/CourseInfo.module.css";
import BackButton from "@/components/BackButton";

export default function CourseInfoPage() {
  const params = useParams();
  const router = useRouter();

  const course = courses.find((c) => c.id === params.courseId);

  if (!course) return <p>Course not found</p>;

  const handleStartLearning = () => {
    router.push(`/${course.id}/learn`);
  };

  return (
    <div className={styles.body}>
        <BackButton href={`/`} label="← Back to Course List" />
      <div className={styles.courseInfoHeader}>
        <h1>{course.title}</h1>
        <p className={styles.sectionCount}>📘 {course.sections.length} sections</p>
        
      </div>

      <div className={styles.sectionGrid}>
        {course.sections.map((section, index) => (
          <div key={index} className={styles.sectionCard}>
            <div className={styles.sectionTitleWrapper}>
              <div className={styles.sectionTitle}>📌 {section.title}</div>
            </div>
            <ul className={styles.topicList}>
              {section.topics.map((topic, i) => (
                <li key={i} className={styles.topicItem}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button onClick={handleStartLearning} className={styles.startButton}>
        Start Learning
      </button>
    </div>
  );
}
