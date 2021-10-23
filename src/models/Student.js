


class Student {
    constructor(fullName = '', age = 0, lessonCount = 0) {
        this.fullName = fullName;
        this.age = age;
        this.lessonCount = lessonCount;
    }

    setLessonCount(lessonCount) {
        console.log('setLessonCount', lessonCount)
        lessonCount = parseInt(lessonCount);
        if (isNaN(lessonCount) === false && lessonCount >= 0) {
            this.lessonCount = lessonCount;
        }
    }

    clone() {
        const student = new Student();
        for (const key in this) {
            student[key] = this[key];
        }
        return student;
    }
}


export default Student;
