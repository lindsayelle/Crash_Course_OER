"use server";
import courses from "../constants/course.json";
import styles from "../styles/page.module.css";
import routes from "../constants/routes";
import Link from "next/link";

export default async function HomePage() {
  return (
    <div className={styles.courseListContainer}>
      <h1 className={styles.title}>Available Courses</h1>
      <div className={styles.courseGrid}>
        {courses.map((course) => {
          const totalSections = course.sections?.length || 0;
          const progress = course.progress || 0;

          return (
            <Link
              key={course.id}
              href={routes.courseInfo(course.id)}
              className={styles.courseCard}
            >
              <div className={styles.text}>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </div>
              <p className={styles.sectionCount}>📘 {totalSections} sections</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
