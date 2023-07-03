cursos = [
  {
    id: 1,
    name: "si",
    teacher: "yo",
    description: "un curso",
    price: "1 peso",
  },
  {
    id: 2,
    name: "no",
    teacher: "thiago",
    description: "XD",
    price: "1000000000000000 bolivares"
  },
  {
    id: 3,
    name: "tu mama",
    teacher: "cba",
    description: "when haces tus momos en video",
    price: "argentina"
  }
]

const getCourseDetailController = (id) => {
  const course = cursos.find((curso) => curso.id === id);

  if (course) {
    return {
      id: course.id,
      name: course.name,
      teacher: course.teacher,
      description: course.description,
      price: course.price,
      status: true
    };
  }

  return null;
};

module.exports = getCourseDetailController;


