//src/constants/Api.jsx
console.log("Current Mode:", import.meta.env.MODE);

const scheme = import.meta.env.VITE_SCHEME;
const ip = import.meta.env.VITE_IP;
const port = import.meta.env.VITE_PORT;

export const BaseUrl = `${scheme}://${ip}:${port}`;  // → http://localhost:8082

export const Apis = ({

    //login_API

    LOGIN_USER: "/api/auth/login",
    REFRESH_TOKEN: "/api/auth/refresh",

    //student_API
    STUDENT_LIST: "/v1/api/student/list",
    STUDENT_ADD: "/v1/api/student/add",
    STUDENT_UPDATE: (id) => `/v1/api/student/update/${id}`,
    STUDENT_DELETE: (id) => `/v1/api/student/delete/${id}`,
    STUDENT_GET_BY_ID: (id) => `/v1/api/student/${id}`,

    //CourseApi
    COURSE_LIST: "/v1/api/course/list",

});
