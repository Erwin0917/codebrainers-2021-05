


class Student{
    constructor(fullName = '', age = 0, lessonCount = 0) {
        this.fullName = fullName;
        this.age = age;
        this.lessonCount = lessonCount;
    }

    setLessonCount(lessonCount) {
        console.log('setLessonCount', lessonCount)
        if (lessonCount >= 0) {
            this.lessonCount = lessonCount;
        }
    }
}


export default Student;