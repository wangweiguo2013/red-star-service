class CourseController {
  getCourse(ctx) {
    ctx.body = {
      data: {},
      code: 0,
      msg: "success",
    };
  }
}

export default new CourseController();
