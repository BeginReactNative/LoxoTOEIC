class api {
   static getCourses() {
        var url = 'https://api-dot-hola-edu.appspot.com/api?action=getRandomCourses'
        fetch(url).then((res) => {
            return res.json()
        }).catch(error => {
            return error
        })
    }
}
export default api;
